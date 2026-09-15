import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Calendar,
  Percent,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  PieChart,
  ArrowUpRight,
  ShieldAlert,
  Sparkles,
  Info,
  X
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Language, calculatorTranslations } from '../data/content';

interface CompoundCalculatorProps {
  lang: Language;
  themeColor: string;
  isOpen: boolean;
  onClose: () => void;
}

interface CurrencyOption {
  code: string;
  symbol: string;
  label: string;
  defaultAmount: number;
  step: number;
}

const CURRENCIES: CurrencyOption[] = [
  { code: 'USD', symbol: '$', label: 'USD ($)', defaultAmount: 10000, step: 1000 },
  { code: 'KRW', symbol: '₩', label: 'KRW (₩)', defaultAmount: 10000000, step: 1000000 },
  { code: 'EUR', symbol: '€', label: 'EUR (€)', defaultAmount: 10000, step: 1000 },
  { code: 'JPY', symbol: '¥', label: 'JPY (¥)', defaultAmount: 1000000, step: 100000 },
  { code: 'CNY', symbol: '¥', label: 'CNY (¥)', defaultAmount: 50000, step: 5000 },
  { code: 'GBP', symbol: '£', label: 'GBP (£)', defaultAmount: 10000, step: 1000 },
  { code: 'USDT', symbol: '₮', label: 'USDT (₮)', defaultAmount: 10000, step: 1000 },
  { code: 'AED', symbol: 'AED', label: 'AED (د.إ)', defaultAmount: 30000, step: 5000 },
  { code: 'INR', symbol: '₹', label: 'INR (₹)', defaultAmount: 500000, step: 50000 },
];

export const CompoundCalculator: React.FC<CompoundCalculatorProps> = ({ lang, themeColor, isOpen, onClose }) => {
  const t = calculatorTranslations[lang] || calculatorTranslations.ko;

  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>('USD');
  const activeCurrency = useMemo(() => {
    return CURRENCIES.find(c => c.code === selectedCurrencyCode) || CURRENCIES[0];
  }, [selectedCurrencyCode]);

  const [principal, setPrincipal] = useState<number>(10000);
  const [monthlyRate, setMonthlyRate] = useState<number>(8.5); // %/month
  const [months, setMonths] = useState<number>(12);
  const [mdd, setMdd] = useState<number>(13.2); // % target maximum drawdown
  const [scenarioSeed, setScenarioSeed] = useState<number>(42);
  const [showTable, setShowTable] = useState<boolean>(false);

  // ESC key listener & body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleCurrencyChange = (code: string) => {
    setSelectedCurrencyCode(code);
    const curr = CURRENCIES.find(c => c.code === code);
    if (curr) {
      setPrincipal(curr.defaultAmount);
    }
  };

  // Month-by-month compounding calculation with realistic MDD & volatility cycles
  const simulation = useMemo(() => {
    // Deterministic pseudo-random number generator based on parameters and seed
    let s = (Math.abs(Math.sin((scenarioSeed + 17) * 9301 + (Math.round(mdd * 10) + months * 31 + Math.round(monthlyRate * 7))) * 233280)) % 233280;
    const rnd = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };

    const rDecimal = Math.max(0, monthlyRate || 0) / 100;
    const mddDecimal = Math.min(0.85, Math.max(0.01, (mdd || 0) / 100));

    // Choose placement for primary drawdown cycle
    const primaryDdMonth = months <= 2
      ? months
      : Math.min(months - 1, Math.max(2, Math.round(months * (0.33 + rnd() * 0.15))));
    const hasSecondary = months >= 15;
    const secondaryDdMonth = hasSecondary
      ? Math.min(months - 1, Math.max(primaryDdMonth + 3, Math.round(months * (0.68 + rnd() * 0.12))))
      : -1;

    // Construct raw monthly return factor sequence
    const monthlyFactors: number[] = [];
    for (let m = 1; m <= months; m++) {
      if (m === primaryDdMonth) {
        // Main drawdown trigger month (drops ~80-95% of target MDD)
        monthlyFactors.push(-mddDecimal * (0.8 + rnd() * 0.15));
      } else if (m === primaryDdMonth + 1 && months > 3 && rnd() > 0.35) {
        // Second consolidation/dip month that sets the lowest trough of MDD
        monthlyFactors.push(-mddDecimal * (0.18 + rnd() * 0.12));
      } else if (m === primaryDdMonth + 1 || m === primaryDdMonth + 2) {
        // Strong recovery rally as quant momentum kicks in
        monthlyFactors.push(rDecimal * (1.6 + rnd() * 0.6));
      } else if (m === secondaryDdMonth) {
        // Secondary milder drawdown (~40-60% of MDD)
        monthlyFactors.push(-mddDecimal * (0.4 + rnd() * 0.2));
      } else if (m === secondaryDdMonth + 1) {
        monthlyFactors.push(rDecimal * (1.4 + rnd() * 0.5));
      } else {
        // Normal trading month: fluctuates around target return with realistic variance
        const isChoppy = rnd() < 0.16;
        if (isChoppy) {
          monthlyFactors.push((rnd() - 0.45) * 0.02); // -0.9% to +1.1%
        } else {
          const spread = rDecimal * 0.42;
          const delta = (rnd() * 2 - 0.85) * spread;
          monthlyFactors.push(Math.max(-0.025, rDecimal + delta));
        }
      }
    }

    // First pass: measure peak-to-trough max drawdown to calibrate accurately to user's MDD input
    let tempBal = principal;
    let tempPeak = principal;
    let measuredMaxDd = 0;
    for (let m = 0; m < months; m++) {
      tempBal = Math.max(0, tempBal * (1 + monthlyFactors[m]));
      if (tempBal > tempPeak) tempPeak = tempBal;
      const dd = tempPeak > 0 ? (tempPeak - tempBal) / tempPeak : 0;
      if (dd > measuredMaxDd) measuredMaxDd = dd;
    }

    // Scale negative drawdown months so actual simulated MDD hits user target accurately
    if (measuredMaxDd > 0.001) {
      const scaleRatio = mddDecimal / measuredMaxDd;
      for (let m = 0; m < months; m++) {
        if (monthlyFactors[m] < 0) {
          monthlyFactors[m] = monthlyFactors[m] * scaleRatio;
        }
      }
    }

    // Second pass: build complete monthly timeline with both realistic and theoretical tracks
    const timeline = [];
    let currentRealistic = principal;
    let currentTheoretical = principal;
    let rollingPeak = principal;
    let actualMddReached = 0;

    timeline.push({
      month: 0,
      label: `0${t.monthsSuffix}`,
      principal: principal,
      realisticTotal: principal,
      theoreticalTotal: principal,
      profit: 0,
      monthlyProfit: 0,
      monthlyReturn: 0,
      drawdown: 0,
      startBalance: principal,
    });

    for (let m = 1; m <= months; m++) {
      const startBal = currentRealistic;
      const factor = monthlyFactors[m - 1];
      currentRealistic = Math.max(0, currentRealistic * (1 + factor));
      if (currentRealistic > rollingPeak) rollingPeak = currentRealistic;

      const currentDdPercent = rollingPeak > 0 ? ((currentRealistic - rollingPeak) / rollingPeak) * 100 : 0;
      if (Math.abs(currentDdPercent) > actualMddReached) {
        actualMddReached = Math.abs(currentDdPercent);
      }

      currentTheoretical = currentTheoretical * (1 + rDecimal);

      const monthProfit = currentRealistic - startBal;
      const cumProfit = currentRealistic - principal;
      const monthReturnPercent = startBal > 0 ? (monthProfit / startBal) * 100 : 0;

      timeline.push({
        month: m,
        label: `${m}${t.monthsSuffix}`,
        principal: principal,
        realisticTotal: Math.round(currentRealistic),
        theoreticalTotal: Math.round(currentTheoretical),
        profit: Math.round(cumProfit),
        monthlyProfit: Math.round(monthProfit),
        monthlyReturn: monthReturnPercent,
        drawdown: currentDdPercent,
        startBalance: Math.round(startBal),
      });
    }

    const finalRealistic = currentRealistic;
    const finalTheoretical = currentTheoretical;
    const totalProfit = finalRealistic - principal;
    const totalReturnRate = principal > 0 ? (totalProfit / principal) * 100 : 0;
    const multiplier = principal > 0 ? (finalRealistic / principal) : 1;

    return {
      timeline,
      finalBalance: Math.round(finalRealistic),
      finalTheoretical: Math.round(finalTheoretical),
      totalProfit: Math.round(totalProfit),
      totalReturnRate,
      multiplier,
      actualMdd: actualMddReached,
    };
  }, [principal, monthlyRate, months, mdd, scenarioSeed, t.monthsSuffix]);

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  const formatCurrency = (val: number) => {
    return `${activeCurrency.symbol} ${formatNumber(val)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl max-h-[92vh] bg-zinc-950 border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black overflow-hidden flex flex-col z-10 font-sans"
            role="dialog"
            aria-modal="true"
            aria-labelledby="compound-calculator-title"
          >
            {/* Sticky Header */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 flex items-center justify-between bg-zinc-900/95 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h2 id="compound-calculator-title" className="text-white font-extrabold text-sm sm:text-lg md:text-xl leading-tight truncate">
                    {lang === 'ko' ? (
                      <>내 투자금으로 <span className="text-emerald-400">얼마나 벌 수 있을까요?</span></>
                    ) : (
                      t.title
                    )}
                  </h2>
                  <p className="text-gray-400 text-[10px] sm:text-xs truncate">
                    {lang === 'ko' ? '조건을 움직이면 예상 결과를 바로 알려드려요' : t.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Currency selector */}
                <div className="flex items-center bg-zinc-800/90 border border-white/10 rounded-lg sm:rounded-xl px-2 py-1">
                  <select
                    value={selectedCurrencyCode}
                    aria-label={t.currency}
                    onChange={(e) => handleCurrencyChange(e.target.value)}
                    className="bg-transparent text-emerald-400 font-bold text-xs sm:text-sm focus:outline-none cursor-pointer"
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c.code} value={c.code} className="bg-zinc-900 text-white font-normal">
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  aria-label={t.close || '닫기'}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-zinc-800/90 border border-white/10 hover:bg-zinc-700 text-gray-400 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-6 space-y-4 sm:space-y-6 custom-scrollbar">
              {/* Main Grid: Input Form + Results Display */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-start">
                {/* Left Column: Input Sliders (5 cols on lg, full width on mobile) */}
                <div className="lg:col-span-5 bg-zinc-900/85 border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-xl space-y-3.5 sm:space-y-4">
                  {/* Slider 1: Principal Amount */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs sm:text-sm font-semibold text-gray-300 flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t.principalPrompt}</span>
                      </span>
                      <b className="text-sm sm:text-base font-extrabold text-emerald-400 font-mono">
                        {formatCurrency(principal)}
                      </b>
                    </div>
                    <input
                      type="range"
                      min={selectedCurrencyCode === 'KRW' ? 1000000 : 1000}
                      max={selectedCurrencyCode === 'KRW' ? 100000000 : 50000}
                      step={activeCurrency.step}
                      value={principal}
                      aria-label={t.principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer h-1.5 sm:h-2 bg-zinc-800 rounded-lg"
                    />
                    {/* Compact preset increments */}
                    <div className="grid grid-cols-4 gap-1 sm:gap-1.5 pt-0.5">
                      {(selectedCurrencyCode === 'KRW' ? [
                        { label: '+100만', val: 1000000 },
                        { label: '+500만', val: 5000000 },
                        { label: '+1,000만', val: 10000000 },
                        { label: '+5,000만', val: 50000000 },
                      ] : [
                        { label: '+1k', val: 1000 },
                        { label: '+5k', val: 5000 },
                        { label: '+10k', val: 10000 },
                        { label: '+20k', val: 20000 },
                      ]).map((p, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setPrincipal(prev => prev + p.val)}
                          className="text-[10px] sm:text-xs py-1 px-1 rounded-md sm:rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-gray-300 font-mono transition-colors border border-white/5 hover:border-white/20 truncate"
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Slider 2: Investment Period */}
                  <div className="space-y-1.5 pt-1 border-t border-white/5">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs sm:text-sm font-semibold text-gray-300 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>{t.periodPrompt}</span>
                      </span>
                      <b className="text-xs sm:text-sm font-extrabold text-white font-mono">
                        {months}{t.monthsSuffix} ({((months / 12).toFixed(1))}{t.yearsSuffix})
                      </b>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="36"
                      step="1"
                      value={months}
                      aria-label={t.period}
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer h-1.5 sm:h-2 bg-zinc-800 rounded-lg"
                    />
                    <div className="grid grid-cols-5 gap-1 pt-0.5">
                      {[3, 6, 12, 24, 36].map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setMonths(p)}
                          className={`text-[10px] sm:text-xs py-0.5 sm:py-1 rounded-md border font-medium transition-colors text-center ${
                            months === p
                              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold'
                              : 'bg-zinc-800/60 border-white/5 text-gray-400 hover:text-white hover:bg-zinc-800'
                          }`}
                        >
                          {p >= 12 ? `${p / 12}${t.yearsSuffix}` : `${p}${t.monthsSuffix}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Slider 3: Monthly Target Return Rate */}
                  <div className="space-y-1.5 pt-1 border-t border-white/5">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs sm:text-sm font-semibold text-gray-300 flex items-center gap-1">
                        <Percent className="w-3.5 h-3.5 text-gray-400" />
                        <span>{t.monthlyRatePrompt}</span>
                      </span>
                      <b className="text-xs sm:text-sm font-extrabold text-emerald-400 font-mono">
                        {monthlyRate.toFixed(1)}%
                      </b>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.5"
                      value={monthlyRate}
                      aria-label={t.monthlyRate}
                      onChange={(e) => setMonthlyRate(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer h-1.5 sm:h-2 bg-zinc-800 rounded-lg"
                    />
                    <div className="grid grid-cols-5 gap-1 pt-0.5">
                      {[5, 8.5, 12, 15, 20].map((rate) => (
                        <button
                          key={rate}
                          type="button"
                          onClick={() => setMonthlyRate(rate)}
                          className={`text-[10px] sm:text-xs py-0.5 sm:py-1 rounded-md border font-mono transition-colors ${
                            monthlyRate === rate
                              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold'
                              : 'bg-zinc-800/60 border-white/5 text-gray-400 hover:text-white hover:bg-zinc-800'
                          }`}
                        >
                          {rate}%
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Slider 4: MDD (Maximum Drawdown) */}
                  <div className="space-y-1.5 pt-1 border-t border-white/5">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs sm:text-sm font-semibold text-amber-300 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                        <span>{t.mddPrompt}</span>
                      </span>
                      <b className="text-xs sm:text-sm font-extrabold text-amber-400 font-mono">
                        -{mdd.toFixed(1)}%
                      </b>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="35"
                      step="0.5"
                      value={mdd}
                      aria-label={t.mdd}
                      onChange={(e) => setMdd(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer h-1.5 sm:h-2 bg-zinc-800 rounded-lg"
                    />
                    <div className="grid grid-cols-5 gap-1 pt-0.5">
                      {[
                        { label: '5%', val: 5 },
                        { label: '10%', val: 10 },
                        { label: '13.2%', val: 13.2, highlight: true },
                        { label: '18%', val: 18 },
                        { label: '25%', val: 25 },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => setMdd(item.val)}
                          className={`text-[10px] sm:text-xs py-0.5 sm:py-1 rounded-md border font-medium transition-colors text-center ${
                            mdd === item.val
                              ? 'bg-amber-500/25 border-amber-400 text-amber-200 font-bold'
                              : item.highlight
                              ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                              : 'bg-zinc-800/60 border-white/5 text-gray-400 hover:text-white hover:bg-zinc-800'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions: 시나리오 생성 & 초기화 */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setScenarioSeed(prev => prev + 1)}
                      className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg sm:rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 active:scale-98 transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t.regenerateSimulation}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPrincipal(activeCurrency.defaultAmount);
                        setMonthlyRate(8.5);
                        setMdd(13.2);
                        setMonths(12);
                        setScenarioSeed(42);
                      }}
                      className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg sm:rounded-xl border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-zinc-800 active:scale-98 transition-all"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>{t.reset}</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Output Metrics + Compact Growth Chart (7 cols on lg) */}
                <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                  {/* Results Card */}
                  <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-950 border border-emerald-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl">
                    <div className="flex justify-between items-center pb-2.5 sm:pb-3 border-b border-white/10">
                      <span className="text-[11px] sm:text-xs font-semibold text-gray-400">
                        {months}{t.monthsSuffix} {t.expectedAmountAfter}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] sm:text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300">
                          MDD -{simulation.actualMdd.toFixed(1)}%
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                          {simulation.multiplier.toFixed(2)}x
                        </span>
                      </div>
                    </div>

                    {/* Big Final Amount */}
                    <div className="my-2.5 sm:my-3">
                      <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono truncate">
                        {formatCurrency(simulation.finalBalance)}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium mt-1">
                        <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="font-bold">+{formatCurrency(simulation.totalProfit)}</span>
                        <span className="text-gray-400">· +{simulation.totalReturnRate.toFixed(1)}%</span>
                      </div>
                    </div>

                    {/* 3 Metric Mini Cards */}
                    <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/5">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-zinc-950/60 border border-white/5">
                        <div className="text-[10px] text-gray-400 truncate">{t.totalPrincipal}</div>
                        <div className="text-xs sm:text-sm font-bold text-white font-mono truncate mt-0.5">
                          {formatCurrency(principal)}
                        </div>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20">
                        <div className="text-[10px] text-emerald-300/80 truncate">{t.investmentProfit}</div>
                        <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono truncate mt-0.5">
                          +{formatCurrency(simulation.totalProfit)}
                        </div>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-zinc-950/60 border border-white/5">
                        <div className="text-[10px] text-gray-400 truncate">{t.totalReturn}</div>
                        <div className="text-xs sm:text-sm font-bold text-blue-400 font-mono truncate mt-0.5">
                          +{simulation.totalReturnRate.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compact Growth Chart */}
                  <div className="bg-zinc-900/80 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                        <PieChart className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t.chartTitle}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-[10px] text-gray-400">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span>{t.realisticLegend}</span>
                        </span>
                        <span className="flex items-center gap-1 text-cyan-400/80">
                          <span className="w-2 h-0.5 bg-cyan-400"></span>
                          <span>{t.theoreticalLegend}</span>
                        </span>
                      </div>
                    </div>

                    <div className="h-36 sm:h-52 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={simulation.timeline}
                          margin={{ top: 5, right: 5, left: -10, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="compoundRealisticGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                              <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                          <XAxis
                            dataKey="label"
                            stroke="#9ca3af"
                            fontSize={10}
                            tickLine={false}
                            axisLine={{ stroke: '#ffffff15' }}
                          />
                          <YAxis
                            stroke="#9ca3af"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => {
                              if (selectedCurrencyCode === 'KRW' && value >= 100000000) return `${(value / 100000000).toFixed(0)}억`;
                              if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                              if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
                              return value;
                            }}
                          />
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                  <div className="bg-zinc-950 border border-white/20 p-2.5 rounded-lg shadow-xl text-[11px] font-mono">
                                    <div className="text-gray-300 font-bold pb-1 border-b border-white/10 mb-1">
                                      {data.month} {t.monthsSuffix}
                                    </div>
                                    <div className="text-emerald-400 font-bold flex justify-between gap-3">
                                      <span>{t.realisticLegend}:</span>
                                      <span>{formatCurrency(data.realisticTotal)}</span>
                                    </div>
                                    <div className="text-cyan-400/80 flex justify-between gap-3">
                                      <span>{t.theoreticalLegend}:</span>
                                      <span>{formatCurrency(data.theoreticalTotal)}</span>
                                    </div>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="theoreticalTotal"
                            stroke="#38bdf8"
                            strokeDasharray="4 4"
                            strokeWidth={1.5}
                            dot={false}
                          />
                          <Area
                            type="monotone"
                            dataKey="realisticTotal"
                            stroke="#10b981"
                            fillOpacity={1}
                            fill="url(#compoundRealisticGradient)"
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Monthly table toggle */}
                    <div className="mt-2 pt-2 border-t border-white/5 flex justify-between items-center text-[11px]">
                      <span className="text-gray-400">
                        {t.recordedMdd}: <b className="text-amber-400 font-mono">-{simulation.actualMdd.toFixed(1)}%</b>
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowTable(!showTable)}
                        className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
                      >
                        <span>{showTable ? t.tableToggleClose : t.tableToggleOpen}</span>
                        {showTable ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    </div>

                    {showTable && (
                      <div className="mt-2.5 max-h-48 overflow-y-auto rounded-lg border border-white/10 bg-zinc-950/90 text-[10px] font-mono">
                        <table className="w-full text-left">
                          <thead className="bg-zinc-900 text-gray-400 border-b border-white/10 sticky top-0">
                            <tr>
                              <th className="py-1.5 px-2">{t.tableMonth}</th>
                              <th className="py-1.5 px-2 text-right">{t.tableStart}</th>
                              <th className="py-1.5 px-2 text-right">{t.tableRealisticReturn}</th>
                              <th className="py-1.5 px-2 text-right text-emerald-400">{t.tableEnd}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-gray-300">
                            {simulation.timeline.slice(1).map((row) => (
                              <tr key={row.month} className="hover:bg-white/5">
                                <td className="py-1 px-2 text-white">{row.month}{t.monthsSuffix}</td>
                                <td className="py-1 px-2 text-right text-gray-400">{formatCurrency(row.startBalance || 0)}</td>
                                <td className={`py-1 px-2 text-right font-medium ${row.monthlyReturn >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                  {row.monthlyReturn >= 0 ? '+' : ''}{row.monthlyReturn.toFixed(1)}%
                                </td>
                                <td className="py-1 px-2 text-right font-bold text-white">{formatCurrency(row.realisticTotal)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Compact Collapsible Disclaimer */}
              <details className="cursor-pointer group rounded-xl bg-zinc-900/50 border border-white/5 p-2.5 sm:p-3 text-xs text-gray-400 transition-colors">
                <summary className="font-semibold text-gray-300 flex items-center justify-between select-none">
                  <span className="flex items-center gap-1.5 text-amber-400/90 text-xs">
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.disclaimerTitle}</span>
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-2 text-[11px] sm:text-xs text-gray-400 leading-relaxed break-keep">
                  {t.disclaimerText}
                </p>
              </details>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

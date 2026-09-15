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
            <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between bg-zinc-900/95 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">{t.tag}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                      MDD 시뮬레이터
                    </span>
                  </div>
                  <h2 id="compound-calculator-title" className="text-white font-extrabold text-base sm:text-xl md:text-2xl leading-tight">
                    {t.title}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Currency selector in header */}
                <div className="flex items-center gap-1.5 bg-zinc-800/90 border border-white/10 rounded-xl px-2 sm:px-3 py-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400 hidden sm:block" />
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
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-zinc-800/90 border border-white/10 hover:bg-zinc-700 text-gray-400 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 flex-shrink-0"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 custom-scrollbar">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed -mt-1 sm:-mt-2">
                {t.subtitle}
              </p>

              {/* Main Grid: Input Form + Results Display */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Input Form (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-zinc-900/80 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/50"
          >
            {/* Currency Selector Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                <span>{t.currency}</span>
              </div>
              <div className="relative">
                <select
                  value={selectedCurrencyCode}
                  aria-label={t.currency}
                  onChange={(e) => handleCurrencyChange(e.target.value)}
                  className="bg-zinc-800 text-emerald-400 font-semibold text-sm rounded-xl px-3 py-1.5 border border-white/15 focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code} className="bg-zinc-900 text-white">
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {/* Input 1: Principal */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    {t.principal}
                  </label>
                  <span className="text-xs text-gray-400 font-mono">
                    {activeCurrency.code}
                  </span>
                </div>
                <div className="relative rounded-xl bg-zinc-950 border border-white/15 focus-within:border-emerald-500 transition-colors">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-base">
                    {activeCurrency.symbol}
                  </span>
                  <input
                    type="number"
                    min="0"
                    step={activeCurrency.step}
                    value={principal}
                    onChange={(e) => setPrincipal(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full bg-transparent pl-10 pr-4 py-3 text-lg font-bold text-white font-mono focus:outline-none"
                    placeholder="10000"
                  />
                </div>
                {/* Preset increments */}
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {[
                    { label: '+1k', val: 1000 },
                    { label: '+5k', val: 5000 },
                    { label: '+10k', val: 10000 },
                    { label: '+50k', val: 50000 },
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPrincipal(prev => prev + p.val * (activeCurrency.code === 'KRW' || activeCurrency.code === 'JPY' ? 100 : 1))}
                      className="text-xs py-1.5 px-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-gray-300 font-mono transition-colors border border-white/5 hover:border-white/20"
                    >
                      +{formatNumber(p.val * (activeCurrency.code === 'KRW' || activeCurrency.code === 'JPY' ? 100 : 1))}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 2: Target Monthly Return Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-gray-400" />
                    {t.monthlyRate}
                  </label>
                  <span className="text-sm font-bold text-emerald-400 font-mono">
                    {monthlyRate.toFixed(1)}% / mo
                  </span>
                </div>
                <div className="relative rounded-xl bg-zinc-950 border border-white/15 focus-within:border-emerald-500 transition-colors mb-3">
                  <input
                    type="number"
                    min="0.1"
                    max="100"
                    step="0.5"
                    value={monthlyRate}
                    onChange={(e) => setMonthlyRate(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full bg-transparent px-4 py-3 text-lg font-bold text-white font-mono focus:outline-none"
                    placeholder="8.5"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">
                    %/월
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={monthlyRate}
                  aria-label={t.monthlyRate}
                  onChange={(e) => setMonthlyRate(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
                {/* Quick rate chips */}
                <div className="flex gap-2 mt-2">
                  {[5, 8.5, 12, 15, 20].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setMonthlyRate(rate)}
                      className={`flex-1 text-xs py-1.5 rounded-lg border font-mono transition-colors ${
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

              {/* Input 3: MDD (Maximum Drawdown %) - Newly Added */}
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-amber-300 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    <span>{t.mdd}</span>
                  </label>
                  <span className="text-sm font-bold text-amber-400 font-mono">
                    -{mdd.toFixed(1)}%
                  </span>
                </div>
                <div className="relative rounded-xl bg-zinc-950 border border-amber-500/30 focus-within:border-amber-400 transition-colors mb-3">
                  <input
                    type="number"
                    min="1"
                    max="50"
                    step="0.1"
                    value={mdd}
                    onChange={(e) => setMdd(Math.max(0.5, Math.min(60, Number(e.target.value) || 1)))}
                    className="w-full bg-transparent px-4 py-3 text-lg font-bold text-white font-mono focus:outline-none"
                    placeholder="13.2"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-400 font-bold text-sm">
                    %
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  step="0.5"
                  value={mdd}
                  aria-label={t.mdd}
                  onChange={(e) => setMdd(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
                {/* Preset MDD chips */}
                <div className="grid grid-cols-5 gap-1.5 mt-2.5">
                  {[
                    { label: t.quickMdd5, val: 5 },
                    { label: t.quickMdd10, val: 10 },
                    { label: t.quickMddRealQuant, val: 13.2, highlight: true },
                    { label: t.quickMdd18, val: 18 },
                    { label: t.quickMdd25, val: 25 },
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setMdd(item.val)}
                      className={`text-[11px] py-1.5 px-1 rounded-lg border font-medium transition-colors text-center truncate ${
                        mdd === item.val
                          ? 'bg-amber-500/25 border-amber-400 text-amber-200 font-bold shadow-sm shadow-amber-500/20'
                          : item.highlight
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 hover:bg-amber-500/20'
                          : 'bg-zinc-800/60 border-white/5 text-gray-400 hover:text-white hover:bg-zinc-800'
                      }`}
                      title={item.label}
                    >
                      {item.val}%
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 mt-2.5 leading-relaxed flex items-start gap-1">
                  <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{t.mddHelp}</span>
                </p>
              </div>

              {/* Input 4: Investment Period in Months */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {t.period}
                  </label>
                  <span className="text-sm font-bold text-white font-mono">
                    {months} {t.monthsSuffix} ({((months / 12).toFixed(1))}y)
                  </span>
                </div>
                <div className="relative rounded-xl bg-zinc-950 border border-white/15 focus-within:border-emerald-500 transition-colors mb-3">
                  <input
                    type="number"
                    min="1"
                    max="120"
                    value={months}
                    onChange={(e) => setMonths(Math.max(1, Math.min(120, Number(e.target.value) || 1)))}
                    className="w-full bg-transparent px-4 py-3 text-lg font-bold text-white font-mono focus:outline-none"
                    placeholder="12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">
                    {t.monthsSuffix}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="48"
                  value={months}
                  aria-label={t.period}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
                />
                {/* Quick Period Buttons */}
                <div className="grid grid-cols-5 gap-1.5 mt-2">
                  {[
                    { label: t.quick3m, val: 3 },
                    { label: t.quick6m, val: 6 },
                    { label: t.quick12m, val: 12 },
                    { label: t.quick24m, val: 24 },
                    { label: t.quick36m, val: 36 },
                  ].map((p) => (
                    <button
                      key={p.val}
                      type="button"
                      onClick={() => setMonths(p.val)}
                      className={`text-xs py-1.5 rounded-lg border font-medium transition-colors text-center ${
                        months === p.val
                          ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold'
                          : 'bg-zinc-800/60 border-white/5 text-gray-400 hover:text-white hover:bg-zinc-800'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons: New Scenario & Reset defaults */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setScenarioSeed(prev => prev + 1)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate">{t.regenerateSimulation}</span>
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
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>초기화</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Output Metrics + Interactive Realistic Chart (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Main Result Showcase Card */}
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-950 border border-emerald-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl shadow-emerald-950/20">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                    {t.resultTitle}
                  </span>
                  <h3 className="text-gray-300 text-sm mt-0.5">{t.realisticFinal}</h3>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Simulated MDD Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold font-mono">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                    <span>MDD: -{simulation.actualMdd.toFixed(1)}%</span>
                  </div>
                  {/* Growth Multiplier Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>{t.multiplier}: {simulation.multiplier.toFixed(2)}x</span>
                  </div>
                </div>
              </div>

              {/* Large Final Balance Display */}
              <div className="my-6">
                <div className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                  {formatCurrency(simulation.finalBalance)}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm text-gray-400 font-medium">
                  <span>{months}{t.monthsSuffix} 후</span>
                  <span className="text-emerald-400 font-bold">
                    +{formatCurrency(simulation.totalProfit)}
                  </span>
                  <span className="text-xs text-gray-500">순수익 달성</span>
                  <span className="text-xs text-gray-400 border-l border-white/10 pl-3">
                    {t.theoreticalFinal}: <span className="text-gray-300 font-mono">{formatCurrency(simulation.finalTheoretical)}</span>
                  </span>
                </div>
              </div>

              {/* 3 Core Output Metrics (Requested: 원금 합계, 투자 수익, 총 수익률) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {/* 1. Total Principal */}
                <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5">
                  <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-gray-400" />
                    {t.totalPrincipal}
                  </div>
                  <div className="text-lg font-bold text-white font-mono truncate">
                    {formatCurrency(principal)}
                  </div>
                </div>

                {/* 2. Investment Profit */}
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
                  <div className="text-xs text-emerald-300/80 mb-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    {t.investmentProfit}
                  </div>
                  <div className="text-lg font-bold text-emerald-400 font-mono truncate">
                    +{formatCurrency(simulation.totalProfit)}
                  </div>
                </div>

                {/* 3. Total Return Rate */}
                <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5">
                  <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                    <Percent className="w-3 h-3 text-blue-400" />
                    {t.totalReturn}
                  </div>
                  <div className="text-lg font-bold text-blue-400 font-mono truncate">
                    +{simulation.totalReturnRate.toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Chart Container: Realistic Volatility & MDD 반영 */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {t.chartTitle}
                  </h4>
                </div>
                {/* Chart Legend */}
                <div className="flex items-center gap-4 text-xs flex-wrap">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></span>
                    <span>{t.chartRealistic}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-400/80">
                    <span className="w-2.5 h-0.5 bg-cyan-400 border-dashed border-t"></span>
                    <span>{t.chartTheoretical}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <span className="w-2.5 h-0.5 bg-gray-500"></span>
                    <span>{t.chartPrincipal}</span>
                  </div>
                </div>
              </div>

              {/* Recharts Area Chart */}
              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={simulation.timeline}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="compoundRealisticGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.45} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="compoundPrincipalGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6b7280" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#6b7280" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis
                      dataKey="label"
                      stroke="#9ca3af"
                      fontSize={11}
                      tickLine={false}
                      axisLine={{ stroke: '#ffffff15' }}
                    />
                    <YAxis
                      stroke="#9ca3af"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => {
                        if (value >= 100000000) return `${(value / 100000000).toFixed(1)}억`;
                        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                        if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
                        return value;
                      }}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          const isDrawdown = data.drawdown < -0.1;
                          return (
                            <div className="bg-zinc-950 border border-white/20 p-3.5 rounded-xl shadow-2xl text-xs font-mono min-w-[200px]">
                              <div className="flex justify-between items-center pb-1.5 mb-2 border-b border-white/10">
                                <span className="text-gray-300 font-bold">
                                  {data.month} {t.monthsSuffix}
                                </span>
                                {isDrawdown && (
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold">
                                    {t.tableDrawdown}: {data.drawdown.toFixed(1)}%
                                  </span>
                                )}
                              </div>
                              <div className="space-y-1.5">
                                <div className="flex justify-between gap-4 text-emerald-400 font-bold">
                                  <span>{t.chartRealistic}:</span>
                                  <span>{formatCurrency(data.realisticTotal)}</span>
                                </div>
                                <div className="flex justify-between gap-4 text-cyan-400/80">
                                  <span>{t.chartTheoretical}:</span>
                                  <span>{formatCurrency(data.theoreticalTotal)}</span>
                                </div>
                                <div className="flex justify-between gap-4 text-gray-300">
                                  <span>{t.tableRealisticReturn}:</span>
                                  <span className={data.monthlyReturn >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                                    {data.monthlyReturn >= 0 ? '+' : ''}{data.monthlyReturn.toFixed(1)}%
                                  </span>
                                </div>
                                <div className="flex justify-between gap-4 text-emerald-300/80">
                                  <span>{t.chartProfit}:</span>
                                  <span>+{formatCurrency(data.profit)}</span>
                                </div>
                                <div className="flex justify-between gap-4 text-gray-500 border-t border-white/5 pt-1">
                                  <span>{t.chartPrincipal}:</span>
                                  <span>{formatCurrency(data.principal)}</span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    {/* Principal dashed baseline */}
                    <Area
                      type="monotone"
                      dataKey="principal"
                      stroke="#6b7280"
                      strokeDasharray="4 4"
                      fillOpacity={1}
                      fill="url(#compoundPrincipalGradient)"
                      strokeWidth={1.5}
                    />
                    {/* Theoretical compound smooth curve */}
                    <Line
                      type="monotone"
                      dataKey="theoreticalTotal"
                      stroke="#38bdf8"
                      strokeDasharray="5 4"
                      strokeWidth={2}
                      dot={false}
                    />
                    {/* Realistic equity curve with MDD drops & recovery */}
                    <Area
                      type="monotone"
                      dataKey="realisticTotal"
                      stroke="#10b981"
                      fillOpacity={1}
                      fill="url(#compoundRealisticGradient)"
                      strokeWidth={2.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Monthly breakdown toggle button */}
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  {t.actualMddRecorded}: <span className="font-mono font-bold text-amber-400">-{simulation.actualMdd.toFixed(1)}%</span>
                </span>
                <button
                  type="button"
                  onClick={() => setShowTable(!showTable)}
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  <span>{showTable ? t.tableToggleClose : t.tableToggleOpen}</span>
                  {showTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Collapsible Monthly Table with Drawdown tracking */}
              {showTable && (
                <div className="mt-4 max-h-72 overflow-y-auto rounded-xl border border-white/10 bg-zinc-950/80 scrollbar-thin">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-zinc-900/90 text-gray-400 border-b border-white/10 sticky top-0 backdrop-blur-md">
                      <tr>
                        <th className="py-2.5 px-3">{t.tableMonth}</th>
                        <th className="py-2.5 px-3 text-right">{t.tableStart}</th>
                        <th className="py-2.5 px-3 text-right">{t.tableRealisticReturn}</th>
                        <th className="py-2.5 px-3 text-right">{t.tableProfit}</th>
                        <th className="py-2.5 px-3 text-right text-emerald-400">{t.tableEnd}</th>
                        <th className="py-2.5 px-3 text-right text-amber-400">{t.tableDrawdown}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-gray-300">
                      {simulation.timeline.slice(1).map((row) => {
                        const isDrawdown = row.drawdown < -0.1;
                        return (
                          <tr key={row.month} className="hover:bg-white/5">
                            <td className="py-2 px-3 font-semibold text-white">{row.month}{t.monthsSuffix}</td>
                            <td className="py-2 px-3 text-right text-gray-400">{formatCurrency(row.startBalance || 0)}</td>
                            <td className={`py-2 px-3 text-right font-medium ${row.monthlyReturn >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {row.monthlyReturn >= 0 ? '+' : ''}{row.monthlyReturn.toFixed(1)}%
                            </td>
                            <td className={`py-2 px-3 text-right ${row.monthlyProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {row.monthlyProfit >= 0 ? '+' : ''}{formatCurrency(row.monthlyProfit)}
                            </td>
                            <td className="py-2 px-3 text-right font-bold text-white">{formatCurrency(row.realisticTotal)}</td>
                            <td className={`py-2 px-3 text-right font-mono ${isDrawdown ? 'text-amber-400 font-semibold' : 'text-gray-500'}`}>
                              {isDrawdown ? `${row.drawdown.toFixed(1)}%` : '-'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Mandatory Bottom Disclaimer as specifically instructed */}
        <div className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-amber-500/20 text-gray-300">
          <h4 className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-2 mb-2">
            <span>{t.disclaimerTitle}</span>
          </h4>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            {t.disclaimerText}
          </p>
        </div>
      </div>
    </motion.div>
  </div>
)}
</AnimatePresence>
  );
};

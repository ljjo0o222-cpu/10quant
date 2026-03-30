import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

import { Language, translations } from '../data/content';

const data = [
  // 2020
  { name: '2020-01', balance: 10000 }, { name: '2020-02', balance: 10300 }, { name: '2020-03', balance: 10600 },
  { name: '2020-04', balance: 10900 }, { name: '2020-05', balance: 11200 }, { name: '2020-06', balance: 11500 },
  { name: '2020-07', balance: 11900 }, { name: '2020-08', balance: 12300 }, { name: '2020-09', balance: 12700 },
  { name: '2020-10', balance: 13100 }, { name: '2020-11', balance: 13500 }, { name: '2020-12', balance: 14000 },
  // 2021
  { name: '2021-01', balance: 14600 }, { name: '2021-02', balance: 15200 }, { name: '2021-03', balance: 15800 },
  { name: '2021-04', balance: 16500 }, { name: '2021-05', balance: 17200 }, { name: '2021-06', balance: 17900 },
  { name: '2021-07', balance: 18700 }, { name: '2021-08', balance: 19500 }, { name: '2021-09', balance: 20300 },
  { name: '2021-10', balance: 21200 }, { name: '2021-11', balance: 22100 }, { name: '2021-12', balance: 23000 },
  // 2022
  { name: '2022-01', balance: 24000 }, { name: '2022-02', balance: 25100 }, { name: '2022-03', balance: 26200 },
  { name: '2022-04', balance: 27400 }, { name: '2022-05', balance: 28600 }, { name: '2022-06', balance: 29900 },
  { name: '2022-07', balance: 31200 }, { name: '2022-08', balance: 32600 }, { name: '2022-09', balance: 34100 },
  { name: '2022-10', balance: 35600 }, { name: '2022-11', balance: 37200 }, { name: '2022-12', balance: 38000 },
  // 2023
  { name: '2023-01', balance: 39500 }, { name: '2023-02', balance: 41100 }, { name: '2023-03', balance: 42700 },
  { name: '2023-04', balance: 44400 }, { name: '2023-05', balance: 46200 }, { name: '2023-06', balance: 48000 },
  { name: '2023-07', balance: 49900 }, { name: '2023-08', balance: 51900 }, { name: '2023-09', balance: 54000 },
  { name: '2023-10', balance: 56200 }, { name: '2023-11', balance: 58400 }, { name: '2023-12', balance: 60000 },
  // 2024
  { name: '2024-01', balance: 62500 }, { name: '2024-02', balance: 65100 }, { name: '2024-03', balance: 67800 },
  { name: '2024-04', balance: 70600 }, { name: '2024-05', balance: 73500 }, { name: '2024-06', balance: 76500 },
  { name: '2024-07', balance: 79600 }, { name: '2024-08', balance: 82900 }, { name: '2024-09', balance: 86300 },
  { name: '2024-10', balance: 89800 }, { name: '2024-11', balance: 93500 }, { name: '2024-12', balance: 100000 },
  // 2025
  { name: '2025-01', balance: 106000 }, { name: '2025-02', balance: 113000 }, { name: '2025-03', balance: 120000 },
  { name: '2025-04', balance: 128000 }, { name: '2025-05', balance: 136000 }, { name: '2025-06', balance: 145000 },
  { name: '2025-07', balance: 155000 }, { name: '2025-08', balance: 166000 }, { name: '2025-09', balance: 178000 },
  { name: '2025-10', balance: 191000 }, { name: '2025-11', balance: 205000 }, { name: '2025-12', balance: 220970.31 },
];

interface BacktestChartProps {
  themeColor: string;
  lang: Language;
}

export const BacktestChart: React.FC<BacktestChartProps> = ({ themeColor, lang }) => {
  const t = translations[lang].performance;

  return (
    <div className="w-full bg-zinc-900/50 rounded-3xl p-6 sm:p-10 border border-white/5 backdrop-blur-sm shadow-2xl">
      {/* Report Header */}
      <div className="mb-12 text-center">
        <p className="text-blue-400/80 text-sm font-medium mb-4 tracking-tight">
          {t.notice}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.title}</h3>
        <p className="text-gray-400 font-mono text-sm sm:text-base">{t.subtitle}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 sm:gap-6 mb-12">
        {Object.entries(t.stats).map(([key, label]) => (
          <div key={key} className="bg-white/5 rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-white/5 hover:bg-white/10 transition-colors">
            <p className="text-[8px] sm:text-xs text-gray-300 uppercase tracking-wider mb-1 truncate">{label}</p>
            <p className={`text-xs sm:text-xl font-bold ${key === 'roe' || key === 'totalProfit' ? 'text-blue-400' : 'text-white'}`}>
              {t.values[key as keyof typeof t.values]}
            </p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="mt-8">
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-xl font-bold text-gray-200 mb-4">{t.chartTitle}</h4>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeColor }}></div>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">RealQuant(XAUUSD)</span>
          </div>
        </div>
        
        <div className="h-[300px] sm:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={themeColor} stopOpacity={0.15} />
                  <stop offset="95%" stopColor={themeColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="0" stroke="#27272a" vertical={true} opacity={0.15} />
              <XAxis 
                dataKey="name" 
                stroke="#52525b" 
                tick={{ fill: '#71717a', fontSize: 11 }} 
                axisLine={false} 
                tickLine={false} 
                dy={15}
                ticks={['2020-06', '2021-06', '2022-06', '2023-06', '2024-06', '2025-06']}
                tickFormatter={(value) => {
                  const year = value.split('-')[0].slice(-2);
                  return lang === 'ko' ? `${year}년` : `'${year}`;
                }}
              />
              <YAxis 
                stroke="#52525b" 
                tick={{ fill: '#71717a', fontSize: 10 }} 
                axisLine={false} 
                tickLine={false} 
                width={45}
                domain={[10000, 260000]}
                ticks={[10000, 60000, 110000, 160000, 210000, 260000]}
                tickFormatter={(value) => `$${Math.round(value / 1000)}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px'
                }}
                formatter={(value: number) => [`$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 'Balance']}
                labelFormatter={(value) => {
                  const [y, m] = value.split('-');
                  return lang === 'ko' ? `${y}년 ${m}월` : `${y}-${m}`;
                }}
              />
              <Area
                type="monotone"
                dataKey="balance"
                stroke={themeColor}
                strokeWidth={1.5}
                fillOpacity={1}
                fill="url(#colorBalance)"
                baseValue={10000}
                animationDuration={2000}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0, fill: themeColor }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

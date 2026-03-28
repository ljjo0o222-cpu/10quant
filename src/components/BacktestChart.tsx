import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Legend,
} from 'recharts';

import { Language } from '../data/content';

const data = [
  { name: '1', realquant: 107, kospi: 98, nasdaq: 104 },
  { name: '2', realquant: 114, kospi: 95, nasdaq: 108 },
  { name: '3', realquant: 122, kospi: 99, nasdaq: 105 },
  { name: '4', realquant: 130, kospi: 102, nasdaq: 110 },
  { name: '5', realquant: 139, kospi: 100, nasdaq: 115 },
  { name: '6', realquant: 148, kospi: 105, nasdaq: 118 },
  { name: '7', realquant: 158, kospi: 103, nasdaq: 122 },
  { name: '8', realquant: 169, kospi: 101, nasdaq: 120 },
  { name: '9', realquant: 181, kospi: 104, nasdaq: 125 },
  { name: '10', realquant: 193, kospi: 106, nasdaq: 128 },
  { name: '11', realquant: 206, kospi: 108, nasdaq: 132 },
  { name: '12', realquant: 220, kospi: 110, nasdaq: 135 },
];

interface BacktestChartProps {
  themeColor: string;
  lang: Language;
}

export const BacktestChart: React.FC<BacktestChartProps> = ({ themeColor, lang }) => {
  const formatMonth = (month: string) => {
    return lang === 'ko' ? `${month}월` : `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][parseInt(month) - 1]}`;
  };

  return (
    <div className="w-full h-[400px] sm:h-[500px] bg-zinc-900/50 rounded-2xl p-4 sm:p-6 border border-white/5 backdrop-blur-sm">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorRealQuant" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={themeColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={themeColor} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNasdaq" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fdba74" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#fdba74" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorKospi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#a1a1aa" 
            tick={{ fill: '#a1a1aa', fontSize: 12 }} 
            axisLine={false} 
            tickLine={false} 
            dy={10}
            tickFormatter={formatMonth}
          />
          <YAxis 
            stroke="#a1a1aa" 
            tick={{ fill: '#a1a1aa', fontSize: 12 }} 
            axisLine={false} 
            tickLine={false} 
            dx={-10}
            tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(0)}k%` : `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#18181b',
              border: '1px solid #3f3f46',
              borderRadius: '8px',
              color: '#fff',
            }}
            itemStyle={{ color: '#fff' }}
          />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#a1a1aa' }} />
          <Area
            type="monotone"
            dataKey="kospi"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorKospi)"
            name="KOSPI"
          />
          <Area
            type="monotone"
            dataKey="nasdaq"
            stroke="#fdba74"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorNasdaq)"
            name="NASDAQ"
          />
          <Area
            type="monotone"
            dataKey="realquant"
            stroke={themeColor}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorRealQuant)"
            name="RealQuant Strategy"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

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
} from 'recharts';

const data = [
  { name: '2023', quant: 100, benchmark: 100 },
  { name: '2024', quant: 220, benchmark: 124 },
  { name: '2025', quant: 484, benchmark: 154 },
];

interface BacktestChartProps {
  themeColor: string;
}

export const BacktestChart: React.FC<BacktestChartProps> = ({ themeColor }) => {
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
            <linearGradient id="colorQuant" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={themeColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={themeColor} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBenchmark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#52525b" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#52525b" stopOpacity={0} />
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
          <Area
            type="monotone"
            dataKey="benchmark"
            stroke="#71717a"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorBenchmark)"
            name="S&P 500"
          />
          <Area
            type="monotone"
            dataKey="quant"
            stroke={themeColor}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorQuant)"
            name="10quant Strategy"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

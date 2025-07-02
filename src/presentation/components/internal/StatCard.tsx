import React from 'react';

export enum StatCardColors {
  GRAY = 'gray',
  ORANGE = 'orange',
  GREEN = 'green',
}


interface StatCardProps {
  value: number;
  label: string;
  color?: StatCardColors;
}

export default function StatCard({ value, label, color = StatCardColors.GRAY }: StatCardProps) {
  const colorClasses = {
    gray: 'text-gray-800',
    orange: 'text-orange-600',
    green: 'text-green-600',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <div className={`text-2xl font-bold ${colorClasses[color]}`}>
        {value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
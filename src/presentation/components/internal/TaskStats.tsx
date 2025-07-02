import React from 'react';
import { useTaskStore } from '@/data/stores/taskStore';
import StatCard, { StatCardColors } from './StatCard';

export default function TaskStats() {
  const { getStats } = useTaskStore();
  const stats = getStats();

  return (
    <div className="grid grid-cols-3 gap-4 mb-6 mt-8">
      <StatCard 
        value={stats.total} 
        label="Total" 
      />
      <StatCard 
        value={stats.pending} 
        label="Pendentes" 
        color={StatCardColors.ORANGE} 
      />
      <StatCard 
        value={stats.completed} 
        label="Concluídas" 
        color={StatCardColors.GREEN }
      />
    </div>
  );
}
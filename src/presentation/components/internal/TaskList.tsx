import React from 'react';
import { useTaskStore } from '@/data/stores/taskStore';
import TaskItem from './TaskItem';
import { EmptyState } from './EmptyState';

export default function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTaskStore();

  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
      <div className='divide-y divide-gray-200'>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
}

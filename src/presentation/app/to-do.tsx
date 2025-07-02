import React from 'react';
import Header from '../components/internal/Header';
import TaskForm from '../components/internal/TaskForm';
import TaskList from '../components/internal/TaskList';
import TaskStats from '../components/internal/TaskStats';

export default function TodoApp() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-8'>
      <div className='mx-auto max-w-2xl'>
        <Header />

        <TaskForm />
        <TaskList />
        <TaskStats />
      </div>
    </div>
  );
}

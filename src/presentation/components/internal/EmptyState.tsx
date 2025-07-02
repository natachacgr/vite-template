import React from 'react';
import { ListTodo } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8 text-center text-gray-500">
        <ListTodo className="w-16 h-16 mx-auto mb-4 text-gray-300" />
        <p className="text-lg mb-2">Nenhuma tarefa ainda</p>
        <p className="text-sm">Adicione sua primeira tarefa acima!</p>
      </div>
    </div>
  );
}
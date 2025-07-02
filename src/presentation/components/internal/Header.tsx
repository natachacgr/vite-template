import React from 'react';
import { ListTodo } from 'lucide-react';

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <ListTodo className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Lista de Tarefas</h1>
      </div>
      <p className="text-gray-600">Organize suas tarefas de forma simples e eficiente</p>
    </div>
  );
}
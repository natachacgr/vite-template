import React from 'react';
import { Trash2, CheckCircle2, Circle } from 'lucide-react';
import { ITask } from '@/data/stores/taskStore';

interface TaskItemProps {
  task: ITask;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div
      className={`p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors ${
        task.completed ? 'bg-green-50' : ''
      }`}
    >
      <button
        onClick={() => onToggle(task.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          task.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-green-400'
        }`}
      >
        {task.completed ? (
          <CheckCircle2 className="w-4 h-4" />
        ) : (
          <Circle className="w-4 h-4 opacity-0" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p
          className={`text-lg transition-all ${
            task.completed
              ? 'line-through text-gray-500'
              : 'text-gray-800'
          }`}
        >
          {task.email}
        </p>
        <p className="text-xs text-gray-500">
          Criada em {new Date(task.createdAt).toLocaleDateString('pt-BR')}
        </p>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="flex-shrink-0 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        title="Excluir tarefa"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
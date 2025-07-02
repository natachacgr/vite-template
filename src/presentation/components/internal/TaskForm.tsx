import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from 'lucide-react';
import { useTaskStore } from '@/data/stores/taskStore';
import { taskSchema, TaskFormData } from '@/domain/schemas/taskSchema';

export default function TaskForm() {
  const { addTask } = useTaskStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: TaskFormData) => {
    if (data.email.trim()) {
      addTask(data.email.trim());
      reset({
        email: '', 
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex gap-3">
        <div className="flex-1">
          <input
            {...register('email', {
              required: 'Digite uma tarefa',
              minLength: {
                value: 3,
                message: 'Tarefa deve ter pelo menos 3 caracteres',
              },
            })}
            type="text"
            placeholder="Digite uma nova tarefa..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(onSubmit)();
              }
            }}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center gap-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          Adicionar
        </button>
      </div>
    </div>
  );
}
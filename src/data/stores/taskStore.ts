import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ITask {
  id: string;
  email: string;
  completed: boolean;
  createdAt: Date;
}

type Props = {
    tasks: ITask[];
}

type ActionProps = {
    addTask: (email: string) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
    getStats: () => { total: number; completed: number; pending: number };
}

type StoreProps = Props & ActionProps;

export const useTaskStore = create<StoreProps>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (email: string) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now().toString(),
              email,
              completed: false,
              createdAt: new Date(),
            },
          ],
        })),
      toggleTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      deleteTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      getStats: () => {
        const tasks = get().tasks;
        return {
          total: tasks.length,
          completed: tasks.filter((task) => task.completed).length,
          pending: tasks.filter((task) => !task.completed).length,
        };
      },
    }),
    {
      name: 'todo-storage',
    }
  )
);
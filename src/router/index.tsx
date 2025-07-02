import { createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import App from '@/presentation/app';
import TodoApp from '@/presentation/app/to-do';

const router = createBrowserRouter([
  {
    path: AppRoutes.BASE.key,
    element: <App />,
    children: [
      {
        path: AppRoutes.BASE.TODO.key,
        element: <TodoApp />,
      },
    ],
  },
]);

export { router };

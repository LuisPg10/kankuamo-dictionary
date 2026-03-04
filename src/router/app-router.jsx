import { createBrowserRouter, Navigate } from 'react-router';
import { AppLayout } from '../layouts/AppLayout';
import { AnimalsPage, ColorsPage, NumbersPage } from '../pages';

export const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/colors" /> },
      { path: 'colors', element: <ColorsPage /> },
      { path: 'animals', element: <AnimalsPage /> },
      { path: 'numbers', element: <NumbersPage /> },
      { path: 'numbers', element: <NumbersPage /> },

      { path: '/*', element: <Navigate to="/colors" /> },
    ],
  },
]);

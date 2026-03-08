import { createBrowserRouter, Navigate } from 'react-router';

//* Data for word page
import { colorsData } from '../data/colors.data';
import { animalsData } from '../data/animals.data';
import { numbersData } from '../data/numbers.data';

import { WordsLayout } from '../layouts/WordsLayout';
import { WordsPage } from '../pages/WordsPage';

export const appRouter = createBrowserRouter([
  {
    element: <WordsLayout />,
    children: [
      { index: true, element: <Navigate to="/colors" /> },
      { path: 'colors', element: <WordsPage words={colorsData} /> },
      { path: 'animals', element: <WordsPage words={animalsData} /> },
      { path: 'numbers', element: <WordsPage words={numbersData} /> },

      { path: '/*', element: <Navigate to="/colors" /> },
    ],
  },
]);

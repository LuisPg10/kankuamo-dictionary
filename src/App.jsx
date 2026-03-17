import { RouterProvider } from 'react-router/dom';
import { AudioProvider } from './context/AudioContext';
import { appRouter } from './router/app.router';

export default function App() {
  return (
    <AudioProvider>
      <RouterProvider router={appRouter} />
    </AudioProvider>
  );
}

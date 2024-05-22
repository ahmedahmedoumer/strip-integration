import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../css/app.css';

const routes = [
  {
    path: '/',
    element: <div className="text-center text-blue-500 text-4xl">Hello Laravel 11 from React 18</div>,
  },
];

createRoot(document.getElementById('root')).render(
  <RouterProvider router={createBrowserRouter(routes)} />
);

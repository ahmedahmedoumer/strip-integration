import '../css/app.css'; // Ensure to use the correct relative path
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';

const routes = [
  {
    path: '/',
    element: <Counter />,
  },
];

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={createBrowserRouter(routes)} />
  </Provider>
);

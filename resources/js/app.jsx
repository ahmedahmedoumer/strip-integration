// index.js
import '../css/app.css'; // Ensure to use the correct relative path
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import SubscriptionPlans from './Subscriptions/SubscriptionPlans';
import CardInput from './Subscriptions/CardInput';
import Login from './components/Auth/Login';

const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/plans',
    element: <SubscriptionPlans />,
  },
  {
    path: '/card-info',
    element: <CardInput />,
  },
];

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={createBrowserRouter(routes)} />
  </Provider>
);

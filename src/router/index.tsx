import Login from '@/views/Login/Login';
import Welcome from '@/views/welcome/Welcome';
import Error404 from '@/views/404';
import Layout from '@/layout';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = [
  {
    path: '/',
    element: <Navigate to='/welcome' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    id: 'layout',
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <Error404 />
  }
];

export default createBrowserRouter(router);

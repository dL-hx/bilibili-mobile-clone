import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import VideoDetail from '../pages/VideoDetail/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'video/:id',
        element: <VideoDetail />,
      },
    ],
  },
]);

export default router;
import RouterRoot from '../Routing/RouterRoot';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScanPage from '../../pages/Scan/Scan';
import RatingsPage, { loader as ratingsLoader } from '../../pages/Ratings/Ratings';
import RateItPage from '../../pages/RateIt/RateIt';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterRoot />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ScanPage /> },
      {
        id: 'ratings',
        path: 'ratings/:code',
        loader: ratingsLoader,
        children: [
          { index: true, element: <RatingsPage />, loader: ratingsLoader },
          { path: 'rate', element: <RateItPage />, loader: null },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

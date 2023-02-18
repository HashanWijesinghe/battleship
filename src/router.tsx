import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from '@pages/Home';
import DefaultLayout from '@layouts/DefaultLayout';
import NotFound from '@pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
    </Route>
  ),
  {
    basename: '/battleship',
  }
);

export default router;

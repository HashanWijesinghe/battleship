import { Routes, Route } from 'react-router-dom';
import { FC } from 'react';

import Home from '@pages/Home';
import DefaultLayout from '@layouts/DefaultLayout';
import NotFound from '@pages/NotFound';

const Main: FC = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Main;

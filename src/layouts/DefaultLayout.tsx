/* eslint-disable import/no-extraneous-dependencies */
import { FC, memo } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import AppBar from '../appBar/AppBar';

const DefaultLayout: FC = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default memo(DefaultLayout);

/* eslint-disable import/no-extraneous-dependencies */
import { FC, memo } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import AppBar from '@src/components/AppBar';

const Container = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  /* overflow-y: hidden; */
`;

const DefaultLayout: FC = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};

export default memo(DefaultLayout);

/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import NotFoundAnimation from '@animations/93190-404-page-not-found.json';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  padding: 3em;
`;

const NotFound: FC = (): JSX.Element => {
  return (
    <Container>
      <Lottie
        options={{
          loop: true,
          animationData: NotFoundAnimation,
        }}
        height={200}
        width={200}
      />
      <h3>Not Found</h3>
      <Link to="/">Go back to home.</Link>
    </Container>
  );
};

export default NotFound;

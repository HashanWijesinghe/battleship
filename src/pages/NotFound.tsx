/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
      <h3>Not Found</h3>
      <Link to="/">Go back to home.</Link>
    </Container>
  );
};

export default NotFound;

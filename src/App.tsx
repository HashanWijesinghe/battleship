import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import './App.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex: 1;
  min-height: 100vh;
  background-color: aqua;
`;

const Square = styled.div`
  border: 0.1rem;
  border-color: black;
  border-style: solid;
  height: 3rem;
  width: 3rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: React.FC = (): JSX.Element => (
  <Container>
    <Column>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
        return (
          <Row>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
              return <Square />;
            })}
          </Row>
        );
      })}
    </Column>
  </Container>
);

export default App;

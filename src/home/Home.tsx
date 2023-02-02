import React from 'react';
import styled from 'styled-components';
import Grid from '../grid/Grid';
import ScoreBoard from '../scoreBoard/ScoreBoard';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 600px) {
    background-color: yellow;
  }
  @media only screen and (min-width: 768px) {
    background-color: green;
  }
`;

const Div = styled.div<{ flex?: number }>`
  display: flex;
  flex: ${(props) => props.flex || 1};
  align-self: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Div flex={2}>
        <Grid />
      </Div>
      <Div>
        <ScoreBoard />
      </Div>
    </Container>
  );
};

export default React.memo(Home);

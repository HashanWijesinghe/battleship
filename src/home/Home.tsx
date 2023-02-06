import React from 'react';
import styled from 'styled-components';
import Grid from '../grid/Grid';
import ScoreBoard from '../scoreBoard/ScoreBoard';
import ShipList from '../shipList/ShipList';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 600px) {
    background-color: yellow;
  }
  @media only screen and (min-width: 768px) {
    background-color: green;
  }
`;

const GridContainer = styled.div<{ flex?: number }>`
  display: flex;
  flex: ${(props) => props.flex || 1};
  align-self: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 90%;
`;

const InfoContainer = styled.div<{ flex?: number }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
`;

const ScoreBoardContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <GridContainer flex={1}>
        <Grid />
      </GridContainer>
      <InfoContainer>
        <ScoreBoardContainer>
          <ScoreBoard />
        </ScoreBoardContainer>
        <ShipList />
      </InfoContainer>
    </Container>
  );
};

export default React.memo(Home);

import React from 'react';
import styled from 'styled-components';
import ShipList from '@src/components/ShipList';
import Grid from '@src/components/Grid';
import ScoreBoard from '@src/components/ScoreBoard';
import { ViewportWidthBreakpoints } from '@shared/constants';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95%;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    margin: 0.5em;
    justify-content: flex-start;
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
    flex-direction: row-reverse;
    margin-left: 2em;
    margin-right: 2em;
    align-items: flex-start;
    margin-top: 2.5em;
    gap: 1em;
  }
`;

const GridContainer = styled.div<{ flex?: number }>`
  display: flex;
  flex-shrink: 1.5;
  align-self: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
    flex: 1;
    flex-direction: row-reverse;
    align-self: flex-start;
    justify-content: flex-end;
  }
`;

const ScoreBoardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    flex: 3;
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
  }
`;

const ShipListContainer = styled.div`
  display: flex;
  flex: 5;
  flex-direction: row;
  width: 100%;
  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    flex: 7;
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    flex-direction: row;
    flex: 1;
    margin-top: 1em;
    flex-grow: 0;
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
    flex: 0.8;
    flex-direction: column;
  }
`;

const Home = () => {
  return (
    <Container>
      <GridContainer>
        <Grid />
      </GridContainer>
      <InfoContainer>
        <ScoreBoardContainer>
          <ScoreBoard />
        </ScoreBoardContainer>
        <ShipListContainer>
          <ShipList />
        </ShipListContainer>
      </InfoContainer>
    </Container>
  );
};

export default Home;

import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { ViewportWidthBreakpoints } from '../shared/constants';
import strings from '../shared/strings';
import colors from '../styles/colors';

const ScoreItemContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
  align-items: center;
  padding: 5px;
  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    align-items: center;
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
    padding-top: 1em;
    padding-bottom: 1em;
  }
`;

const ScoreText = styled.span`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  font-style: normal;
  color: ${colors.shadowedSteel};
  padding-bottom: 5px;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    font-size: 3em;
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
    font-size: 5em;
  }
`;

const PlayerName = styled.span`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 0.9em;
  font-style: normal;
  color: ${colors.shadowedSteel};

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    font-size: 1em;
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
    font-size: 1.1em;
  }
`;

const HorizontalRuler = styled.div`
  border-top-width: 0.01rem;
  border-top-color: ${colors.rockBottomLight};
  border-style: solid;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  width: 60%;
  height: 0.01rem;
  padding-top: 10px;
`;

interface ScoreItemProps {
  score?: number;
  name?: string;
  backgroundColor?: string;
}

const ScoreItem: FC<ScoreItemProps> = ({
  score = 0,
  name = strings.player1,
  backgroundColor = colors.lemonChrome,
}): JSX.Element => {
  return (
    <ScoreItemContainer backgroundColor={backgroundColor}>
      <ScoreText>{score}</ScoreText>
      <HorizontalRuler />
      <PlayerName>{name}</PlayerName>
    </ScoreItemContainer>
  );
};

export default memo(ScoreItem);

import React, { FC, memo } from 'react';
import styled from 'styled-components';
import strings from '../shared/strings';
import colors from '../styles/colors';

const ScoreItemContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
  align-items: center;
  padding: 5px;
`;

const ScoreText = styled.span`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  font-style: normal;
  color: ${colors.shadowedSteel};
  padding-bottom: 5px;
`;

const PlayerName = styled.span`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 10px;
  font-style: normal;
  color: ${colors.shadowedSteel};
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

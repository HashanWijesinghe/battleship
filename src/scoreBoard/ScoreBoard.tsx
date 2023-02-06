import React, { FC, memo } from 'react';
import styled from 'styled-components';
import ScoreItem from '../scoreItem/ScoreItem';
import strings from '../shared/strings';
import colors from '../styles/colors';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const ScoreBoard: FC = () => {
  return (
    <Container>
      <ScoreItem backgroundColor={colors.lemonChrome} name={strings.player1} />
      <ScoreItem backgroundColor={colors.capture} name={strings.player2} />
    </Container>
  );
};

export default memo(ScoreBoard);

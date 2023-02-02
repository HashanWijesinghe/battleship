import React, { FC, memo } from 'react';
import styled from 'styled-components';
import ScoreItem from '../scoreItem/ScoreItem';
import colors from '../styles/colors';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const ScoreBoard: FC = () => {
  return (
    <Container>
      <ScoreItem backgroundColor={colors.lemonChrome} />
      <ScoreItem backgroundColor={colors.capture} />
    </Container>
  );
};

export default memo(ScoreBoard);

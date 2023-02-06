import React, { FC, memo } from 'react';
import styled from 'styled-components';
import ScoreItem from '../scoreItem/ScoreItem';
import { ViewportWidthBreakpoints } from '../shared/constants';
import strings from '../shared/strings';
import colors from '../styles/colors';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
  }
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

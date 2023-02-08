import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ScoreItem from '@src/components/ScoreItem';
import { ViewportWidthBreakpoints } from '@shared/constants';
import strings from '@shared/strings';
import { RootState } from '@store/store';
import colors from '@styles/colors';

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
  const player1Score = useSelector(
    (state: RootState) => state.game.player1.score
  );
  const player2Score = useSelector(
    (state: RootState) => state.game.player2.score
  );

  return (
    <Container>
      <ScoreItem
        backgroundColor={colors.lemonChrome}
        name={strings.player1}
        score={player1Score}
      />
      <ScoreItem
        backgroundColor={colors.capture}
        name={strings.player2}
        score={player2Score}
      />
    </Container>
  );
};

export default memo(ScoreBoard);

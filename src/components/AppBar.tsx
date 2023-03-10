import { FC, memo } from 'react';
import styled from 'styled-components';
import strings from '@shared/strings';
import colors from '@styles/colors';
import { Images } from '@styles/images';
import { ViewportWidthBreakpoints } from '@shared/constants';

const Container = styled.div`
  background-color: ${colors.cobalite};
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  height: 5%;
`;

const Header = styled.h4`
  color: white;
  margin: 0.8em;
  font-family: 'Black Ops One', cursive;
  font-size: larger;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    font-size: 2em;
  }
`;

const AppBar: FC = () => (
  <Container>
    <img src={Images.BattleshipLogo} alt="battleship" width={40} />
    <Header>{strings.battleship.toUpperCase()}</Header>
  </Container>
);

export default memo(AppBar);

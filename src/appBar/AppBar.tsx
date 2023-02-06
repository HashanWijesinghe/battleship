import { FC, memo } from 'react';
import styled from 'styled-components';
import strings from '../shared/strings';
import colors from '../styles/colors';

const Container = styled.div`
  background-color: ${colors.cobalite};
  justify-content: center;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Header = styled.h4`
  color: white;
  margin: 0.8em;
  font-family: 'Black Ops One', cursive;
`;

const AppBar: FC = () => (
  <Container>
    <Header>{strings.battleship.toUpperCase()}</Header>
  </Container>
);

export default memo(AppBar);

import React, { FC, memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-width: 0.1rem;
  border-color: red;
  border-style: solid;
  display: flex;
  flex-direction: row;
`;

const ScoreBoard: FC = () => {
  return <Container>Score</Container>;
};

export default memo(ScoreBoard);

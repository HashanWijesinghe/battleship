import React, { useRef, memo, FC } from 'react';
import styled from 'styled-components';
import { ViewportWidthBreakpoints } from '../shared/constants';
import colors from '../styles/colors';

const GridContainer = styled.div<{
  width: number;
  height: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  background-color: ${colors.lemonChrome};
  border: 0.5em solid ${colors.lemonChrome};

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
    width: ${({ height }) => height * 0.8}px;
    height: ${({ height }) => height * 0.8}px;
  }
`;

const Row = styled.div`
  background-color: ${colors.pearl};
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
`;

const Square = styled.div`
  display: flex;
  flex: 1;
  border-width: 0.1px;
  border-color: ${colors.americanSilver};
  border-style: solid;
  justify-content: center;
  align-items: center;
`;

const Grid: FC = () => {
  const windowSize = useRef([window.innerHeight, window.innerWidth]);

  return (
    <GridContainer width={windowSize.current[1]} height={windowSize.current[0]}>
      {Array(10)
        .fill(null)
        .map((colItem, colIndex) => (
          <Row>
            {Array(10)
              .fill(null)
              .map((rowItem, rowIndex) => (
                <Square>
                  {colIndex}
                  {rowIndex}
                </Square>
              ))}
          </Row>
        ))}
    </GridContainer>
  );
};

export default memo(Grid);

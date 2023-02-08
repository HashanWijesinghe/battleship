/* eslint-disable react/no-array-index-key */
import React, { useRef, memo, FC } from 'react';
import styled from 'styled-components';
import GridSquare from '@src/components/GridSquare';
import { ViewportWidthBreakpoints } from '@shared/constants';
import colors from '@styles/colors';

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

const Grid: FC = () => {
  const windowSize = useRef([window.innerHeight, window.innerWidth]);
  const grid = useRef<Array<Array<number>>>(Array(10).fill(Array(10).fill(-1)));

  return (
    <GridContainer width={windowSize.current[1]} height={windowSize.current[0]}>
      {grid.current.map((rowItem, rowIndex) => (
        <Row>
          {grid.current[rowIndex].map((colItem, colIndex) => (
            <GridSquare coordinates={{ row: rowIndex, col: colIndex }} />
          ))}
        </Row>
      ))}
    </GridContainer>
  );
};

export default memo(Grid);

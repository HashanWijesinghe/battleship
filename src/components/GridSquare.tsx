import { FC, memo, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import colors from '@styles/colors';
import Hit from '@assets/Hit.png';
import Miss from '@assets/Miss.png';
import { RootState } from '@store/store';
import { playerOneFire } from '@store/gameSlice';

interface GridSquareProps {
  coordinates: { row: number; col: number };
}

const Square = styled.div`
  display: flex;
  flex: 1;
  border-width: 0.1px;
  border-color: ${colors.americanSilver};
  border-style: solid;
  justify-content: center;
  align-items: center;
`;

const GridSquare: FC<GridSquareProps> = memo(({ coordinates }) => {
  const dispatch = useDispatch();

  const hit = useSelector((state: RootState) =>
    JSON.stringify(state.game.player1.playerHits).includes(
      `${[coordinates.row, coordinates.col]}`
    )
  );
  const fired = useSelector((state: RootState) =>
    JSON.stringify(state.game.player1.playerShots).includes(
      `${[coordinates.row, coordinates.col]}`
    )
  );

  const onPressHandler = useCallback(() => {
    if (fired) {
      return;
    }
    dispatch(playerOneFire([coordinates.row, coordinates.col]));
  }, [coordinates.col, coordinates.row, dispatch, fired]);

  return (
    <Square
      key={`${coordinates.row}-${coordinates.col}-square`}
      onClick={onPressHandler}
    >
      {fired && (
        <img src={hit ? Hit : Miss} alt="miss" width="100%" height="100%" />
      )}
    </Square>
  );
});

export default GridSquare;

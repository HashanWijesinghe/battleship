import { FC, memo, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import colors from '@styles/colors';
import { Images } from '@styles/images';
import { RootState } from '@store/store';
import { gameActions } from '@store/gameSlice';

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

  transition: all300ms ease;

  &:hover {
    box-shadow: ${colors.galaxeaOpacity25} 0px 30px 60px -12px inset,
      ${colors.blackOpacity30} 0px 18px 36px -18px inset;
  }
`;

const GridSquare: FC<GridSquareProps> = memo(({ coordinates }) => {
  const dispatch = useDispatch();

  const isHit = useSelector((state: RootState) =>
    JSON.stringify(state.game.player1.playerHits).includes(
      `${[coordinates.row, coordinates.col]}`
    )
  );
  const isFired = useSelector((state: RootState) =>
    JSON.stringify(state.game.player1.playerShots).includes(
      `${[coordinates.row, coordinates.col]}`
    )
  );

  const onPressHandler = useCallback(() => {
    if (isFired) {
      return;
    }
    dispatch(gameActions.playerOneFire([coordinates.row, coordinates.col]));
  }, [coordinates.col, coordinates.row, dispatch, isFired]);

  return (
    <Square onClick={onPressHandler}>
      {isFired && (
        <img
          src={isHit ? Images.Hit : Images.Miss}
          alt="miss"
          width="100%"
          height="100%"
        />
      )}
    </Square>
  );
});

export default GridSquare;

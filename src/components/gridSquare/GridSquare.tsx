import { FC, memo, useCallback } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Hit from '../../assets/Hit.png';
import Miss from '../../assets/Miss.png';

interface GridSquareProps {
  status?: number;
  coordinates: { row: number; col: number };
  handlePress?: (coordinates: { row: number; col: number }) => void;
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

const GridSquare: FC<GridSquareProps> = ({
  status,
  coordinates,
  handlePress = () => {},
}) => {
  const onPressHandler = useCallback(
    () => handlePress(coordinates),
    [coordinates, handlePress]
  );
  return (
    <Square onClick={onPressHandler}>
      {status === 0 && <img src={Miss} alt="miss" width="100%" height="100%" />}
      {status === 1 && <img src={Hit} alt="hit" width="100%" height="100%" />}
    </Square>
  );
};

export default memo(GridSquare);

import { FC, memo } from 'react';
import styled from 'styled-components';
import HitSmall from '../assets/Hit small.png';
import MissSmall from '../assets/Miss small.png';

interface ShipListItemProps {
  ship: string;
  hits?: number;
  maxHits?: number;
}

const Row = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  flex-direction: row;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const HitIndicatorContainer = styled.div`
  flex: 0.25;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShipListItem: FC<ShipListItemProps> = ({
  hits = 0,
  maxHits = 0,
  ship,
}) => {
  return (
    <Row>
      <Column>
        <img src={ship} alt="shipImage" width="100%" />
      </Column>
      <Column>
        <Row>
          {Array(maxHits)
            .fill(0)
            .map((_item, index) => {
              return (
                <HitIndicatorContainer>
                  {index + 1 <= hits ? (
                    <img src={HitSmall} alt="hit-miss" width={10} />
                  ) : (
                    <img src={MissSmall} alt="hit-miss" width={10} />
                  )}
                </HitIndicatorContainer>
              );
            })}
        </Row>
      </Column>
    </Row>
  );
};

export default memo(ShipListItem);

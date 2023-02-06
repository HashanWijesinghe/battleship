import React, { FC, memo } from 'react';
import styled from 'styled-components';
import Aircraft from '../assets/Aircraft Shape.png';
import Battleship from '../assets/Battleship Shape.png';
import Carrier from '../assets/Carrier Shape.png';
import Cruiser from '../assets/Cruiser Shape.png';
import Submarine from '../assets/Submarine Shape.png';
import ShipListItem from '../shipListItem/ShipListItem';
import mock from '../mockData.json';

const ShipTypes: { [x: string]: string } = {
  battleship: Battleship,
  carrier: Carrier,
  cruiser: Cruiser,
  submarine: Submarine,
  destroyer: Aircraft,
};

const OuterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: 'row';
`;

const ShipListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ShipList: FC = (): JSX.Element => {
  return (
    <OuterContainer>
      <ShipListContainer>
        {Object.entries(mock.shipTypes as { [x: string]: any }).map(
          ([key, value]) => (
            <ShipListItem ship={ShipTypes[key]} hits={0} maxHits={value.size} />
          )
        )}
      </ShipListContainer>
    </OuterContainer>
  );
};

export default memo(ShipList);

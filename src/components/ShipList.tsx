import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Aircraft from '@assets/Aircraft Shape.png';
import Battleship from '@assets/Battleship Shape.png';
import Carrier from '@assets/Carrier Shape.png';
import Cruiser from '@assets/Cruiser Shape.png';
import Submarine from '@assets/Submarine Shape.png';
import ShipListItem from '@src/components/ShipListItem';
import { RootState } from '@store/store';
import { ViewportWidthBreakpoints } from '@shared/constants';
import mock from '@src/mockData.json';

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
  flex-direction: row;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
    flex-direction: column;
  }
`;

const ShipListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  align-items: flex-start;
  justify-content: flex-start;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
  }
`;

const ShipList: FC = (): JSX.Element => {
  const shipHits = useSelector(
    (state: RootState) => state.game.player2.ownShipHits
  );

  // to break into 2 groups
  const objectEntries = Object.entries(mock.shipTypes);
  const objectEntriesFirst3 = objectEntries.splice(0, 3);

  return (
    <OuterContainer>
      <ShipListContainer key="shipList-1">
        {objectEntriesFirst3.map(([key, value]) => (
          <ShipListItem
            key={key}
            ship={ShipTypes[key]}
            hits={shipHits[key]}
            maxHits={value.size}
          />
        ))}
      </ShipListContainer>
      <ShipListContainer key="shipList-2">
        {objectEntries.map(([key, value]) => (
          <ShipListItem
            key={key}
            ship={ShipTypes[key]}
            hits={shipHits[key]}
            maxHits={value.size}
          />
        ))}
      </ShipListContainer>
    </OuterContainer>
  );
};

export default memo(ShipList);

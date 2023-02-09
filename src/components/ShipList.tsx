import { FC, memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Images } from '@styles/images';
import ShipListItem from '@src/components/ShipListItem';
import { RootState } from '@store/store';
import { ViewportWidthBreakpoints } from '@shared/constants';
import mock from '@src/mockData.json';

const ShipTypes: { [x: string]: string } = {
  battleship: Images.Battleship,
  carrier: Images.Carrier,
  cruiser: Images.Cruiser,
  submarine: Images.Submarine,
  destroyer: Images.Aircraft,
};

const ShipListOuterContainer = styled.div`
  display: flex;
  flex: 5;
  flex-direction: row;
  width: 100%;
  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    flex: 7;
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
  }
`;

const InnerContainer = styled.div`
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
`;

const ShipList: FC = (): JSX.Element => {
  const shipHits = useSelector(
    (state: RootState) => state.game.player2.ownShipHits
  );

  // break into 2 groups to show 2 columns in smaller screen
  const objectEntries = Object.entries(mock.shipTypes);
  const objectEntriesFirst3 = objectEntries.splice(0, 3);

  return (
    <ShipListOuterContainer>
      <InnerContainer>
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
      </InnerContainer>
    </ShipListOuterContainer>
  );
};

export default memo(ShipList);

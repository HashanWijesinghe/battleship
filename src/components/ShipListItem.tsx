/* eslint-disable react/no-array-index-key */
import { FC, memo } from 'react';
import styled from 'styled-components';
import HitSmall from '@assets/Hit small.png';
import MissSmall from '@assets/Miss small.png';
import { ViewportWidthBreakpoints } from '@shared/constants';

interface ShipListItemProps {
  ship: string;
  hits?: number;
  maxHits?: number;
}

const Row = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
  margin-bottom: 5px;
  margin-top: 5px;
  justify-content: flex-start;
  align-items: center;
  flex: 0.33;
  width: 100%;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
  }

  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
  }
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-direction: column;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
  }

  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
  }
`;

const HitIndicatorContainer = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
  }

  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
  }
`;

const Image = styled.img`
  width: 90%;
`;

const HitImage = styled.img`
  width: 0.7em;
  height: 0.7em;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    width: 0.9em;
    height: 0.9em;
  }

  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
    width: 1.5em;
    height: 1.5em;
  }
`;

const ShipListItem: FC<ShipListItemProps> = ({
  hits = 0,
  maxHits = 0,
  ship,
}) => {
  return (
    <Row>
      <Column>
        <Image src={ship} alt="shipImage" />
      </Column>
      <Column>
        <Row>
          {Array(maxHits)
            .fill(0)
            .map((_item, index) => {
              return (
                <HitIndicatorContainer key={`${ship}-indicator-${index}`}>
                  <HitImage
                    src={index + 1 <= hits ? HitSmall : MissSmall}
                    alt="hit-miss"
                    width={10}
                  />
                </HitIndicatorContainer>
              );
            })}
        </Row>
      </Column>
    </Row>
  );
};

export default memo(ShipListItem);

/* eslint-disable react/no-array-index-key */
import { FC, memo, useRef } from 'react';
import styled from 'styled-components';
import { Images } from '@styles/images';
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
  flex: 0.1;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-direction: column;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
  }
`;

const HitIndicatorContainer = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
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
  const indicatorArrayRef = useRef<number[]>(Array(maxHits).fill(0));
  return (
    <Row>
      <Column>
        <Image src={ship} alt="shipImage" />
      </Column>
      <Column>
        <Row>
          {indicatorArrayRef.current.map((_item, index) => {
            return (
              <HitIndicatorContainer key={`${ship}-indicator-${index}`}>
                <HitImage
                  src={index + 1 <= hits ? Images.HitSmall : Images.MissSmall}
                  alt="hit-miss"
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

/* eslint-disable import/prefer-default-export */
import { ShipLayout } from '@src/shared/types';

export const checkIsHit = (
  shipLayouts: ShipLayout[],
  target: [row: number, column: number]
): { isHit: boolean; ship: string } => {
  let isHit = false;
  let ship = '';

  shipLayouts.forEach((layout) => {
    if (JSON.stringify(layout.positions).includes(`${target}`)) {
      isHit = true;
      ship = layout.ship;
    }
  });

  return { isHit, ship };
};

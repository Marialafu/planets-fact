import { v4 } from 'uuid';
import { COLORS } from '../styles/Color';

export const PLANETS_MENU = [
  {
    id: v4(),
    name: 'mercury',
    link: '/mercury',
    color: COLORS.mercury
  },
  {
    id: v4(),
    name: 'venus',
    link: '/venus',
    color: COLORS.venus
  },
  {
    id: v4(),
    name: 'earth',
    link: '/earth',
    color: COLORS.earth
  },
  {
    id: v4(),
    name: 'mars',
    link: '/mars',
    color: COLORS.mars
  },
  {
    id: v4(),
    name: 'jupiter',
    link: '/jupiter',
    color: COLORS.jupiter
  },
  {
    id: v4(),
    name: 'saturn',
    link: '/saturn',
    color: COLORS.saturn
  },
  {
    id: v4(),
    name: 'uranus',
    link: '/uranus',
    color: COLORS.uranus
  },
  {
    id: v4(),
    name: 'neptune',
    link: '/neptune',
    color: COLORS.neptune
  }
];

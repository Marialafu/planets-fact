import { v4 } from 'uuid';

export const PLANETS_INFO = [
  {
    id: v4(),
    name: 'mercury',
    description:
      'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Suns planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.',
    planetImg: '/assets/planet-mercury.svg',
    internalImg: '/assets/planet-mars-internal.svg',
    source: 'https://es.wikipedia.org/wiki/Marte_(planeta)'
  }
];

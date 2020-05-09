import { ReactOlTile } from './tile';
import { ReactOlVector } from './vector';
import { Layers } from './layers';
import { ReactOlHeatmap } from './heatmap';
import { ReactOlImage } from './image';
import { ReactOlVectorTile } from './vector-tile';

let layer = {
  Tile: ReactOlTile,
  Vector: ReactOlVector,
  Heatmap: ReactOlHeatmap,
  Image: ReactOlImage,
  VectorTile: ReactOlVectorTile,
};

export {
  Layers,
  layer
};

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Icon,
  Style
} from 'ol/style';

export class MarkerStyle {
  src: string = 'https://openlayers.org/en/latest/examples/data/icon.png';

  constructor(src?: string) {
    this.src = src;
  }

  style = new Style({
    image: new Icon(/** @type {olx.style.IconOptions} */({
      src: this.src
    }))
  });

  selectStyleFunction = (feature) => {
    return new Style({
      image: new Icon({
        anchor: [0.5, 0.96],
        color: '#4271AE',
        src: 'https://openlayers.org/en/latest/examples/data/dot.png'
      })
    })
  };
}
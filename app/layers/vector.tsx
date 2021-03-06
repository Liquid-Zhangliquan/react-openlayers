import * as React from "react";
import * as ReactDOM from "react-dom";
import { Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";

var iconFeature = new Feature(new Point([0, 0]));
var source = new VectorSource({ features: [iconFeature] });
var marker = new custom.style.MarkerStyle(
  'https://openlayers.org/en/latest/examples/data/icon.png'
);

export class Vector extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector source={source} style={marker.style} zIndex="1" />
          </Layers>
        </Map>
        <a href="https://github.com/Liquid-Zhangliquan/react-openlayers/blob/master/app/layers/vector.tsx">Source Code</a>
        <pre>{`
        <Map>
          <Layers>
            <layer.Tile/>
            <layer.Vector source={source} style={marker.style} zIndex="1"/>
          </Layers>
        </Map>
        `}</pre>
      </div>
    );
  }
}
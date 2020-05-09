import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  OSM,
  Vector
} from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import {
  Circle as CircleStyle,
  Text,
  Fill,
  Stroke,
  Style,
  RegularShape
} from 'ol/style';
import Select from 'ol/interaction/Select';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";

var source = new Vector({
  url: 'https://rawgit.com/boundlessgeo/ol3-workshop/master/src/data/layers/7day-M2.5.json',
  format: new GeoJSON()
});
var style = new Style({
  image: new CircleStyle({
    radius: 7,
    fill: new Fill({ color: [0, 153, 255, 1] }),
    stroke: new Stroke({ color: [255, 255, 255, 0.75], width: 1.5 })
  }),
  zIndex: 100000
});
var select = new Select({ style: style });

export class Modify extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector source={source} style={style} />
          </Layers>
          <Interactions>
            <interaction.Select instance={select} />
            <interaction.Modify features={select.getFeatures()} />
          </Interactions>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/interactions/modify.tsx">source</a>
        <pre>{`
          <Map>
            <Layers>
              <layer.Tile />
              <layer.Vector source={source} style={style} />
            </Layers>
            <Interactions>
              <interaction.Select instance={select} />
              <interaction.Modify features={select.getFeatures()} /> 
            </Interactions>
          </Map>
        `}</pre>
      </div>
    );
  }
}
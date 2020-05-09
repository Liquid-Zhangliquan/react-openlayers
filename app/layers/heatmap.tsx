import * as React from "react";
import * as ReactDOM from "react-dom";
import { Stamen, Vector as VectorSource } from 'ol/source';
import { KML } from 'ol/format';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "../../src/index";

const tileSource = new Stamen({
  layer: 'toner'
});

const heatmapSource = new VectorSource({
  url: 'https://openlayers.org/en/latest/examples/data/kml/2012_Earthquakes_Mag5.kml',
  format: new KML({
    extractStyles: false
  })
});

export class Heatmap extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Map view={{ center: [0, 0], zoom: 1 }}>
          <Layers>
            <layer.Tile source={tileSource} />
            <layer.Heatmap source={heatmapSource} blur={15} radius={5} />
          </Layers>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/layers/heatmap.tsx">source</a>
        <pre>{`
          <Map center={[0,0]} view={{center:[0,0], zoom:1}}>
            <Layers>
              <layer.Tile source={tileSource} />
              <layer.Heatmap source={heatmapSource} blur={15} radius={5} />
            </Layers>
          </Map>
        `}</pre>
      </div>
    );
  }
}
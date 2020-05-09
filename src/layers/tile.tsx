import * as React from 'react';
import { Util } from '../util';
import { Map } from 'ol';
import Tile from 'ol/layer/Tile';
import { Options } from 'ol/layer/BaseTile';
import OSM from 'ol/source/OSM'

export class ReactOlTile extends React.Component<any, any> {

  layer: Tile;

  options: Options = {
    zIndex: undefined,
    opacity: undefined,
    preload: undefined,
    source: undefined,
    visible: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined,
    useInterimTilesOnError: undefined
  };

  events: any = {
    'change': undefined,
    'change:extent': undefined,
    'change:maxResolution': undefined,
    'change:minResolution': undefined,
    'change:opacity': undefined,
    'change:preload': undefined,
    'change:source': undefined,
    'change:useInterimTilesOnError': undefined,
    'change:visible': undefined,
    'change:zIndex': undefined,
    'postcompose': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'render': undefined
  };

  constructor(props) {
    super(props);
    console.log('Tile constructor');
  }

  render() {
    return null;
    console.log('Tile render() .....');
  }

  componentDidMount() {
    console.log('Tile componentDidMount() .....');
    let options = Util.getOptions(Object.assign(this.options, this.props));
    options.source = options.source || new OSM();
    this.layer = new Tile(options);
    if (this.props.zIndex) {
      this.layer.setZIndex(this.props.zIndex);
    }
    this.context.mapComp.layers.push(this.layer)

    let olEvents = Util.getEvents(this.events, this.props);
    for (let eventName in olEvents) {
      this.layer.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('Tile componentWillReceiveProps() .....');
    if (nextProps !== this.props) {
      let options = Util.getOptions(Object.assign(this.options, this.props));
      this.context.mapComp.map.removeLayer(this.layer);
      this.layer = new Tile(options);
      if (this.props.zIndex) {
        this.layer.setZIndex(this.props.zIndex);
      }
      this.context.mapComp.map.addLayer(this.layer);

      let olEvents = Util.getEvents(this.events, this.props);
      for (let eventName in olEvents) {
        this.layer.on(eventName, olEvents[eventName]);
      }
    }
  }

  componentWillUnmount() {
    this.context.mapComp.map.removeLayer(this.layer);
  }

}

ReactOlTile['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Object)
};

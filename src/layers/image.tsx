import * as React from 'react';
import { Util } from "../util";
import { Map } from 'ol';
import Image from 'ol/layer/Image';
import { Options } from 'ol/layer/BaseImage'

export class ReactOlImage extends React.Component<any, any> {

  layer: Image;

  options: Options = {
    opacity: undefined,
    source: undefined,
    visible: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined
  };

  events: any = {
    'change': undefined,
    'change:extent': undefined,
    'change:gradient': undefined,
    'change:maxResolution': undefined,
    'change:minResolution': undefined,
    'change:opacity': undefined,
    'change:source': undefined,
    'change:visible': undefined,
    'change:zIndex': undefined,
    'postcompose': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'render': undefined
  };

  constructor(props) {
    super(props);
  }

  render() { return null; }

  componentDidMount() {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.layer = new Image(options);
    if (this.props.zIndex) {
      this.layer.setZIndex(this.props.zIndex);
    }
    this.context.mapComp.layers.push(this.layer);

    let olEvents = Util.getEvents(this.events, this.props);
    for (let eventName in olEvents) {
      this.layer.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      let options = Util.getOptions(Object.assign(this.options, this.props));
      this.context.mapComp.map.removeLayer(this.layer);
      this.layer = new Image(options);
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

ReactOlImage['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Object),
  map: React.PropTypes.instanceOf(Map)
};

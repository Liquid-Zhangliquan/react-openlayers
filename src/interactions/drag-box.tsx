import * as React from 'react';
import { Util } from "../util";
import Map from 'ol/Map';
import DragBox, { Options } from 'ol/interaction/DragBox';

export class ReactOlDragBox extends React.Component<any, any> {

  interaction: DragBox;

  options: Options = {
    className: undefined,
    condition: undefined,
    boxEndCondition: undefined
  };

  events: any = {
    'boxdrag': undefined,
    'boxend': undefined,
    'boxstart': undefined,
    'change': undefined,
    'change:active': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount() {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    console.log('options', options);
    this.interaction = new DragBox(options);
    this.context.mapComp.interactions.push(this.interaction)

    let olEvents = Util.getEvents(this.events, this.props);
    for (let eventName in olEvents) {
      this.interaction.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.context.mapComp.map.removeInteraction(this.interaction);
      let options = Util.getOptions(Object['assign'](this.options, nextProps));
      this.interaction = new DragBox(options);
      this.context.mapComp.map.addInteraction(this.interaction);

      let olEvents = Util.getEvents(this.events, this.props);
      for (let eventName in olEvents) {
        this.interaction.on(eventName, olEvents[eventName]);
      }
    }
  }

  componentWillUnmount() {
    this.context.mapComp.map.removeInteraction(this.interaction);
  }

}

ReactOlDragBox['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Object),
  map: React.PropTypes.instanceOf(Map)
};
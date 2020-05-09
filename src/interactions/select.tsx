import * as React from 'react';
import { Util } from "../util";
import Map from 'ol/Map';
import Select, { Options } from 'ol/interaction/Select';

export class ReactOlSelect extends React.Component<any, any> {

  interaction: Select;

  options: Options = {
    addCondition: undefined,
    condition: undefined,
    layers: undefined,
    style: undefined,
    removeCondition: undefined,
    toggleCondition: undefined,
    multi: undefined,
    features: undefined,
    filter: undefined,
    wrapX: undefined,
    hitTolerance: undefined
  };

  events: any = {
    'change': undefined,
    'change:active': undefined,
    'propertychange': undefined,
    'select': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount() {
    if (this.props.instance) {
      this.interaction = this.props.instance;
    } else {
      let options = Util.getOptions(Object['assign'](this.options, this.props));
      this.interaction = new Select(options);
    }
    this.context.mapComp.interactions.push(this.interaction)

    let olEvents = Util.getEvents(this.events, this.props);
    for (let eventName in olEvents) {
      this.interaction.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.context.mapComp.map.removeInteraction(this.interaction);

      if (this.props.instance) {
        this.interaction = this.props.instance;
      } else {
        let options = Util.getOptions(Object['assign'](this.options, nextProps));
        this.interaction = new Select(options);
      }
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

ReactOlSelect['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Object),
  map: React.PropTypes.instanceOf(Map)
};

import * as React from 'react';
import { Util } from "../util";
import Map from 'ol/Map';
import Translate, { Options } from 'ol/interaction/Translate';

export class ReactOlTranslate extends React.Component<any, any> {

  interaction: Translate;

  options: Options = {
    features: undefined,
    layers: undefined,
    hitTolerance: undefined
  };

  events: any = {
    'change': undefined,
    'change:active': undefined,
    'propertychange': undefined,
    'translateend': undefined,
    'translatestart': undefined,
    'translating': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount() {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.interaction = new Translate(options);
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
      this.interaction = new Translate(options);
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

ReactOlTranslate['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Object),
  map: React.PropTypes.instanceOf(Map)
};
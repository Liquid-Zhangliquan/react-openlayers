import * as React from 'react';
import { Util } from '../util';
import { Map } from 'ol';
import Attribution, { Options } from 'ol/control/Attribution';

export class ReactOlAttribution extends React.Component<any, any> {

  control: Attribution;

  options: Options = {
    className: undefined,
    target: undefined,
    collapsible: undefined,
    collapsed: undefined,
    tipLabel: undefined,
    label: undefined,
    collapseLabel: undefined,
    render: undefined
  };

  events: any = {
    'change': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount() {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.control = new Attribution(options);
    this.context.mapComp.controls.push(this.control)

    let olEvents = Util.getEvents(this.events, this.props);
    for (let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }
  }

}

ReactOlAttribution['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Object),
  map: React.PropTypes.instanceOf(Map)
};

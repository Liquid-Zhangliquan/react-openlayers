import * as React from 'react';
import { Util } from '../util';
import { Map } from 'ol';
import OverviewMap, { Options } from 'ol/control/OverviewMap';

export class ReactOlOverviewMap extends React.Component<any, any> {

  control: OverviewMap;

  options: Options = {
    collapsed: undefined,
    collapseLabel: undefined,
    collapsible: undefined,
    label: undefined,
    layers: undefined,
    render: undefined,
    target: undefined,
    tipLabel: undefined,
    view: undefined
  };

  events: any = {
    'change': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount() {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.control = new OverviewMap(options);
    this.context.mapComp.controls.push(this.control)

    let olEvents = Util.getEvents(this.events, this.props);
    for (let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }
  }

}

ReactOlOverviewMap['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Object),
  map: React.PropTypes.instanceOf(Map)
};

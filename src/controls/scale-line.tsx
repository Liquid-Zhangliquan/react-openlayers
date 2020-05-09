import * as React from 'react';
import { Util } from '../util';
import { Map } from 'ol';
import ScaleLine, { Options } from 'ol/control/ScaleLine';

export class ReactOlScaleLine extends React.Component<any, any> {

  control: ScaleLine;

  options: Options = {
    className: undefined,
    minWidth: undefined,
    render: undefined,
    target: undefined,
    units: undefined
  };

  events: any = {
    'change': undefined,
    'change:units': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount() {
    let options = Util.getOptions(Object.assign(this.options, this.props));
    this.control = new ScaleLine(options);
    this.context.mapComp.controls.push(this.control)

    let olEvents = Util.getEvents(this.events, this.props);
    for (let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }
  }

}

ReactOlScaleLine['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Object),
  map: React.PropTypes.instanceOf(Map)
};

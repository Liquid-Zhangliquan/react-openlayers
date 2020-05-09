import * as React from 'react';
import { Util } from '../util';
import { Map } from 'ol';
import Rotate, { Options } from 'ol/control/Rotate';

export class ReactOlRotate extends React.Component<any, any> {

  control: Rotate;

  options: Options = {
    className: undefined,
    label: undefined,
    tipLabel: undefined,
    duration: undefined,
    autoHide: undefined,
    render: undefined,
    resetNorth: undefined,
    target: undefined
  };

  events: any = {
    'change': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount() {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.control = new Rotate(options);
    this.context.mapComp.controls.push(this.control)

    let olEvents = Util.getEvents(this.events, this.props);
    for (let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }
  }

}

ReactOlRotate['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Object),
  map: React.PropTypes.instanceOf(Map)
};

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Util } from './util';
import { Map } from 'ol';
import Overlay, { Options } from 'ol/Overlay';

export class ReactOlOverlay extends React.Component<any, any> {

  overlay: Overlay;
  el: HTMLElement;

  options: Options = {
    id: undefined,
    element: undefined,
    offset: undefined,
    position: undefined,
    stopEvent: undefined,
    insertFirst: undefined,
    autoPan: undefined,
    autoPanAnimation: undefined,
    autoPanMargin: undefined
  };

  events: any = {
    'change': undefined,
    'change:element': undefined,
    'change:map': undefined,
    'change:offset': undefined,
    'change:position': undefined,
    'change:positioning': undefined,
    'propertychange': undefined
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    options.element = ReactDOM.findDOMNode(this).querySelector('div');
    // console.log('options.element', options.element);
    this.overlay = new Overlay(options);
    this.context.mapComp.overlays.push(this.overlay);
  }
}

ReactOlOverlay['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Object),
  map: React.PropTypes.instanceOf(Map)
};

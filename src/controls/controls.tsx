import * as React from 'react';
import { Map } from 'ol';

import { Util } from '../util';

// I wish I can name it as 'layers', not 'Layers'
export class ReactOlControls extends React.Component<any, any> {

  options: any = {
    attribution: undefined,
    attributionOptions: undefined,
    rotate: undefined,
    rotateOptions: undefined,
    zoom: undefined,
    zoomOptions: undefined
  };

  constructor(props) {
    super(props);
    this.options = Util.getOptions(Object['assign'](this.options, this.props));
  }

  render() {
    return (<div>{this.props.children}</div>);
  }

  componentDidMount() { }

  componentWillUnmount() { }
}

ReactOlControls['contextTypes'] = {
  map: React.PropTypes.instanceOf(Map)
};
import * as React from 'react';
import { GeoCoder } from 'geo-coder';
import Control from 'ol/control/Control';
import { transform } from 'ol/proj'

import './geo-coder.css';

let element: HTMLElement = document.createElement('div');

export class GeoCoderControl extends Control {
  geoCoder: GeoCoder;
  eventListeners: any = {};
  expanded: boolean = false;
  buttonEl: HTMLButtonElement;
  autocompleteEl: HTMLDivElement;

  constructor(options = {}) {
    super({ element: element });
    this.geoCoder = new GeoCoder(options);
    element.innerHTML = ''; //it may contain the previous element
    element.className = 'ol-control geo-coder';
    element.appendChild(this.buttonEl = this.getButtonHTML());
    element.appendChild(this.autocompleteEl = this.getAutocompleteHTML());
  }

  on(eventName: string, listener: Function, option?: Object): any {
    this.eventListeners[eventName] = listener;
    return listener;
  }

  locate = (options: any) => {
    let lonLat: [number, number] = [parseFloat(options.lon), parseFloat(options.lat)];
    let projection = this.getMap().getView().getProjection();
    let coord = transform(lonLat, 'EPSG:4326', projection);
    let view = this.getMap().getView();
    let duration = options.duration || 500;
    let resolution = options.resolution || 2.388657133911758;

    view.animate(
      { duration: duration, resolution: resolution },
      { duration: duration, center: coord }
    );
  }

  toggleExpand = () => {
    this.expanded = !this.expanded;
    this.autocompleteEl.style.display = this.expanded ? '' : 'none';
  }

  getButtonHTML() {
    let buttonEl = document.createElement('button');
    buttonEl.innerHTML = 'G';
    buttonEl.addEventListener('click', this.toggleExpand, false);
    return buttonEl;
  }

  getAutocompleteHTML() {
    let autocompleteEl = document.createElement('div');
    autocompleteEl.className = 'autocomplete';
    autocompleteEl.style.display = 'none';
    let inputEl = document.createElement('input');
    inputEl.className = 'address';
    autocompleteEl.appendChild(inputEl);

    this.geoCoder.autocomplete(inputEl);
    inputEl.addEventListener('place_changed', (event: any) => {
      //this.locate(event.detail.lat, event.detail.lon);
      this.eventListeners['place_changed'](event);
    })

    return autocompleteEl;
  }
}


import { ReactOlDoubleClickZoom } from './double-click-zoom';
import { ReactOlDragAndDrop } from './drag-and-drop';
import { ReactOlDragBox } from './drag-box';
import { ReactOlDragPan } from './drag-pan';
import { ReactOlDragRotate } from './drag-rotate';
import { ReactOlDragRotateAndZoom } from './drag-rotate-and-zoom';
import { ReactOlDragZoom } from './drag-zoom';
import { ReactOlDraw } from './draw';
import { ReactOlExtent } from './extent';
import { Interactions } from './interactions';
import { ReactOlKeyboardPan } from './keyboard-pan';
import { ReactOlKeyboardZoom } from './keyboard-zoom';
import { ReactOlModify } from './modify';
import { ReactOlMouseWheelZoom } from './mouse-wheel-zoom';
import { ReactOlPinchRotate } from './pinch-rotate';
import { ReactOlPinchZoom } from './pinch-zoom';
import { ReactOlPointer } from './pointer';
import { ReactOlSelect } from './select';
import { ReactOlSnap } from './snap';
import { ReactOlTranslate } from './translate';

let interaction = {
  DoubleClickZoom: ReactOlDoubleClickZoom,
  DragAndDrop: ReactOlDragAndDrop,
  DragBox: ReactOlDragBox,
  DragPan: ReactOlDragPan,
  DragRotate: ReactOlDragRotate,
  DragRotateAndZoom: ReactOlDragRotateAndZoom,
  DragZoom: ReactOlDragZoom,
  Draw: ReactOlDraw,
  Extent: ReactOlExtent,
  KeyboardPan: ReactOlKeyboardPan,
  KeyboardZoom: ReactOlKeyboardZoom,
  Modify: ReactOlModify,
  MouseWheelZoom: ReactOlMouseWheelZoom,
  PinchRotate: ReactOlPinchRotate,
  PinchZoom: ReactOlPinchZoom,
  Pointer: ReactOlPointer,
  Select: ReactOlSelect,
  Snap: ReactOlSnap,
  Translate: ReactOlTranslate
};

export {
  Interactions,
  interaction
};


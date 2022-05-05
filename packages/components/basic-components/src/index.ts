import { ComponentType } from './types';
import type { Widget } from './types';
import PlainQrcodeComponent from '@my-low-code/plain-qrcode-component';
import PlainImageComponent from '@my-low-code/plain-image-component';
import PlainImageComponentSchema from '@my-low-code/plain-image-component/schema';

const PlainImage: Widget = {
  name: ComponentType.PLAIN_IMAGE_COMPONENT,
  component: PlainImageComponent,
  schema: PlainImageComponentSchema,
};
const PlainQrcode: Widget = {
  name: ComponentType.PLAIN_QRCODE_COMPONENT,
  component: PlainQrcodeComponent,
  schema: PlainImageComponentSchema,
};
const WidgetMap: Record<ComponentType, Widget> = {
  [ComponentType.PLAIN_IMAGE_COMPONENT]: PlainImage,
  [ComponentType.PLAIN_QRCODE_COMPONENT]: PlainQrcode,
};

export { WidgetMap, ComponentType, Widget };

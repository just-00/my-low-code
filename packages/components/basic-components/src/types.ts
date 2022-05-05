export enum ComponentType {
  PLAIN_IMAGE_COMPONENT = 'PLAIN_IMAGE_COMPONENT',
  PLAIN_QRCODE_COMPONENT = 'PLAIN_QRCODE_COMPONENT',
}

export type Widget = {
  name: ComponentType;
  component: any;
  schema: { [key: string]: any };
};

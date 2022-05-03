import {
  PlainQrcodeComponent,
  PlainImageComponent,
  PlainImageComponentSchema,
} from "@my-low-code/basic-components";
import { ComponentType, ReactChildren, ReactElement, ReactNode } from "react";

export type GalleryItem = {
  key: string;
  Component: ()=>JSX.Element | null;
};

console.log("schema=======", PlainImageComponentSchema)

const PLAIN_IMAGE_COMPONENT = "PLAIN_IMAGE_COMPONENT";
const PLAIN_QRCODE_COMPONENT = "PLAIN_QRCODE_COMPONENT";

const GALLERY_MAP: Record<
  string,
  {
    title: string;
    components: GalleryItem[];
  }
> = {};

GALLERY_MAP.images = {
  title: "图片",
  components: [
    {
      key: PLAIN_IMAGE_COMPONENT,
      Component: PlainImageComponent,
    },
  ],
};

GALLERY_MAP.qrcodes = {
  title: "二维码",
  components: [
    {
      key: PLAIN_QRCODE_COMPONENT,
      Component: PlainQrcodeComponent,
    },
  ],
};

export { GALLERY_MAP };

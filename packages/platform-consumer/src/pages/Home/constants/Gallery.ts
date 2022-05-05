import { WidgetMap, Widget } from "@my-low-code/basic-components";

const GalleryList: Array<{ title: string; widgets: Widget[] }> = [
  {
    title: "图片",
    widgets: [WidgetMap.PLAIN_IMAGE_COMPONENT],
  },
  {
    title: "二维码",
    widgets: [WidgetMap.PLAIN_QRCODE_COMPONENT],
  },
];

export { GalleryList };

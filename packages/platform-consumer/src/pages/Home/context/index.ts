import { ComponentType } from "@my-low-code/basic-components";
import { createContext, Dispatch } from "react";

export type GalleryItem = {
  type: ComponentType;
  id: string;
  formConfig?: {
    [key: string]: any;
  };
};

export type HomeContextType = {
  galleryWithFormList: GalleryItem[];
  currentGallery?: GalleryItem;
};

const HomeContextInitValue: { state: HomeContextType } & {
  dispatch: Dispatch<{
    type: number;
    payload: any;
  }>;
} = {
  state: {
    galleryWithFormList: [],
  },
  dispatch: () => {},
};

const HomeContext = createContext(HomeContextInitValue);

export { HomeContextInitValue };
export default HomeContext;

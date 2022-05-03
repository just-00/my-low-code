import React from "react";
import { GalleryComponent } from "./components/Gallery";
import { FormComponent } from "./components/Form";
import styles from './index.module.less'

export const HomeView = () => {
  return <section className="flex">
    <GalleryComponent />
    <FormComponent />
  </section>;
};

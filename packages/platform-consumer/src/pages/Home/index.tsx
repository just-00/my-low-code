import React, { useReducer, useState } from "react";
import { GalleryComponent } from "./components/Gallery";
import { FormComponent } from "./components/Form";
import { LayoutComponent } from "./components/Layout";
import Renderer from "@my-low-code/renderer";
import HomeContext, { HomeContextInitValue } from "./context";
import styles from "./index.module.less";
import { HomeReducer } from "./reducer";
import { SimulatorRenderer } from "./components/SimulatorRenderer";

export const HomeView = () => {
  const [state, dispatch] = useReducer(HomeReducer, HomeContextInitValue.state);
  const rendererProps = {
    data: state.galleryWithFormList,
  } as any

  return (
    <HomeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <section className="flex px-10 py-6 h-[100vh]">
        <GalleryComponent />
        <div className="w-[200px] ml-10">
          <LayoutComponent />
        </div>
        <div className="flex-1 ml-6">
          <SimulatorRenderer  {...rendererProps}/>
        </div>
        <div className="w-[350px]">
          <FormComponent />
        </div>
      </section>
    </HomeContext.Provider>
  );
};

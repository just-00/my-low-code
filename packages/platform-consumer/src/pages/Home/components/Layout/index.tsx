import { WidgetMap } from "@my-low-code/basic-components";
import React, { useContext } from "react";
import HomeContext, { GalleryItem } from "../../context";
import { HOME_ACTION } from "../../reducer/action";

export const LayoutComponent = () => {
  const { state, dispatch } = useContext(HomeContext);

  const handleClick = (item: GalleryItem) => {
    dispatch({ type: HOME_ACTION.SET_CURRENT_GALLERY_ACTION, payload: item });
  }

  return (
    <section className="w-[300px]">
      {state.galleryWithFormList?.map((item) => {
          const Component = WidgetMap[item.type].component
        return (<div className="cursor-pointer"
            key={item.id} onClick={()=>handleClick(item)}>
            <Component />
        </div>);
      })}
    </section>
  );
};

import { DeleteOutlined } from "@ant-design/icons";
import { WidgetMap } from "@my-low-code/basic-components";
import classNames from "classnames";
import React, { useContext, useState } from "react";
import HomeContext, { GalleryItem } from "../../context";
import { HOME_ACTION } from "../../reducer/action";
import styles from "./index.module.less";

export const LayoutComponent = () => {
  const { state, dispatch } = useContext(HomeContext);
  const [current, setCurrent] = useState("");

  const handleClick = (item: GalleryItem) => {
    setCurrent(item.id);
    dispatch({ type: HOME_ACTION.SET_CURRENT_GALLERY_ACTION, payload: item });
  };

  const handleDelete = (index: number) => {
    dispatch({ type: HOME_ACTION.DELETE_GALLERY_ACTION, payload: index });
  };

  return (
    <section>
      {state.galleryWithFormList?.map((item, index) => {
        const Component = WidgetMap[item.type].component;
        const isCurrent = current === item.id;
        return (
          <section
            className="flex items-center"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            <div
              className={classNames("cursor-pointer", styles.componentWrapper, {
                [styles.active]: isCurrent,
              })}
            >
              <Component />
            </div>
            {isCurrent && (
              <div
                className={`${styles.deleteIconWrapper} ml-5 cursor-pointer`}
                onClick={() => handleDelete(index)}
              >
                <DeleteOutlined />
              </div>
            )}
          </section>
        );
      })}
    </section>
  );
};

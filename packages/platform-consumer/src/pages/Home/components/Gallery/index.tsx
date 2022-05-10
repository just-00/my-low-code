import React, { useContext, useEffect, useState } from "react";
import classnames from 'classnames'
import { GalleryList } from "../../constants/Gallery";
import HomeContext from "../../context";
import { HOME_ACTION } from "../../reducer/action";

export const GalleryComponent = () => {
  const { dispatch } = useContext(HomeContext);
  const [currentTab, setCurrentTab] = useState(0);

  const handleClick = (key: string) => {
    dispatch({
      type: HOME_ACTION.ADD_GALLERY_ACTION,
      payload: {
        type: key,
      },
    });
  };
  return (
    <section className="flex w-[300px]">
      <section className="bg-light-grey h-[100%] text-lg">
        {GalleryList.map(({ title }, index) => (
          <div
            key={title}
            className={classnames(`whitespace-nowrap cursor-pointer text-center
              mb-3 px-10 py-2 rounded-sm hover:brightness-150`,
            {
              "bg-primary": currentTab === index,
              "text-white": currentTab === index,
            },
            {
              "bg-light-grey":  currentTab !== index,
            }
            )}
            onClick={() => {
              setCurrentTab(index);
            }}
          >
            {title}
          </div>
        ))}
      </section>
      <section className="ml-6">
        {GalleryList[currentTab].widgets.map(
          ({ name, component: Component }) => (
            <div onClick={() => handleClick(name)} key={name} className="cursor-pointer">
              <Component />
            </div>
          )
        )}
      </section>
    </section>
  );
};

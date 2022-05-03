import React, { useState } from "react";
import { GalleryItem, GALLERY_MAP } from "@/constants/index";

export const GalleryComponent = () => {
  const [currentTab, setCurrentTab] = useState(
    () => Object.keys(GALLERY_MAP)[0]
  );

  return (
    <section className="flex w-[400px]">
      <section>
        {Object.keys(GALLERY_MAP).map((key) => (
          <div
            key={key}
            onClick={() => {
              setCurrentTab(key);
            }}
          >
            {GALLERY_MAP[key].title}
          </div>
        ))}
      </section>
      <section>
        {GALLERY_MAP[currentTab].components.map(
          ({ key, Component }: GalleryItem) => (
            <Component key={key} />
          )
        )}
      </section>
    </section>
  );
};

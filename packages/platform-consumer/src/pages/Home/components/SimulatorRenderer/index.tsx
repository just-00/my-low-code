import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import Renderer from "@my-low-code/renderer";
import React, { useState } from "react";
import styles from "./index.module.less";

export const SimulatorRenderer = (props: any) => {
  const [rate, setRate] = useState(0.6);

  return (
    <section className="flex flex-col items-center">
      <div className="flex justify-center">
        <section
          className={`${styles.buttonWrapper} flex items-center mb-[5px]`}
        >
          <MinusSquareOutlined
            style={{ pointerEvents: rate < 0.2 ? "none" : undefined }}
            onClick={() => {
              setRate(rate - 0.1);
            }}
          />
          <div className="mx-4 w-[40px] text-center select-none">
            {(rate * 100).toFixed(0)}%
          </div>
          <PlusSquareOutlined
            disabled={rate >= 1}
            onClick={() => {
              setRate(rate + 0.1);
            }}
          />
        </section>
      </div>
      <div
        className={`border overflow-hidden h-[844px] w-[390px] rounded-[25px] origin-top`}
        style={{
          transform: `scale(${rate})`,
        }}
      >
        <Renderer {...props} />
      </div>
    </section>
  );
};

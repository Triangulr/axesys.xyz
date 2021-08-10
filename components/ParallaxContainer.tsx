import React, { memo, ReactNode, useEffect, useMemo, useState } from "react";
import { createContext } from "react";

export const ParallaxContext = createContext<{
  scale: number;
  value: [number, number];
}>({
  scale: 1,
  value: [0, 0],
});

const ParallaxContainer = ({ children, scale = 0.01 }: { children?: ReactNode; scale?: number }) => {
  const [value, setValue] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    let size: [number, number] = [0, 0];
    let position: [number, number] = [0, 0];

    const updateParallax = () => {
      setValue([(position[0] / size[0] - 0.5) * scale, (position[1] / size[1] - 0.5) * scale]);
    };

    const resizeHandler = () => {
      size = [window.innerWidth, window.innerHeight];
      updateParallax();
    };

    const mouseHandler = ({ clientX, clientY }: MouseEvent) => {
      position = [clientX, clientY];
      updateParallax();
    };

    const touchHandler = ({ touches }: TouchEvent) => {
      if (touches.length) {
        position = [touches[0].clientX, touches[0].clientY];
        updateParallax();
      }
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    window.addEventListener("mousemove", mouseHandler);
    window.addEventListener("touchstart", touchHandler);
    window.addEventListener("touchend", touchHandler);
    window.addEventListener("touchmove", touchHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousemove", mouseHandler);
      window.removeEventListener("touchstart", touchHandler);
      window.removeEventListener("touchend", touchHandler);
      window.removeEventListener("touchmove", touchHandler);
    };
  }, []);

  return (
    <ParallaxContext.Provider value={useMemo(() => ({ value, scale }), [value, scale])}>
      {children}
    </ParallaxContext.Provider>
  );
};

export default memo(ParallaxContainer);

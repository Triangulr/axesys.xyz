import { chakra } from "@chakra-ui/react";
import { ComponentProps, memo, useContext } from "react";
import { ParallaxContext } from "./ParallaxContainer";

const ParallaxItem = ({
  preventUnderflow,
  ...props
}: ComponentProps<typeof chakra.div> & { preventUnderflow?: boolean }) => {
  const { value, scale } = useContext(ParallaxContext);

  let transform = "";

  transform += preventUnderflow ? `scale(${1 + scale}) ` : "";
  transform += `translate3d(${value[0] * 100}%, ${value[1] * 100}%, 0)`;

  return (
    <chakra.div
      transition="transform .6s cubic-bezier(0.33, 1, 0.68, 1)"
      style={{
        transform,
        willChange: "transform",
      }}
      {...props}
    />
  );
};

export default memo(ParallaxItem);

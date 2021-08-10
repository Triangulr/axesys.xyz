import React, { memo, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { Center, chakra, ScaleFade, VStack, SlideFade, Heading } from "@chakra-ui/react";
import pfp from "../assets/pfp.jpg";
import bg from "../assets/bg.jpg";
import Links from "../components/Links";
import Counter from "../components/Counter";
import ParallaxContainer from "../components/ParallaxContainer";
import ParallaxItem from "../components/ParallaxItem";

function onImageLoad(img: HTMLImageElement | string, handler: () => void) {
  if (typeof img === "string") {
    const src = img;

    img = new Image();
    img.src = src;
  }

  img.complete ? handler() : img.addEventListener("load", handler);
}

const pageLoad = typeof window === "undefined" ? 0 : performance.now();

const Home = () => {
  const pfpRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const [showPfp, setShowPfp] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setShowPfp(true);
        setTimeout(() => setShowDesc(true), 200);
        setTimeout(() => onImageLoad(bg.src, () => setShowBg(true)), 500);
      }, Math.max(0, 200 - (window.performance.now() - pageLoad)));
    };

    pfpRef.current && onImageLoad(pfpRef.current, handleLoad);
  }, []);

  return (
    <Layout title="Axesys" description="Web source by phosphene47">
      <Center position="relative" w="100vw" h="100vh" overflow="hidden" userSelect="none" p={4}>
        <ParallaxContainer>
          <ParallaxItem>
            <VStack spacing={8}>
              <ScaleFade in={showPfp}>
                <VStack spacing={4} pointerEvents="none">
                  <chakra.img ref={pfpRef} src={pfp.src} w={36} h={36} borderRadius="full" boxShadow="xl" />

                  <Heading size="lg">
                    <chakra.span color="pink.300">@</chakra.span>
                    <span>Axesys</span>
                  </Heading>
                </VStack>
              </ScaleFade>

              <SlideFade in={showDesc} offsetY={-16}>
                <VStack spacing={8}>
                  <div>Coding is depressing, but RNG is even more depressing.
                    Source by phosphene47 (thanks)
                  </div>

                  <Links />
                </VStack>
              </SlideFade>
            </VStack>
          </ParallaxItem>

          <ParallaxItem
            ref={bgRef}
            bg={`url(${bg.src}) center center / cover`}
            zIndex={-1}
            position="absolute"
            w="full"
            h="full"
            preventUnderflow
            opacity={showBg ? 0.5 : 0}
            transition="all 0.6s cubic-bezier(0.33, 1, 0.68, 1)"
          />
        </ParallaxContainer>
      </Center>

      <Counter />
    </Layout>
  );
};

export default memo(Home);

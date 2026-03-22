import { Image as ChakraImage, VStack } from "@chakra-ui/react";
import NextImage from "next/image";

import imageBanner1 from "../../public/assets/banner1.png";
import imageBanner2 from "../../public/assets/banner2.png";
import imageBanner3 from "../../public/assets/banner3.png";

export default function Home() {


  return (
    <VStack as="main" gap={0} >
      <VStack as="section" position="relative" w="100vw" h="100vh">
        <ChakraImage asChild>
          <NextImage
            src={imageBanner2}
            alt="AutoShine"
            fill
            style={{
              objectFit: "cover",
            }} />
        </ChakraImage>
      </VStack>
    </VStack>
  )
}
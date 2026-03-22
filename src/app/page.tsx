import { Image as ChakraImage, HStack, VStack } from "@chakra-ui/react";
import NextImage from "next/image";

import bannerFooter from "../../public/assets/bannerFooter.jpeg";

export default function Home() {


  return (
    <VStack as="main" gap={0} >
      {/* <HStack as="section">
        <ChakraImage asChild>
          <NextImage
            src={bannerFooter}
            alt="Amigos abraçados segurando Heineken"
            fill
            style={{
              objectFit: "cover",
            }} />
        </ChakraImage>
      </HStack> */}
    </VStack>
  )
}
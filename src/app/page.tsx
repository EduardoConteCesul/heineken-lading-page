import { Image as ChakraImage, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";

import bannerFooter from "../../public/assets/bannerFooter.jpeg";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <VStack as="main" gap={0} >
      <VStack as="section" w="100%"gap={0}>
        <HStack
          w="100%"
          h="190px"
          pt="72px"
          pb="64px"
          justify="center"
          align="center"
          fontFamily="'HEINEKEN Core', sans-serif"
          bg="rgb(32, 85, 39)"
        >
          <VStack
            w="100%"
            h="80px"
            justify="center"
            align="center"
            flexDirection="row"
            gap="40px"
          >
            <Text
              color="white"
              fontSize="40px"
              fontWeight="700"
              lineHeight="40px"
              textAlign="center"
            >
              Aqui você fica por dentro de tudo o que fazemos
            </Text>
            <Icon boxSize="28px" color="white" cursor="pointer"><FaFacebook /></Icon>
            <Icon boxSize="28px" color="white" cursor="pointer"><FaInstagram /></Icon>
            <Icon boxSize="28px" color="white" cursor="pointer"><FaLinkedinIn /></Icon>
            <Icon boxSize="28px" color="white" cursor="pointer"><FaYoutube /></Icon>

          </VStack>
        </HStack>
      </VStack>

      <VStack as="section" w="100%"gap={0}>
        {/* Penultimo Banner */}
        <HStack position="relative" w="100%" h="350px">

          <ChakraImage w="100%" maxH="350px" asChild>
            <NextImage
              src={bannerFooter}
              alt="..."
              fill
              style={{ objectFit: "cover" }}
            />
          </ChakraImage>

          <VStack
            position="absolute"
            inset="0"
            justify="center"
            align="center"
            zIndex="1"
          >
            <VStack
              maxW="720px"
              w="100%"
              h="128px"
              fontFamily="'HEINEKEN Core', sans-serif"
              fontSize="16px"
              lineHeight="24px"
              zIndex="2"
              gap="0"
            >
              <Text
                as="h2"
                color="white"
                fontSize="56px"
                fontWeight="700"
                lineHeight="56px"
                textAlign="center"
                w="720px"
                m="8px 0"
              >
                Faça parte do nosso time de estrelas
              </Text>

              <VStack
                mt="16px"
                maxW="480px"
                w="100%"
                h="48px"
                align="center"
                justify="center"
              >
                <HStack
                  as="a"
                  bg="rgb(32, 85, 39)"
                  color="white"
                  fontFamily="'HEINEKEN Core', sans-serif"
                  fontSize="16px"
                  fontWeight="bold"
                  h="48px"
                  px="16px"
                  w="220px"
                  justify="center"
                  align="center"
                  borderRadius="0"
                  textDecoration="none"
                  transition="all 0.15s ease-in-out"
                  _hover={{
                    bg: "rgb(28, 75, 34)",
                    textDecoration: "none"
                  }}
                >
                  Confira Nossas Vagas
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  )
}
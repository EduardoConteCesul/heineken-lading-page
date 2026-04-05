"use client";

import { Button, Image as ChakraImage, HStack, Icon, Link as ChakraLink, Text, VStack, Box, Carousel, Image } from "@chakra-ui/react";
import NextImage from "next/image";

import bannerFooter from "../../public/assets/bannerFooter.jpeg";
import elasNaDirecao from "../../public/assets/elas-na-direcao.png";
import hubCidadania from "../../public/assets/hub-cidadania.jpg";
import mambaWater from "../../public/assets/mamba-water.jpg";
import passosLink from "../../public/assets/passos_link.webp";
import spin from "../../public/assets/spin.jpg";
import { LuChevronUp } from "react-icons/lu";
import NextLink from "next/link";

import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

type ListItems = {
  index: number,
  img: string,
  title: string,
  description: string,
  linkSaibaMais: string
}

export default function Home() {

  const items: ListItems[] = [
    { index: 1, img: "assets/banner1.png", title: "Nossas marcas", description: "Acreditamos que os melhores momentos são aqueles compartilhados. Por isso, nos dedicamos a proporcionar experiências incríveis.", linkSaibaMais: "/nossas-marcas-end/"},
    { index: 2, img: "assets/banner2.png", title: "Gente feliz brinda mais", description: "Acreditamos que a felicidade é essencial para construir um ambiente de trabalho excepcional.", linkSaibaMais: "/gente-feliz-brinda-mais/"},
    { index: 3, img: "assets/banner3.png", title: "Time de Estrelas", description: "Valorizamos a diversidade e sabemos que um time formado por pessoas diversas nos torna tão únicos quanto as nossas marcas.", linkSaibaMais: "/time-de-estrelas-end/"}
  ];

  return (
    <VStack as="main" minH="100vh" gap={0} >
      <VStack gap={0} position="relative">
        <Box w="100%">
          <Carousel.Root
            autoplay={{ delay: 2000 }}
            slideCount={items.length}
          >
            <Carousel.ItemGroup>
              {items.map((item, index) => (
                <Carousel.Item key={index} index={index}>
                  <Box w="100%" h="700px" position="relative">

                    <Image
                      src={item.img}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />

                    <Text
                      position="absolute"
                      top="50%"
                      color="white"
                      fontSize="4xl"
                      left="103px"
                      fontWeight="bold"
                    >
                      {item.title}
                    </Text>

                    <Text
                      position="absolute"
                      top="58%"
                      left="103px"
                      color="white"
                      fontSize="lg"
                      maxW="500px"
                      fontWeight="bold"
                    >
                      {item.description}
                    </Text>
                    <Button
                      position="absolute"
                      top="72%"
                      left="103px"
                      rounded={0}
                      bgColor="#205527"
                      color="white"
                      fontWeight="bold"
                      w="100px"
                      h="50px"
                    >
                      <a href={item.linkSaibaMais}>Saiba mais</a>
                    </Button>

                  </Box>
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>
          </Carousel.Root>
        </Box>

        <VStack as="section" w="100%" gap={0}>
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
              <ChakraLink asChild>
                <NextLink href="https://www.facebook.com/GrupoHEINEKENBr/">
                  <Icon boxSize="28px" color="white" cursor="pointer"><FaFacebook /></Icon>
                </NextLink>
              </ChakraLink>

              <ChakraLink asChild>
                <NextLink href="https://www.instagram.com/grupoheinekenbr/">
                  <Icon boxSize="28px" color="white" cursor="pointer"><FaInstagram /></Icon>
                </NextLink>
              </ChakraLink>

              <ChakraLink asChild>
                <NextLink href="https://www.linkedin.com/company/heineken/">
                  <Icon boxSize="28px" color="white" cursor="pointer"><FaLinkedinIn /></Icon>
                </NextLink>
              </ChakraLink>

              <ChakraLink asChild>
                <NextLink href="https://www.youtube.com/GrupoHEINEKENBr">
                  <Icon boxSize="28px" color="white" cursor="pointer"><FaYoutube /></Icon>
                </NextLink>
              </ChakraLink>

            </VStack>
          </HStack>
        </VStack>

        <HStack w="100%" h="500px" justify="center" bgColor="white">

          <HStack m="20px 20px 20px 20px" w="80%" gap="40px">

            <HStack w="16%" h="350px" position="relative">
              <ChakraImage h="100%" asChild >
                <NextImage
                  src={elasNaDirecao}
                  alt="..."
                />
              </ChakraImage>
              <VStack h="50%" w="100%" position="absolute">
                <Text fontSize="30px" fontWeight="extrabold">Grupo HEINEKEN abre vagas para o programa...</Text>
                <Text>Iniciativa gratuita busca ampliar a presença feminina na operação...</Text>
              </VStack>
            </HStack>

            <HStack w="16%" h="350px" position="relative">
              <ChakraImage h="100%" asChild>
                <NextImage
                  src={mambaWater}
                  alt="..."
                />
              </ChakraImage>
              <VStack h="50%" w="100%" position="absolute">
                <Text fontSize="30px" fontWeight="extrabold">Grupo HEINEKEN abre vagas para o programa...</Text>
                <Text>Iniciativa gratuita busca ampliar a presença feminina na operação...</Text>
              </VStack>
            </HStack>

            <HStack w="16%" h="350px" position="relative">
              <ChakraImage h="100%" asChild>
                <NextImage
                  src={spin}
                  alt="..."
                />
              </ChakraImage>
              <VStack h="50%" w="100%" position="absolute">
                <Text fontSize="30px" fontWeight="extrabold">Heineken Spin completa um ano, acumulando.</Text>
                <Text>Agricultura regenerativa: companhia prevê evitar um gasto estimado de $53m</Text>
              </VStack>
            </HStack>

            <VStack gap="40px" h="350px" w="50%">

              <HStack w="100%" h="155px" position="relative">
                <ChakraImage h="155px" asChild>
                  <NextImage
                    src={hubCidadania}
                    alt="..."
                  />
                </ChakraImage>
                <VStack h="50%" w="100%" position="absolute">
                  <Text fontSize="30px" fontWeight="extrabold">Consumo consciente: parceria entre Artac...</Text>
                  <Text>Após apoiar mais de 7mil pessoas em Jacareí e Araraquara(SP), o programa...</Text>
                </VStack>
              </HStack>

              <HStack w="100%" h="155px" position="relative">
                <ChakraImage h="155px" w="100%" asChild>
                  <NextImage
                    src={passosLink}
                    alt="..."
                  />
                </ChakraImage>
                <VStack h="50%" w="100%" position="absolute">
                  <Text fontSize="30px" fontWeight="extrabold">Grupo HEINEKEN avança na industrialização...</Text>
                  <Text>Principal atividade será a produção das marcas Heineken e Amstel</Text>
                </VStack>
              </HStack>
            </VStack>

          </HStack>
        </HStack>
        <VStack as="section" w="100%" gap={0}>
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
                  <ChakraLink asChild>
                    <NextLink href="/times-de-estrelas-end/">
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
                    </NextLink>
                  </ChakraLink>
                </VStack>
              </VStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      <Button
        bg="#003802aa"
        color="white"
        fontWeight="bold"
        h="55px"
        w="155px"
        position="fixed"
        bottom="30px"
        left="90px"
        zIndex="9999"
        rounded={0}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <LuChevronUp />
        Voltar ao topo
      </Button>
    </VStack >
  )
}
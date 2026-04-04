import {
  Box,
  Link as ChakraLink,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaUser,
  FaYoutube
} from "react-icons/fa";
import IconNavHeader from "./home/icon-nav-heaver";

export default function Header() {
  const imageHeineken =
    "https://www.heinekenbrasil.com.br/media/m1db2dbs/logocolorido.svg";

  return (
    <Box as="header" w="100%" bg="white">

      <Flex justify="center">
        <Flex
          w="100%"
          maxW="90%"
          align="center"
          justify="space-between"
          alignItems="center"
        >

          <ChakraLink asChild>
            <NextLink href="/">
              <Image src={imageHeineken} alt="Heineken" w="10rem" mt="0.5rem" />
            </NextLink>
          </ChakraLink>

          <HStack gap="1.25rem" mt="0.5rem" mr="0.5rem">

            <ChakraLink asChild>
              <NextLink href="https://www.facebook.com/GrupoHEINEKENBr/">
                <Icon color="#1f5c2c"><FaFacebook size="1.30rem" /></Icon>
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="https://www.instagram.com/grupoheinekenbr/">
                <Icon color="#1f5c2c"><FaInstagram size="1.30rem" /></Icon>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="https://www.linkedin.com/company/heineken/">
                <Icon color="#1f5c2c"><FaLinkedinIn size="1.30rem" /></Icon>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="https://www.youtube.com/GrupoHEINEKENBr">
                <Icon color="#1f5c2c"><FaYoutube size="1.30rem" /></Icon>
              </NextLink>
            </ChakraLink>

            <IconButton
              aria-label="User"
              variant="outline"
              borderRadius="full"
              size="sm"
            >
              <FaUser size="0.625rem" />
            </IconButton>

            <IconButton
              aria-label="Search"
              bg="#1f5c2c"
              color="white"
              _hover={{ bg: "#257c39" }}
              rounded={0}
              size="sm"
            >
              <FaSearch size="0.625rem" />
            </IconButton>
          </HStack>
        </Flex>
      </Flex>

      <Flex justify="center" mt="0.625rem">
        <Flex
          w="100%"
          maxW="90%"
          pl="0.75rem"
        >
          <HStack
            gap="1.75rem"
            fontSize="14px"
            color="#1f5c2c"
            fontWeight="500"
            p="8px"
          >
            <ChakraLink asChild>
              <NextLink href="/sobre-nos/">
                <IconNavHeader text="Sobre nós" />
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="/time-de-estrelas/">
                <IconNavHeader text="Time de Estrelas" />
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="/esg/">
                <IconNavHeader text="ESG" />
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="/pega-leve/">
                <IconNavHeader text="Pega Leve" />
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="/heineken-spin/">
                <IconNavHeader text="Spin" />
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="/inside-the-star/">
                <IconNavHeader text="Inside the Star" />
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="/noticias/">
                <IconNavHeader text="Notícias" />
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="https://www.heinekenbrasil.com.br/">
                <IconNavHeader text="Universidade HNK" />
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="/contato/">
                <IconNavHeader text="Fale conosco" />
              </NextLink>
            </ChakraLink>
          </HStack>
        </Flex>
      </Flex>
    </Box >
  );
}
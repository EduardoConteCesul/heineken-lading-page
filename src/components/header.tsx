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
          maxW="1350px"
          align="center"
          justify="space-between"
          px="24px"
          pt="8px"
        >

          <ChakraLink asChild>
            <NextLink href="/">
              <Image src={imageHeineken} alt="Heineken" maxW="160px" mb="8px" />
            </NextLink>
          </ChakraLink>

          <HStack gap="14px" mb="8px">

            <ChakraLink asChild>
              <NextLink href="https://www.facebook.com/GrupoHEINEKENBr/">
                <Icon color="#1f5c2c" size="md"><FaFacebook /></Icon>
              </NextLink>
            </ChakraLink>

            <ChakraLink asChild>
              <NextLink href="https://www.instagram.com/grupoheinekenbr/">
                <Icon color="#1f5c2c" size="md"><FaInstagram /></Icon>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="https://www.linkedin.com/company/heineken/">
                <Icon color="#1f5c2c" size="md"><FaLinkedinIn /></Icon>
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="https://www.youtube.com/GrupoHEINEKENBr">
                <Icon color="#1f5c2c" size="md"><FaYoutube /></Icon>
              </NextLink>
            </ChakraLink>

            <IconButton
              aria-label="User"
              size="sm"
              variant="outline"
              borderRadius="full"
            >
              <FaUser />
            </IconButton>

            <IconButton
              aria-label="Search"
              size="sm"
              bg="#1f5c2c"
              color="white"
              _hover={{ bg: "#257c39" }}
            >
              <FaSearch />
            </IconButton>
          </HStack>
        </Flex>
      </Flex>

      <Flex justify="center">
        <Flex
          w="100%"
          maxW="1350px"
          align="center"
          px="24px"
        >
          <HStack
            gap="28px"
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
    </Box>
  );
}
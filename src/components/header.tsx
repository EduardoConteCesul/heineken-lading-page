import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image
} from "@chakra-ui/react";
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

          <Image src={imageHeineken} alt="Heineken" maxW="160px" mb="8px" />

          <HStack gap="14px" mb="8px">
            <Icon color="#1f5c2c" size="md"><FaFacebook /></Icon>
            <Icon color="#1f5c2c" size="md"><FaInstagram /></Icon>
            <Icon color="#1f5c2c" size="md"><FaLinkedinIn /></Icon>
            <Icon color="#1f5c2c" size="md"><FaYoutube /></Icon>

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
            <IconNavHeader text="Sobre nós" />
            <IconNavHeader text="Time de Estrelas" />
            <IconNavHeader text="ESG" />
            <IconNavHeader text="Spin" />
            <IconNavHeader text="Inside the Star" />
            <IconNavHeader text="Notícias" />
            <IconNavHeader text="Universidade HNK" />
            <IconNavHeader text="Fale conosco" />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}
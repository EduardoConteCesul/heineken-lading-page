import {
  HStack,
  VStack,
  Text,
  Link as ChakraLink,
  Icon,
  Image
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import IconNavFooter from "./home/icon-nav-footer";
import NextLink from "next/link";
import TextLink from "./home/text-link";

export default function Footer() {
  const logo =
    "https://www.heinekenbrasil.com.br/media/m1db2dbs/logocolorido.svg";

  return (
    <VStack as="footer" gap={0} bgColor="white">

      <HStack w="100%" justify="center" px="24px" py="60px" flexDirection="column">
        <HStack
          w="100%"
          maxW="1350px"
          justify="space-between"
          align="flex-start"
          wrap="wrap"
          gap="40px"
        >
          <VStack align="flex-start" gap="16px">
            <Image src={logo} alt="Heineken" w="200px" />

            <HStack gap="12px" pt="40px" pl="20px">
              <ChakraLink asChild>
                <NextLink href="https://www.facebook.com/GrupoHEINEKENBr/">
                  <Icon color="#1f5c2c" boxSize={5}><FaFacebook /></Icon>
                </NextLink>
              </ChakraLink>

              <ChakraLink asChild>
                <NextLink href="https://www.instagram.com/grupoheinekenbr/">
                  <Icon color="#1f5c2c" boxSize={5}><FaInstagram /></Icon>
                </NextLink>
              </ChakraLink>

              <ChakraLink asChild>
                <NextLink href="https://www.linkedin.com/company/heineken/">
                  <Icon color="#1f5c2c" boxSize={5}><FaLinkedinIn /></Icon>
                </NextLink>
              </ChakraLink>

              <ChakraLink asChild>
                <NextLink href="https://www.youtube.com/GrupoHEINEKENBr">
                  <Icon color="#1f5c2c" boxSize={5}><FaYoutube /></Icon>
                </NextLink>
              </ChakraLink>

            </HStack>
          </VStack>

          <VStack align="flex-end" gap="10px">
            <Text color="#143619" fontSize={12}>HEINEKEN BRASIL</Text>

            <TextLink href="/sobre-nos/" text="Sobre Nós" />

            <TextLink href="/noticias/" text="Notícias" />

            <TextLink href="/sustentabilidade/" text="Sustentabilidade" />

            <TextLink href="https://www.heinekenbrasil.com.br/" text="Universidade HNK" />
          </VStack>

          <VStack align="flex-end" gap="10px">
            <Text color="#143619" fontSize={12}>AJUDA</Text>
            <TextLink href="/contato/" text="Contato" />

            <TextLink href="/time-de-estrelas/" text="Time de Estrelas" />

            <TextLink href="/revender/" text="Revender" />

            <TextLink href="/validador-de-boletos/" text="Validador de Boletos" />

            <TextLink href="/sem-fake-news/" text="Sem Fake News" />
          </VStack>

          <VStack align="flex-end" gap="10px">
            <Text color="#143619" fontSize={12}>POLÍTICAS</Text>
            <TextLink href="/informacoes-legais/" text="Informações Legais" />

            <TextLink href="/como-fazemos-negocios/" text="Como fazemos negócios" />

            <TextLink href="/como-fazemos-negocios/" text="Como fazemos negócios" />
          </VStack>

        </HStack>
        <HStack maxW="1350px" w="100%" flexDirection="column" align="left">
          <Text color="#2b7334" fontSize="md">SAC: 0800 888 1010</Text>
          <Text color="#2b7334" fontSize="md">(segunda à sexta-feira, das 08h às 16h)</Text>
        </HStack>
      </HStack>
      <HStack w="100%" justify="center" py="20px" bgColor="#f8f9fa">
        <HStack maxW="1350px" w="100%" justify="space-between">
          <HStack border="1px solid black" ml="100px">
            <Text color="#205527" fontSize="sm" fontWeight="medium" padding="5px 5px 5px 5px">
              Pege Leve na Bebida
            </Text>
          </HStack>
          <Text fontSize="sm" opacity={0.7} color="#2b7334">
            © HEINEKEN Brasil 2025
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
}
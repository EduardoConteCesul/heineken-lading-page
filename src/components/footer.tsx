import {
  HStack,
  VStack,
  Text,
  Link,
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

export default function Footer() {
  const logo =
    "https://www.heinekenbrasil.com.br/media/m1db2dbs/logocolorido.svg";

  return (
    <VStack as="footer" mt="80px" gap={0} bgColor="white">

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
              <Icon color="#1f5c2c" boxSize={5}><FaFacebook /></Icon>
              <Icon color="#1f5c2c" boxSize={5}><FaInstagram /></Icon>
              <Icon color="#1f5c2c" boxSize={5}><FaLinkedinIn /></Icon>
              <Icon color="#1f5c2c" boxSize={5}><FaYoutube /></Icon>
            </HStack>
          </VStack>

          <VStack align="flex-end" gap="10px">
            <Text color="#143619" fontSize={12}>HEINEKEN BRASIL</Text>
            <IconNavFooter text="Sobre Nós" />
            <IconNavFooter text="Notícias" />
            <IconNavFooter text="Sustentabilidade" />
            <IconNavFooter text="Universidade HNK" />
          </VStack>

          <VStack align="flex-end" gap="10px">
            <Text color="#143619" fontSize={12}>AJUDA</Text>
            <IconNavFooter text="Contato" />
            <IconNavFooter text="Time de Estrelas" />
            <IconNavFooter text="Revender" />
            <IconNavFooter text="Validador de Boletos" />
            <IconNavFooter text="Sem Fake News" />
          </VStack>

          <VStack align="flex-end" gap="10px">
            <Text color="#143619" fontSize={12}>POLÍTICAS</Text>
            <IconNavFooter text="Informações Legais" />
            <IconNavFooter text="Como fazemos negócios" />
            <IconNavFooter text="Como fazemos negócios" />
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
import { Text, VStack } from "@chakra-ui/react";

interface CardProps {
  title: string;
  img: string
}

export default function Card({ img, title }: CardProps) {
  return (
    <VStack
      position="relative"
      w="300px"
      h="350px"
      overflow="hidden"
      cursor="pointer"
    >
      {/* Imagem */}
      <VStack
        position="absolute"
        inset="0"
        bgImage={img}
        bgSize="cover"
        transition="0.4s"
        _groupHover={{
          transform: "scale(1.05)"
        }}
      />

      {/* Overlay escuro */}
      <VStack
        position="absolute"
        inset="0"
        bg="rgba(0,0,0,0.35)"
      />

      {/* Texto */}
      <VStack
        position="absolute"
        inset="0"
        justify="flex-end"
        align="flex-start"
        p="20px"
      >
        <Text
          color="white"
          fontSize="28px"
          fontWeight="700"
          lineHeight="32px"
          maxW="90%"
        >
          {title}
        </Text>
      </VStack>
    </VStack>
  );
}
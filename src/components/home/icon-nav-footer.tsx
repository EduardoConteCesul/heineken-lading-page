import { Text } from "@chakra-ui/react";

interface IconProps {
  text: string
}

export default function IconNavFooter({ text }: IconProps) {
  return (
    <Text color="#2b7334" fontSize="md">
      {text}
    </Text>
  )
}
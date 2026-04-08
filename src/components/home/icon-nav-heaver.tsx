import { Text } from "@chakra-ui/react";

interface IconProps {
  text: string
}

export default function IconNavHeader({ text }: IconProps) {
  return (
    <Text color="header.iconsHeader" fontSize="sm" fontWeight="medium">
      {text}
    </Text>
  )
}
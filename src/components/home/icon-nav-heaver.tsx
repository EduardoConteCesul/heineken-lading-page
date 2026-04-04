import { Text } from "@chakra-ui/react";

interface IconProps {
  text: string
}

export default function IconNavHeader({ text }: IconProps){
  return(
    <Text color="#205527" fontSize="sm" fontWeight="medium" textStyle="heineken">
      {text}
    </Text>
  )
}
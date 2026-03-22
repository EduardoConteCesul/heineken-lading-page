import { Link } from "@chakra-ui/react";

interface IconProps {
  text: string
}

export default function IconNavHeader({ text }: IconProps){
  return(
    <Link color="#205527" fontSize="md" fontWeight="medium">{text}</Link>
  )
}
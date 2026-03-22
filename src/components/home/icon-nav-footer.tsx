import { Link } from "@chakra-ui/react";

interface IconProps {
  text: string
}

export default function IconNavFooter({ text }: IconProps){
  return(
    <Link color="#2b7334" fontSize="md" >{text}</Link>
  )
}
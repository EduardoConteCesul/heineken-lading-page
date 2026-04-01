import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import IconNavFooter from "./icon-nav-footer";

interface TextLinkProps {
  href: string;
  text: string;
}
export default function TextLink({ href, text }: TextLinkProps) {
  return (
    <ChakraLink asChild>
      <NextLink href={href}>
        <IconNavFooter text={text} />
      </NextLink>
    </ChakraLink>
  )
}
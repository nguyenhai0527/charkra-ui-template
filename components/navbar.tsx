"use client";

import NextLink from "next/link";
import { Box, Container, Flex, Heading, Stack, Link } from "@chakra-ui/react";
import ColorModeToggle from "@/components/dark-mode-toggle";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
}

const LinkItem = ({ href, target, children, ...props }: LinkItemProps) => {
  const { theme } = useTheme();
  const pathName = usePathname();
  const active = pathName === href;
  const inactiveColor = theme === "light" ? "gray.800" : "whiteAlpha.900";
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? "teal.400" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = ({ path }: { path: string }) => {
  const { theme } = useTheme();
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={`${theme === "light" ? "white" : "gray.800"}`}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
    >
      <Container
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Logo
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {navbarItems.map((link) => (
            <LinkItem key={link.label} href={link.href} path={path}>
              {link.label}
            </LinkItem>
          ))}
        </Stack>
        <ColorModeToggle />
      </Container>
    </Box>
  );
};

const navbarItems = [
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default Navbar;

"use client";

import Link from "next/link";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/matching", label: "Matching" },
  { href: "/impact", label: "Impact" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <Box borderBottomWidth="1px" bg="white" position="sticky" top={0} zIndex={20}>
      <Flex maxW="1200px" mx="auto" px={4} py={3} justify="space-between" align="center" wrap="wrap" gap={2}>
        <Heading size="md">SkillBridge Local</Heading>
        <Flex gap={2} wrap="wrap">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link key={link.href} href={link.href}>
                <Button size="sm" variant={active ? "solid" : "outline"} colorPalette="blue">
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
}

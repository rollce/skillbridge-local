import Link from "next/link";
import { Badge, Box, Button, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="6xl" py={8}>
      <Box bg="white" borderWidth="1px" borderRadius="2xl" p={{ base: 5, md: 8 }} boxShadow="sm">
        <Badge colorPalette="blue" mb={3}>REAL PROBLEM: LOCAL VOLUNTEER MISMATCH</Badge>
        <Heading as="h1" size="2xl" lineHeight="1.1">Match people to community needs by skills and available time</Heading>
        <Text mt={3} color="gray.600" maxW="3xl">
          SkillBridge addresses a common local problem: nonprofits have tasks, people want to help,
          but matching is slow and random. This product creates structured, skill-based recommendations.
        </Text>
        <Flex gap={2} mt={4} wrap="wrap">
          <Link href="/opportunities"><Button colorPalette="blue">View Opportunities</Button></Link>
          <Link href="/matching"><Button variant="outline">Run Matching</Button></Link>
          <Link href="/impact"><Button variant="subtle">See Impact</Button></Link>
        </Flex>
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={3} mt={4}>
        {[
          ["Active opportunities", "24"],
          ["Local organizations", "9"],
          ["Match accuracy", "87%"],
          ["Hours coordinated", "312h"],
        ].map(([label, value]) => (
          <Box key={label} bg="white" borderWidth="1px" borderRadius="lg" p={4}>
            <Text color="gray.500" fontSize="sm">{label}</Text>
            <Heading size="lg" mt={1}>{value}</Heading>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

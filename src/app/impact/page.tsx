import { Badge, Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function ImpactPage() {
  return (
    <Container maxW="6xl" py={8}>
      <Heading size="xl">Impact dashboard</Heading>
      <Text color="gray.600" mt={2}>
        Quantifies outcomes for people, organizations, and neighborhoods.
      </Text>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={3} mt={4}>
        {[
          ["Volunteer hours delivered", "312h", "green"],
          ["People directly supported", "740", "blue"],
          ["Organizations onboarded", "9", "purple"],
          ["Pending requests resolved", "81%", "orange"],
        ].map(([label, value, color]) => (
          <Box key={label} bg="white" borderWidth="1px" borderRadius="lg" p={4}>
            <Badge colorPalette={color as "green"}>Community KPI</Badge>
            <Text color="gray.500" mt={2} fontSize="sm">{label}</Text>
            <Heading size="lg" mt={1}>{value}</Heading>
          </Box>
        ))}
      </SimpleGrid>

      <Box bg="white" borderWidth="1px" borderRadius="lg" p={4} mt={4}>
        <Heading size="md">Outcome narrative</Heading>
        <Text mt={2} color="gray.700">
          By matching volunteers based on skills and weekly time limits, SkillBridge reduces churn and
          increases successful task completion across local organizations.
        </Text>
      </Box>
    </Container>
  );
}

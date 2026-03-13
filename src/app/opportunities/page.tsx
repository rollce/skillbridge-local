"use client";

import { Badge, Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Opportunity {
  id: string;
  title: string;
  organization: string;
  hours: number;
  skills: string[];
  impact: string;
}

export default function OpportunitiesPage() {
  const [items, setItems] = useState<Opportunity[]>([]);

  useEffect(() => {
    fetch("/api/opportunities")
      .then((res) => res.json())
      .then((payload) => setItems(payload.opportunities ?? []));
  }, []);

  return (
    <Container maxW="6xl" py={8}>
      <Heading size="xl">Open opportunities</Heading>
      <Text color="gray.600" mt={2}>Browse tasks that solve real community needs this week.</Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3} mt={4}>
        {items.map((item) => (
          <Box key={item.id} bg="white" borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md">{item.title}</Heading>
            <Text mt={1} color="gray.600">{item.organization}</Text>
            <Text mt={2}>Time: {item.hours}h/week</Text>
            <Text mt={1}>Impact: {item.impact}</Text>
            <Stack direction="row" mt={2} wrap="wrap">
              {item.skills.map((skill) => (
                <Badge key={skill} colorPalette="blue" variant="subtle">{skill}</Badge>
              ))}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

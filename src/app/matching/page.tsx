"use client";

import { Box, Button, Container, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Match {
  id: string;
  title: string;
  organization: string;
  score: number;
  impact: string;
  hours: number;
}

export default function MatchingPage() {
  const [skills, setSkills] = useState("teaching, communication, math");
  const [maxHours, setMaxHours] = useState(3);
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState("");

  async function runMatching() {
    setError("");
    const response = await fetch("/api/match", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skills, maxHours }),
    });

    const payload = await response.json();

    if (!response.ok) {
      setError(payload.error ?? "Unable to match now");
      setMatches([]);
      return;
    }

    setMatches(payload.matches ?? []);
  }

  return (
    <Container maxW="5xl" py={8}>
      <Heading size="xl">Skill-to-impact matching</Heading>
      <Text color="gray.600" mt={2}>Enter your skills and time budget to get the best-fit opportunities.</Text>

      <Box bg="white" borderWidth="1px" borderRadius="lg" p={4} mt={4}>
        <Stack>
          <Box>
            <Text fontWeight="medium" mb={1}>Skills (comma-separated)</Text>
            <Input value={skills} onChange={(e) => setSkills(e.target.value)} />
          </Box>
          <Box>
            <Text fontWeight="medium" mb={1}>Max hours per week</Text>
            <Input type="number" min={1} max={20} value={maxHours} onChange={(e) => setMaxHours(Number(e.target.value))} />
          </Box>
          <Button colorPalette="blue" onClick={runMatching}>Run match</Button>
        </Stack>
      </Box>

      {error ? (
        <Box mt={3} borderWidth="1px" borderColor="red.300" bg="red.50" color="red.700" p={3} borderRadius="md">
          {error}
        </Box>
      ) : null}

      <Stack mt={4}>
        {matches.map((match) => (
          <Box key={match.id} bg="white" borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md">{match.title}</Heading>
            <Text color="gray.600">{match.organization}</Text>
            <Text mt={1}>Hours: {match.hours}h/week</Text>
            <Text>Match score: {match.score}</Text>
            <Text color="gray.700" mt={1}>Impact: {match.impact}</Text>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

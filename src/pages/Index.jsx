import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={8} align="center" minHeight="100vh" justify="center">
      <Heading as="h1" size="2xl">
        Texas Hold'em
      </Heading>
      <Text fontSize="xl">A classic poker game</Text>
      <Button colorScheme="blue" size="lg">
        Start Game
      </Button>
      <Box as="footer" mt="auto" py={4}>
        Created by GPT Engineer
      </Box>
    </VStack>
  );
};

export default Index;

import { VStack, HStack, Box, Text } from "@chakra-ui/react";

const Player = ({ cards, chips }) => {
  return (
    <VStack spacing={4}>
      <HStack spacing={4}>
        {cards.map((card, index) => (
          <Box key={index} borderWidth={1} borderRadius="md" p={4}>
            {card}
          </Box>
        ))}
      </HStack>
      <Text>Chips: {chips}</Text>
    </VStack>
  );
};

export default Player;

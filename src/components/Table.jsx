import { HStack, Box } from "@chakra-ui/react";

const Table = ({ communityCards }) => {
  return (
    <HStack spacing={4}>
      {communityCards.map((card, index) => (
        <Box key={index} borderWidth={1} borderRadius="md" p={4}>
          {card}
        </Box>
      ))}
    </HStack>
  );
};

export default Table;

import { useState } from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import Deck from "../utils/deck";
import Table from "../components/Table";
import Player from "../components/Player";

const Index = () => {
  const [gameState, setGameState] = useState({
    deck: new Deck(),
    communityCards: [],
    playerHand: [],
    aiHand: [],
    potSize: 0,
  });

  const startGame = () => {
    const deck = new Deck();
    deck.shuffle();
    const playerHand = [deck.drawCard(), deck.drawCard()];
    const aiHand = [deck.drawCard(), deck.drawCard()];
    setGameState({ ...gameState, deck, playerHand, aiHand });
  };

  return (
    <VStack spacing={8} align="center" minHeight="100vh">
      <Heading as="h1" size="2xl">
        Texas Hold'em
      </Heading>
      {gameState.playerHand.length === 0 ? (
        <>
          <Text fontSize="xl">A classic poker game</Text>
          <Button colorScheme="blue" size="lg" onClick={startGame}>
            Start Game
          </Button>
        </>
      ) : (
        <>
          <Table communityCards={gameState.communityCards} />
          <Player cards={gameState.playerHand} chips={1000} />
        </>
      )}
      <Box as="footer" mt="auto" py={4}>
        Created by GPT Engineer
      </Box>
    </VStack>
  );
};

export default Index;

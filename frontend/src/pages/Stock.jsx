import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  SimpleGrid,
  ChakraProvider,
  extendTheme,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  HStack,
} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});

const generateRandomDataPoint = (min, max) => {
  return Math.random() * (max - min) + min;
};

const Stock = () => {
  const [balance, setBalance] = useState(10000);
  const [stocks, setStocks] = useState([
    // your stock data
    { id: "AAPL", name: "Apple Inc.", price: 150.25 },
    { id: "GOOGL", name: "Alphabet Inc.", price: 2765.45 },
    { id: "MSFT", name: "Microsoft Corporation", price: 305.52 }, 
    { id: "JPM", name: "JPMorgan Chase & Co.", price: 145.70 },
    { id: "TSLA", name: "Tesla, Inc.", price: 735.72 },
    { id: "AMZN", name: "Amazon.com, Inc.", price: 3349.63 },
    { id: "FB", name: "Meta Platforms, Inc.", price: 330.45 },
    { id: "NFLX", name: "Netflix, Inc.", price: 610.20 },
    { id: "NVDA", name: "NVIDIA Corporation", price: 278.90 },
    { id: "PYPL", name: "PayPal Holdings, Inc.", price: 230.75 },
    { id: "INTC", name: "Intel Corporation", price: 54.60 },
    { id: "AMD", name: "Advanced Micro Devices, Inc.", price: 123.15 },
    { id: "V", name: "Visa Inc.", price: 250.80 },
    { id: "GS", name: "The Goldman Sachs Group, Inc.", price: 410.35 },
    { id: "DIS", name: "The Walt Disney Company", price: 175.25 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedStocks = stocks.map((stock) => ({
        ...stock,
        prevPrice: stock.price, // Store previous price
        price: stock.price + generateRandomDataPoint(-10, 10),
      }));
      setStocks(updatedStocks);
    }, 10000);

    return () => clearInterval(interval);
  }, [stocks]);

  const buyStock = (stock) => {
    if (balance >= stock.price) {
      setBalance(balance - stock.price);
      // Implement buy logic here
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box p={6}>
        <Text fontSize="2xl" mb={4}>
          Balance: ${balance.toFixed(2)}
        </Text>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          {stocks.map((stock) => (
            <Box
              key={stock.id}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              bg="white"
            >
              <Text fontSize="xl" mb={2}>
                {stock.name}
              </Text>
              <HStack align="center">
                <Stat>
                  <StatLabel>Price</StatLabel>
                  <StatNumber>${stock.price.toFixed(2)}</StatNumber>
                </Stat>
                <Box
                  p={1}
                  bg={stock.price > stock.prevPrice ? "green.100" : "red.100"}
                  borderColor={stock.price > stock.prevPrice ? "green.500" : "red.500"}
                  borderWidth="1px"
                  borderRadius="lg"
                  roundedLeft="full"
                  roundedRight="full"
                >
                  <HStack spacing={1} align="center">
                    <Stat>
                    <StatArrow
                      type={stock.price > stock.prevPrice ? "increase" : "decrease"}
                      color={stock.price > stock.prevPrice ? "green.500" : "red.500"}
                    />
                    <Box as="span" fontSize="sm" fontWeight="bold">
                      {(((stock.price - stock.prevPrice) / stock.prevPrice) * 100).toFixed(2)}%
                    </Box>
                    </Stat>
                  </HStack>
                </Box>
              </HStack>
              <Button
                     colorScheme="blue"
                    _hover={{ bg: "#b6c5fa ", color: "white" }}
                        bg="blue.500"
                        color="white"
                        onClick={() => buyStock(stock)}
>
                        Buy {stock.name}
</Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
};

export default Stock;


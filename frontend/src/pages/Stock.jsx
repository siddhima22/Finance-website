import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  ChakraProvider,
  extendTheme,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import StockChangeIndicator from "./StockChangeIndicator";

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

const generateDummyChartData = () => {
  const dummyData = [];
  for (let i = 0; i < 30; i++) {
    dummyData.push({
      time: `-${30 - i} mins`,
      price: 150 + generateRandomDataPoint(-15, 15),
    });
  }
  return dummyData.reverse();
};

const Stock = () => {
  const [balance, setBalance] = useState(
    () => Number(localStorage.getItem("balance")) || 10000
  );
  const [stocks, setStocks] = useState(() => {
    const storedValue = localStorage.getItem("objectArray");
    return storedValue
      ? JSON.parse(storedValue)
      : [
          // Indian stock data
          { id: "TCS", name: "Tata Consultancy Services", price: 3450.75 },
          { id: "HDFCBANK", name: "HDFC Bank", price: 1480.35 },
          { id: "RELIANCE", name: "Reliance Industries", price: 2500.90 },
          { id: "TATASTEEL", name: "Tata Steel", price: 150.45 },
          { id: "INFY", name: "Infosys Limited", price: 1785.20 },
          { id: "HDFC", name: "Housing Development Finance Corporation", price: 2800.60 },
          { id: "ICICIBANK", name: "ICICI Bank", price: 780.90 },
          { id: "HINDUNILVR", name: "Hindustan Unilever", price: 2450.30 },
          { id: "ITC", name: "ITC Limited", price: 210.75 },
          { id: "WIPRO", name: "Wipro Limited", price: 580.15 },
          { id: "BAJAJ-AUTO", name: "Bajaj Auto", price: 3200.95 },
          { id: "CIPLA", name: "Cipla Limited", price: 920.40 },
          { id: "LT", name: "Larsen & Toubro", price: 1685.75 },
          { id: "SBI", name: "State Bank of India", price: 450.35 },
          { id: "HEROMOTOCO", name: "Hero MotoCorp", price: 2650.10 },
          { id: "HCLTECH", name: "HCL Technologies", price: 1105.25 },
          { id: "KOTAKBANK", name: "Kotak Mahindra Bank", price: 2050.50 },
          // Add more Indian stocks here
        ];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [chartData, setChartData] = useState(generateDummyChartData());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedStocks = stocks.map((stock) => ({
        ...stock,
        prevPrice: stock.price,
        price: stock.price + generateRandomDataPoint(-10, 10),
      }));
      setStocks(updatedStocks);

      const newPrice = stocks[0].price + generateRandomDataPoint(-15, 15);
      const updatedChartData = [
        ...chartData.slice(1),
        { time: "0 mins", price: newPrice },
      ];

      setChartData(updatedChartData);
    }, 10000);

    return () => clearInterval(interval);
  }, [stocks, chartData]);

  const handleModalToggle = (stock) => {
    setSelectedStock(stock);
    setIsModalOpen(!isModalOpen);
  };

  const buyStock = (stock) => {
    if (balance >= stock.price) {
      setBalance(balance - stock.price);
      // Implement buy logic here
      const updatedStocks = stocks.map((s) => {
        if (s.id === stock.id) {
          return { ...s, quantity: (s.quantity || 0) + 1 };
        }
        return s;
      });
      setStocks(updatedStocks);
    }
  };

  const sellStock = (stock) => {
    if (stock.quantity > 0) {
      setBalance(balance + stock.price);
      // Implement sell logic here
      const updatedStocks = stocks.map((s) => {
        if (s.id === stock.id) {
          return { ...s, quantity: s.quantity - 1 };
        }
        return s;
      });
      setStocks(updatedStocks);
    }
  };

  useEffect(() => {
    localStorage.setItem("balance", balance.toString());
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("stocks", JSON.stringify(stocks));
  }, [stocks]);

  useEffect(() => {
    // Code to run when the component mounts (at the start)

    const intervalId = setInterval(() => {
      const updatedStocks = stocks.map((stock) => ({
        ...stock,
        prevPrice: stock.price, // Store previous price
        price: stock.price + generateRandomDataPoint(-10, 10),
      }));
      setStocks(updatedStocks);
      console.log("This runs every 1 second.");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box p={6}>
        <Text fontSize="2xl" mb={4}>
          Balance: ${balance.toFixed(2)}
        </Text>
        <Table variant="simple" overflowX="auto" size={"sm"}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Change</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {stocks.map((stock) => (
              <Tr key={stock.id}>
                <Td>{stock.name}</Td>
                <Td>${stock.price.toFixed(2)}</Td>
                <Td>
                  {typeof stock.price === "number" &&
                  typeof stock.prevPrice === "number" ? (
                    <StockChangeIndicator stock={stock} />
                  ) : (
                    <></>
                  )}
                </Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    _hover={{ bg: "#b6c5fa", color: "white" }}
                    bg="blue.500"
                    color="white"
                    onClick={() => buyStock(stock)}
                  >
                    Buy
                  </Button>
                  <Button
                    colorScheme="red"
                    _hover={{ bg: "#ffa0a0", color: "white" }}
                    bg="red.500"
                    color="white"
                    onClick={() => sellStock(stock)}
                  >
                    Sell
                  </Button>
                  <Button
                    colorScheme="teal"
                    _hover={{ bg: "#b6c5fa", color: "white" }}
                    bg="teal.500"
                    color="white"
                    onClick={() => handleModalToggle(stock)}
                  >
                    Stats
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {selectedStock && (
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedStock.name} Statistics</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontSize="xl" mb={2}>
                  {selectedStock.name}
                </Text>
                <AreaChart
                  width="100%" // Make the chart width responsive
                  height={200} // You can adjust the height as needed
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="time" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#8884d8"
                    fill={(props) =>
                      props.payload.price > props.payload.prevPrice
                        ? "green"
                        : "red"
                    }
                  />
                </AreaChart>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default Stock;

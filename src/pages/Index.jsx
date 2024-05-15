import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Box, Image, IconButton, Divider } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Simulate search results
    setResults([
      { id: 1, name: "Pizza Place", type: "Restaurant", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaXp6YXxlbnwwfHx8fDE3MTU3NTU0OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
      { id: 2, name: "Sushi Joint", type: "Restaurant", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdXNoaXxlbnwwfHx8fDE3MTU3NTU0OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" },
      { id: 3, name: "Local Grocery", type: "Supermarket", image: "https://images.unsplash.com/photo-1714138667579-d085b8bf1d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmV8ZW58MHx8fHwxNzE1NzU1NDkzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    ]);
  };

  return (
    <Container centerContent maxW="container.lg" py={8}>
      <VStack spacing={6} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          One-Stop Delivery Shop
        </Text>
        <HStack width="100%" spacing={4}>
          <Input placeholder="Search for restaurants, supermarkets, etc." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        <Divider />
        <VStack spacing={4} width="100%">
          {results.map((result) => (
            <Box key={result.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
              <HStack spacing={4}>
                <Image src={result.image} alt={result.name} boxSize="100px" objectFit="cover" />
                <VStack align="start" spacing={1}>
                  <Text fontSize="xl" fontWeight="bold">
                    {result.name}
                  </Text>
                  <Text>{result.type}</Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
      <Divider my={8} />
      <VStack spacing={6} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Key Features
        </Text>
        <HStack spacing={8} width="100%" justifyContent="space-around">
          <VStack>
            <FaSearch size="2em" />
            <Text>Search Power</Text>
          </VStack>
          <VStack>
            <FaShoppingCart size="2em" />
            <Text>Order Up!</Text>
          </VStack>
          <VStack>
            <FaMapMarkerAlt size="2em" />
            <Text>Delivery Tracker</Text>
          </VStack>
          <VStack>
            <FaCreditCard size="2em" />
            <Text>Payment Made Easy</Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;

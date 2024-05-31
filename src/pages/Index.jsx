import React, { useState } from "react";
import { Container, Heading, VStack, HStack, Input, Select, Button, Table, Thead, Tbody, Tr, Th, Td, Box, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";

const dietData = [
  { name: "Oatmeal", veg: "Veg", protein: 5, carbs: 27, calories: 150, fat: 3, region: "North America", quantity: "1 bowl", diseases: "Diabetes" },
  { name: "Chicken Salad", veg: "Non-Veg", protein: 20, carbs: 10, calories: 200, fat: 5, region: "Europe", quantity: "1 plate", diseases: "Heart Disease" },
  // Add more diet data here
];

const DietPlanSection = ({ title }) => {
  const [filters, setFilters] = useState({ protein: "", fat: "", calories: "", carbs: "", veg: "", diseases: "", region: "" });
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleReset = () => {
    setFilters({ protein: "", fat: "", calories: "", carbs: "", veg: "", diseases: "", region: "" });
  };

  const handleSelectDish = (dish) => {
    setSelectedDishes((prev) => [...prev, dish]);
  };

  const filteredData = dietData.filter((dish) => {
    return (filters.protein === "" || dish.protein >= filters.protein) && (filters.fat === "" || dish.fat <= filters.fat) && (filters.calories === "" || dish.calories <= filters.calories) && (filters.carbs === "" || dish.carbs <= filters.carbs) && (filters.veg === "" || dish.veg === filters.veg) && (filters.diseases === "" || dish.diseases === filters.diseases) && (filters.region === "" || dish.region === filters.region);
  });

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        {title}
      </Heading>
      <Box className="filter-container" mb={4}>
        <HStack spacing={4}>
          <Input placeholder="Protein (g)" name="protein" value={filters.protein} onChange={handleFilterChange} />
          <Input placeholder="Fat (g)" name="fat" value={filters.fat} onChange={handleFilterChange} />
          <Input placeholder="Calories" name="calories" value={filters.calories} onChange={handleFilterChange} />
          <Input placeholder="Carbohydrates (g)" name="carbs" value={filters.carbs} onChange={handleFilterChange} />
          <Select placeholder="Veg/Non-Veg" name="veg" value={filters.veg} onChange={handleFilterChange}>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </Select>
          <Select placeholder="Diseases" name="diseases" value={filters.diseases} onChange={handleFilterChange}>
            <option value="Diabetes">Diabetes</option>
            <option value="Heart Disease">Heart Disease</option>
          </Select>
          <Select placeholder="Region of Origin" name="region" value={filters.region} onChange={handleFilterChange}>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
          </Select>
          <Button onClick={handleReset} className="reset-button">
            Reset
          </Button>
        </HStack>
      </Box>
      <Table className="diet-plan">
        <Thead>
          <Tr>
            <Th>Select</Th>
            <Th>Dish Name</Th>
            <Th>Veg/Non-Veg</Th>
            <Th>Protein (g)</Th>
            <Th>Carbohydrates (g)</Th>
            <Th>Calories</Th>
            <Th>Fat (g)</Th>
            <Th>Region of Origin</Th>
            <Th>Quantity</Th>
            <Th>Suitable for Diseases</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((dish, index) => (
            <Tr key={index}>
              <Td>
                <Button onClick={() => handleSelectDish(dish)}>Select</Button>
              </Td>
              <Td>{dish.name}</Td>
              <Td>{dish.veg}</Td>
              <Td>{dish.protein}</Td>
              <Td>{dish.carbs}</Td>
              <Td>{dish.calories}</Td>
              <Td>{dish.fat}</Td>
              <Td>{dish.region}</Td>
              <Td>{dish.quantity}</Td>
              <Td>{dish.diseases}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box className="report-container" mt={4}>
        <Heading as="h3" size="md">
          Selected Dishes
        </Heading>
        <Box id="selected-dishes-report">
          {selectedDishes.map((dish, index) => (
            <Text key={index}>{dish.name}</Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [allSelectedDishes, setAllSelectedDishes] = useState([]);

  const handleCombineReports = () => {
    // Combine all selected dishes from all sections
    const combinedDishes = []; // This should be populated with all selected dishes from all sections
    setAllSelectedDishes(combinedDishes);
    onOpen();
  };

  return (
    <Container centerContent maxW="container.xl" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1">Diet Plan</Heading>
        <DietPlanSection title="After Wake Up" />
        <DietPlanSection title="Breakfast" />
        <DietPlanSection title="Before Lunch" />
        <DietPlanSection title="Lunch" />
        <DietPlanSection title="Afternoon Snacks" />
        <DietPlanSection title="Before Dinner" />
        <DietPlanSection title="Dinner" />
        <DietPlanSection title="After Dinner" />
        <Button onClick={handleCombineReports}>Combine All Reports</Button>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Combined Report</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {allSelectedDishes.map((dish, index) => (
              <Text key={index}>{dish.name}</Text>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    Box,
    Button
  } from "@chakra-ui/react";

const SearchForm = ({submitMethod}) => {
    return (
        <FormControl onSubmit={submitMethod} id="Rover" isRequired display="flex" >
            <Box w="15rem" mr={8}>
                <FormLabel color="white" fontWeight="semibold">Rover</FormLabel>
                <Select id="rover" bg="white" color="black" placeholder="Select Rover">
                    <option>Curiosity</option>
                    <option>Opportunity</option>
                    <option>Spirit</option>
                </Select>
            </Box>

            <Box w="25rem" mr={8}>
                <FormLabel color="white" fontWeight="semibold">Camera</FormLabel>
                <Select bg="white" color="black" placeholder="Select Camera">
                    <option>Curiosity</option>
                    <option>Opportunity</option>
                    <option>Spirit</option>
                </Select>
            </Box>

            <Box w="10rem" mr={8}>
                <FormLabel color="white" fontWeight="semibold">SOL</FormLabel>
                <Select bg="white" color="black" placeholder="Select SOL">
                    <option>Curiosity</option>
                    <option>Opportunity</option>
                    <option>Spirit</option>
                </Select>
            </Box>
            <Button onClick={submitMethod} mt={8} colorScheme="red" variant="solid">Search</Button>
            
            
        </FormControl>
    );
};

export default SearchForm;

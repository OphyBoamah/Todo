import React from 'react';
import { Box, Container, Flex, Heading, Input, Text} from '@chakra-ui/react';

const Todotasks = ({todo, complete, clicked, deleteTask}) => {
  return (
    <Box mt={6}>
        <Flex align="center" justify="space-between" w="40%"mx="auto">
          <Text cursor="pointer" textDecoration={complete &&"line-through"} onClick={clicked}>{todo.task}</Text>
          <Flex color="#fff">
          <Box bg="orange.400" py={2} px={4} _hover={{ background: "orange.600" }} rounded="md">Star</Box>
          <Box bg="blue.400" py={2} px={4} _hover={{ background: "blue.600" }} ml={2} rounded="md">Edit</Box>
          <Box bg="red.400" py={2} px={4} _hover={{ background: "red.600" }} ml={2} rounded="md" onClick={deleteTask} cursor="pointer">Delete</Box>
          </Flex>
        </Flex>
      </Box>
  )
}

export default Todotasks

import './App.css';
import { Box, Container, Flex, Heading, Input, FormControl} from '@chakra-ui/react';
import Todotasks from './Todotasks';
import {useState} from 'react'


const todos = [
  {
    id: 1,
    task: 'Have my daily devotion'
  },
  {
    id: 2,
    task: 'Eat healthy breakfast'
  },
  {
    id: 3,
    task: 'Hangout with the squad'
  },
  {
    id: 4,
    task: 'Spend time with family'
  },
  {
    id: 5,
    task: 'Code, code, code again'
  },

]
function App() {
  
  const [complete, setComplete] = useState('');
  const [availableTasks, setAvailableTasks] = useState(todos);

  const clickComplete = (done) => {
    setComplete(done);
  }

  const deleteTask = (id) => {
    const todoTasks = availableTasks.filter(todo => todo.id !== id);
    setAvailableTasks(todoTasks); 
  }

  return (
    <Container maxW='6xl' py={20}>
      <Heading as="h1" fontSize="4xl" textAlign="center">
        My Todo List
      </Heading>
      <Flex align="center" justify="space-between" w="55%"mx="auto" mt={6}>
      <FormControl >
      <Input type="text" placeholder="Enter a todo..." size="lg" border="2px solid #000"/>
      </FormControl>
      <Box bg="green.400" color="#fff" py={2} px={4} ml={4} rounded="md">Add</Box>
      </Flex>
      <Box mt={10}>
        {availableTasks.map((todo)=>(
          <Todotasks todo={todo} complete={complete.id === todo.id} clicked={()=>clickComplete(todo)} deleteTask={()=>deleteTask(todo.id)} />
        ))}
      </Box>
    </Container>
  );
}

export default App;

import './App.css';
import { Box, Container, Flex, Heading, Input, FormControl, Button, Text} from '@chakra-ui/react';
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
  const [toggleTodo, setToggleTodo] = useState(false);
  const [inputValue, setInputValue] = useState({
    id: '',
    task:''
  })

  const clickComplete = (done) => {
    setComplete(done);
  }

  const deleteTask = (id) => {
    const todoTasks = availableTasks.filter(todo => todo.id !== id);
    setAvailableTasks(todoTasks); 
  }

  const showTodo = () => {
    setToggleTodo(true)
  }
  const hideTodo = () => {
    setToggleTodo(false)
  }

  const addTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: Math.random() * 10,
      task: inputValue.task,
    }
    setAvailableTasks([...availableTasks, newTask])
    setInputValue({
    id: '',
    task:''
  })
  }
  return (
    <Box>
      {toggleTodo && (<Box w="70%" bg="gray.100" py={20} mt={10} mx="auto">
        <Flex align="center" justify="center" bg="#fff" w={8} h={8} position="absolute" top={2} right={64} zIndex={10} fontWeight={800} rounded='sm' onClick={hideTodo} cursor="pointer" >X</Flex>
      <Heading as="h1" fontSize="4xl" textAlign="center">
        My Todo List
      </Heading>
      <Flex align="center" justify="space-between" w="55%"mx="auto" mt={6}>
      <FormControl >
            <Input type="text" placeholder="Enter a todo..." size="lg" border="2px solid #000" bg="#fff" name='task' value={inputValue.task} onChange={(event) => {
              setInputValue({ ...inputValue, task: event.target.value })
            }}/>
      </FormControl>
      <Box bg="green.400" color="#fff" py={2} px={4} ml={4} rounded="md" onClick={addTask} cursor="pointer">Add</Box>
      </Flex>
      <Box mt={10}>
        {availableTasks.map((todo)=>(
          <Todotasks todo={todo} complete={complete.id === todo.id} clicked={()=>clickComplete(todo)} deleteTask={()=>deleteTask(todo.id)} />
        ))}
      </Box>
    </Box>)}
      <Flex align="center" justify="center" mt={70} flexDir="column" textAlign="center" >
        <Heading as="h4" fontStyle="md" mb={8} display={toggleTodo && 'none'}>Hey... if you wish to check my todo, <br/> click the button below!</Heading>
        <Button bg="purple.400" py={2} px={4} _hover={{ background: "purple.600" }} w={60} h={14} rounded="md" color="#fff" onClick={showTodo} display={toggleTodo && 'none'}>
        Show Todo
      </Button>
      </Flex>
    </Box>

  );
}

export default App;

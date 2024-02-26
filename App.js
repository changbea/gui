import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Styled from 'styled-components/native'
import Counter from './components/Counter';
import Todo from './components/Todo';
import {TodoListContextProvider, TodoListContext} from './components/TodoListContext';
import WeatherView from './components/WeatherView';
import Navigator from './components/Navigator';
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom';
import CheckLogin from './components/CheckLogin';
import {Login, navigationOption} from './components/Login';
import Movies from './components/Movies';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

// const TodoListContext = createContext({
//   todoList: [],
//   addTodoList: (todo) => {},
//   removeTodoList: (index) => {},
// })

// const TodoListContextProvider = ({ children }) => {
//   const [todoList, setTodoList] = useState([]);
//   const addTodoList = (todo) => {
//     const list = [...todoList, todo];
//     setTodoList(list);
//   }
//   const removeTodoList = (index) => {
//     let list = [...todoList];
//     list.splice(index, 1);
//     setTodoList(list);
//   }
//   return(
//     <TodoListContext.Provider value={{todoList, addTodoList, removeTodoList, }}>
//       {children}
//     </TodoListContext.Provider>
//   )
// }

export default function App() {
  return (
    <Container>
      <Text>Sample</Text>
      <StatusBar style="auto" />
      {/* <Counter title='Counter' initValue={0} />
      <TodoListContextProvider>
        <Container>
          <Todo />
        </Container>
      </TodoListContextProvider> */}
      {/* <WeatherView /> */}
      {/* <Navigator navigation={{
        value: false,
      }}/> */}
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/checklogin' element={<CheckLogin navigation={{
              value: 'key',
            }} />}/>
            <Route path='/login' element={<Login navigation={{
              value: 'key',
            }} />}/>
            <Route path='/movies' element={<Movies navigation={{
            }} />}/>
          </Routes> 
        </BrowserRouter>
      </Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

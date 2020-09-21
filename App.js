import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/sreens/MainScreen';
import { TodoScreen } from './src/sreens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState('2');
  const [todos, setTodos] = useState([
    {id: '1', title: 'Выучить React Native'},
    {id: '2', title: 'Test test test'},
    {id: '3', title: 'Do homework'},
    {id: '4', title: 'test 1245 sfd'},
  ]);

  const addTodo = title => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  let content = (<MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />);

  if (todoId) {
    const selectrdTodo = todos.find((it) => it.id === todoId);
    content = (<TodoScreen todo={selectrdTodo} onRemove={removeTodo} goBack={() => setTodoId(null)} />);
  }

  return (
    <View>
      <Navbar title={'todo App'} />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

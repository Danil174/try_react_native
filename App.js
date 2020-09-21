import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([
    {id: '1', title: 'test'},
    {id: '2', title: 'Test'},
    {id: '3', title: 'test 123 sdf'},
    {id: '4', title: 'test 1245 sfd'},
    {id: '5', title: 'test 1245 sdddsf'},
    {id: '6', title: 'test 1245 435'},
    {id: '7', title: 'test 1245 243235'},
    {id: '8', title: 'test 1245 24234'},
    {id: '9', title: 'test 1245 24234'},
    {id: '10', title: 'test 1245 24234'},
    {id: '11', title: 'test 1245 24234'},
    {id: '12', title: 'test 1245 24234'},
    {id: '13', title: 'test 1245 24234'},
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

  return (
    <View>
      <Navbar title={'todo App'} />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => ( 
            <Todo 
              todo={item}
              onRemove={removeTodo}
            />
          )}
        />
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

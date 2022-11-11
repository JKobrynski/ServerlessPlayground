import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {listTodos} from '../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';
import {CreateTodoInput, ListTodosQuery, Todo} from '../../graphql-generated';
import {createTodo} from '../graphql/mutations';

export const HomeScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    try {
      const res = (await API.graphql(graphqlOperation(listTodos))) as {
        data: ListTodosQuery;
      };
      if (res.data.listTodos?.items) {
        // @ts-ignore
        setTodos(res.data.listTodos?.items);
      }
    } catch (err) {
      console.log('ERR', err);
    }
  };

  const addTodo = async () => {
    try {
      const todo: CreateTodoInput = {
        id: Math.random().toString(),
        name: `Todo ${Math.round(Math.random() * 10)}`,
        description: 'Description',
      };

      await API.graphql(graphqlOperation(createTodo, {input: todo}));
    } catch (err) {
      console.log('ERR', err);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={addTodo}>
          <Text style={styles.button}>Add todo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getTodos}>
          <Text style={styles.button}>Get todos</Text>
        </TouchableOpacity>
        <View>
          {todos.map(item => (
            <Text key={item.id}>{item.name}</Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 16,
  },
});

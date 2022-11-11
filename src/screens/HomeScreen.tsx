import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  useCreateTodoMutation,
  useListTodosQuery,
} from '../apollo/artifacts/resolvers-types';

export const HomeScreen = () => {
  const {data, refetch} = useListTodosQuery({
    onError: error => console.log('ERROR', error),
  });
  const [createTodo] = useCreateTodoMutation({
    onCompleted: res => {
      console.log('COMPLETED', res);
    },
    onError: error => {
      console.log('ERROR', error);
    },
  });

  const addTodo = async () => {
    await createTodo({
      variables: {
        input: {
          id: Math.random().toString(),
          name: `Todo ${Math.round(Math.random() * 100)}`,
          description: 'Todo description',
        },
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={addTodo}>
          <Text style={styles.button}>Add todo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => refetch()}>
          <Text style={styles.button}>Get todos</Text>
        </TouchableOpacity>
        <View>
          {data?.listTodos?.items.map(item => (
            <Text key={item?.id}>{item?.name}</Text>
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

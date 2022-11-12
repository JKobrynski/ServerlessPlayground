import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  TodoItemFragment,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useListTodosQuery,
  useTestLambdaQuery,
} from '../apollo/artifacts/resolvers-types';

export const HomeScreen = () => {
  const {data, refetch} = useListTodosQuery({
    onError: error => console.log('ERROR', error),
  });
  const [createTodo] = useCreateTodoMutation({
    onCompleted: () => {
      refetch();
    },
    onError: error => {
      console.log('ERROR', error);
    },
  });
  const [deleteTodo] = useDeleteTodoMutation({
    onCompleted: () => {
      refetch();
    },
    onError: error => {
      console.log('ERROR', error);
    },
  });
  const {data: lambdaData} = useTestLambdaQuery({
    variables: {
      message: 'Ogarniemy to stary',
    },
    onError: error => console.log('LAMBDA ERR', error.graphQLErrors),
  });

  console.log(lambdaData);

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

  const onDelete = async (item: TodoItemFragment | null) => {
    if (item) {
      await deleteTodo({
        variables: {
          input: {
            id: item.id,
          },
        },
      });
    }
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
            <View key={item?.id} style={styles.row}>
              <Text>{item?.name}</Text>
              <TouchableOpacity onPress={() => onDelete(item)}>
                <Text style={styles.x}>X</Text>
              </TouchableOpacity>
            </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingVertical: 6,
  },
  x: {
    color: 'red',
    fontWeight: '800',
    fontSize: 14,
  },
});

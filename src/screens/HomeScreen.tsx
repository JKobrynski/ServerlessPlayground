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
  useGetUserLazyQuery,
  useListTodosQuery,
} from '../apollo/artifacts/resolvers-types';
import {Auth} from 'aws-amplify';

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
  const [getUser, {data: userData}] = useGetUserLazyQuery({
    onError: error => console.log('ERROR', error),
  });

  React.useEffect(() => {
    Auth.currentAuthenticatedUser().then(res => {
      getUser({
        variables: {
          id: res.attributes.sub,
        },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTodo = async () => {
    try {
      await createTodo({
        variables: {
          input: {
            id: Math.random().toString(),
            name: `Todo ${Math.round(Math.random() * 100)}`,
            description: 'Todo description',
            owner: 'a618a19d-54ae-42a6-8264-d05434931a4a',
          },
        },
      });
    } catch (err) {
      console.log('[createTodo] ERROR', err);
    }
  };

  const onDelete = async (item: TodoItemFragment | null) => {
    if (item) {
      try {
        await deleteTodo({
          variables: {
            input: {
              id: item.id,
            },
          },
        });
      } catch (err) {
        console.log('[onDelete] ERROR', err);
      }
    }
  };

  console.log(data?.listTodos?.items.map(item => item?.owner));

  const onLogout = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log('ERR', err);
    }
  };

  const onDeleteUser = async () => {
    try {
      const res = await Auth.deleteUser();
      console.log('RES', res);
    } catch (err) {
      console.log('ERR', err);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>{userData?.getUser?.phoneNumber}</Text>
        <Text>{userData?.getUser?.email}</Text>
        <TouchableOpacity onPress={addTodo}>
          <Text style={styles.button}>Add todo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => refetch()}>
          <Text style={styles.button}>Get todos</Text>
        </TouchableOpacity>
        <View>
          {data?.listTodos?.items.map(item => (
            <View key={item?.id} style={styles.row}>
              <View style={styles.column}>
                <Text>{item?.name}</Text>
                <Text>{item?.user?.email}</Text>
              </View>
              <TouchableOpacity onPress={() => onDelete(item)}>
                <Text style={styles.x}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeleteUser}>
          <Text style={styles.logout}>Delete account</Text>
        </TouchableOpacity>
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
  column: {
    flexDirection: 'column',
  },
  x: {
    color: 'red',
    fontWeight: '800',
    fontSize: 14,
  },
  logout: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 16,
    color: 'red',
  },
});

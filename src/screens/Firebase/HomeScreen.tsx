import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

type User = {
  id: string;
  email: string;
  username: string;
};

export const HomeScreen = () => {
  const [user, setUser] = React.useState<User>();
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState<
    FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]
  >([]);

  const getUser = async () => {
    try {
      const res = await firestore()
        .collection('users')
        .where('id', '==', auth().currentUser?.uid)
        .get();
      setUser(res.docs[0].data() as User);
    } catch (err) {
      console.log('[getUser] err', err);
    }
  };

  const getTodos = async () => {
    try {
      const res = await firestore()
        .collection('todos')
        .where('owner', '==', auth().currentUser?.uid)
        .get();
      setTodos(res.docs);
    } catch (err) {
      console.log('[getTodos] err', err);
    }
  };

  React.useEffect(() => {
    getUser();
    getTodos();
  }, []);

  const onLogout = async () => {
    try {
      await auth().signOut();
    } catch (err) {
      console.log('[onLogout] err', err);
    }
  };

  const onDeleteUser = async () => {
    try {
      await auth().currentUser?.delete();
    } catch (err) {
      console.log('[onDeleteUser] err', err);
    }
  };

  const onAddTodo = async () => {
    try {
      await firestore().collection('todos').add({
        owner: auth().currentUser?.uid,
        name: todo,
      });
      await getTodos();
    } catch (err) {
      console.log('[onAddTodo] err', err);
    }
  };

  const onDelete = async (
    item: FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>,
  ) => {
    try {
      await firestore().collection('todos').doc(item.id).delete();
      await getTodos();
    } catch (err) {
      console.log('[onDelete] err', err);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>{user?.email}</Text>
        <Text>{user?.username}</Text>
        <TextInput
          value={todo}
          onChangeText={setTodo}
          placeholder="Todo"
          style={styles.input}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={onAddTodo}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
        <View>
          {todos.map(item => (
            <View key={item?.id} style={styles.row}>
              <View style={styles.column}>
                <Text>{item?.data()?.name}</Text>
                <Text>{item?.data()?.owner}</Text>
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
  input: {
    borderWidth: 1,
    width: '70%',
    padding: 12,
  },
});

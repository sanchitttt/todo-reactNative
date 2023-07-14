/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
  Button,
  Pressable
} from 'react-native';
import Intro from './components/Intro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category, { ValidCategories } from './components/Category';
import ThreeVerticalDots, { AddIcon } from './components/Icons';

const Stack = createNativeStackNavigator();

const mockData = [
  { id: 1, title: 'Complete Assignment', category: 'work', completed: false, due_at: '15-07-23' },
  { id: 2, title: 'Complete pmda[p', category: 'home', completed: false, due_at: '15-07-23' }
]


function App(): JSX.Element {
  const [todos, setTodos] = useState([]);
  // useEffect(() => {

  // }, []);
  const dueDate = 'Today at 3:43'
  const heading = 'Todos';
  return (
    <SafeAreaView>
      <View style={styles.root}>

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{heading}</Text>
        </View>
        <View style={styles.plusIconContainer}>
          <AddIcon />
        </View>
        <FlatList
          data={mockData}
          renderItem={({ item }) => {
            return <View style={styles.todoItem}>
              <View style={styles.todoLeft}>
                <Text style={styles.todoTitle}>
                  {item.title}
                </Text>
                <Text style={styles.todoDueDate}>{"Due at " + item.due_at}</Text>
              </View>
              <Category category={item.category as ValidCategories} />
              <View style={styles.editContainer}>
                <Pressable style={styles.editButton}>
                  <Text style={styles.editButtonText}>{"Edit"}</Text>
                </Pressable>
                <Pressable style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>{"Delete"}</Text>
                </Pressable>
              </View>
            </View>
          }}
        />
        <View style={styles.todoEditContainer}>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  plusIconContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  todoLeft: {
    display: 'flex',
    flexDirection: 'column',
    width: 160
  },
  heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  todoItem: {
    backgroundColor: '#363636',
    paddingBottom: 15,
    paddingTop: 15,
    marginVertical: 15,
    width: 350,
    display: 'flex',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10
  },
  todoRight: {
    width: 60,
    backgroundColor: '#809CFF',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  todoTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300'
  },
  // todoCategory: {
  //   color: 'white',
  //   fontSize: 20,
  // },
  todoDueDate: {
    color: '#AFAFAF'
  },
  editContainer: {
    width: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  editButton: {
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  todoEditContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%'
  }
})


export default App;

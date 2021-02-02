import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {findRepos} from '../redux/dashboard/actionCreator';
import {screenWidth} from '../helpers/config';
import {setTitle} from '../redux/dashboard/actionCreator';

export default function Header() {
  const dispatch = useDispatch();
  const {query, loading} = useSelector((state) => state.reposState);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={query}
          onChangeText={(value) => dispatch(setTitle(value))}
        />
      </View>
      <Button
        disabled={loading || query === ''}
        title="Search"
        onPress={() => dispatch(findRepos())}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  layout: {alignItems: 'center', justifyContent: 'center'},
  container: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    width: screenWidth,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  inputContainer: {
    width: screenWidth * 0.7,
    backgroundColor: '#dcdcdc',
    height: 40,
    paddingHorizontal: 5,
    justifyContent: 'center',
    borderRadius: 5,
  },
});

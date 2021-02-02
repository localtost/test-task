import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet from 'react-native-action-sheet';
import {screenWidth} from '../helpers/config';
import {useDispatch} from 'react-redux';
import {
  clearFilter,
  filterByForks,
  filterByStars,
} from '../redux/dashboard/actionCreator';
const FilterButton = () => {
  const dispatch = useDispatch();
  const options = ['Forks', 'Stars', 'Clear', 'Cancel'];

  const CANCEL_INDEX = 2;

  const onPress = () =>
    ActionSheet.showActionSheetWithOptions(
      {
        options: options,
        cancelButtonIndex: CANCEL_INDEX,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            return dispatch(filterByForks());
          case 1:
            return dispatch(filterByStars());
          case 2:
            return dispatch(clearFilter());
          default:
            return false;
        }
      },
    );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingLeft: 10,
  },
  result: {
    fontSize: 64,
    textAlign: 'center',
  },
  button: {
    width: screenWidth * 0.3,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});

export default FilterButton;

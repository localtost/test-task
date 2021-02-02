import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {screenWidth} from '../helpers/config';
import {findRepos, addPerPageItems} from '../redux/dashboard/actionCreator';
import ListItem from './ListItem';

export default function ItemsList({data}) {
  const dispatch = useDispatch();
  const renderItem = ({item}) => <ListItem el={item} />;
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={renderItem}
      onEndReachedThreshold={0.1}
      keyExtractor={(item) => item.node_id}
      onEndReached={() => {
        dispatch(addPerPageItems());
        dispatch(findRepos());
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    alignItems: 'center',
    marginBottom: 20,
  },
});

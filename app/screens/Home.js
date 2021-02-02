import React from 'react';
import {
  ActivityIndicator,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import ItemsList from '../components/ItemsList';
import Header from '../components/Header';
import FilterButton from '../components/Filters';
const Home = () => {
  const {loading, data} = useSelector((state) => state.reposState);
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      <Header />
      {data && data.length > 0 && <FilterButton />}
      {data !== '[]' && <ItemsList data={data} />}
      {loading && <ActivityIndicator size="small" color="black" />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
Home.options = {
  topBar: {
    visible: false,
  },
};
export default Home;

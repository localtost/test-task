import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {screenWidth} from '../helpers/config';
import {textTrim} from '../helpers/textTrim';
import {showModal} from '../navigation/navigation';

export default function ListItem({el: {full_name, html_url, owner}}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => showModal({uri: html_url})}>
        <Text style={styles.item}>{textTrim(full_name)}</Text>
        <Image style={styles.tinyLogo} source={{uri: owner.avatar_url}} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: screenWidth / 1.1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 10,
    height: 100,
    alignContent: 'center',
  },
  item: {
    color: 'blue',
    fontSize: 15,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {showModal} from '../navigation/navigation';
import {API_URL, screenWidth} from '../helpers/config';

export default function SocialButton({loading = false, uri, title}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => showModal({uri})}>
      <Text>{title}</Text>
      {loading && <ActivityIndicator color="black" />}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: screenWidth * 0.8,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
  },
});

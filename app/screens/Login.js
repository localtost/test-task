import React, {useEffect} from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {API_URL, screenWidth} from '../helpers/config';
import {useDispatch, useSelector} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {navigateToHome} from '../navigation/navigation';
import {onLogin} from '../redux/auth/actionCreators';
import SocialButton from '../components/SocialButton';

export default function Login() {
  const dispatch = useDispatch();
  const {auth, loading} = useSelector((state) => state.authState);
  useEffect(() => {
    Linking.addEventListener('url', handleOpenURL);
    return () => Linking.removeEventListener('url', handleOpenURL);
  }, []);
  const handleOpenURL = async (event) => {
    const code = event.url.replace(/.*?:\/\/.*=/g, '');
    Navigation.dismissModal('modal');
    dispatch(onLogin(code));
  };
  useEffect(() => {
    if (auth) {
      navigateToHome();
    }
  }, [auth]);
  return (
    <View style={styles.container}>
      <SocialButton
        loading={loading}
        uri={API_URL}
        title="Login with Github "
      />
    </View>
  );
}
Login.options = {
  topBar: {
    visible: false,
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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

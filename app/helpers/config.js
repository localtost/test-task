import {Dimensions} from 'react-native';
export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

const CLIENT_ID = 'b8ef225759ae41e78320';
const SECRET_KEY = 'a7c49a4d8a45a423f10dae0a9fe34ca65f932608';
const GITHUB_FIELDS = ['user', 'public_repo'];
const REDIRECT_URL = 'github.co://login';
export const USER_URL = 'https://api.github.com/user';
export const API_URL =
  `https://github.com/login/oauth/authorize` +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}` +
  `&scope=${encodeURIComponent(GITHUB_FIELDS.join(' '))}`;

export const urlWithCode = (code) =>
  `https://github.com/login/oauth/access_token` +
  `?client_id=${CLIENT_ID}` +
  `&client_secret=${SECRET_KEY}` +
  `&code=${code}`;

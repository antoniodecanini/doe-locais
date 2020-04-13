import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6b717e',
  },

  header: {
    marginTop: statusBarHeight + 10,
  }
})
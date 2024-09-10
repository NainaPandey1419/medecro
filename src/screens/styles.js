import { StyleSheet } from 'react-native';

const colors = {
  darkBlue: '#1a2a3a',
  orange: '#ff7f50',
  lightOrange: '#ffa07a',
  white: '#ffffff',
  lightGray: '#f0f0f0',
  gray: '#808080',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.darkBlue,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: colors.orange,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: colors.lightOrange,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    fontSize: 16,
    color: colors.darkBlue,
  },
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.lightOrange,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 10,
  },
  linkButtonText: {
    color: colors.lightOrange,
    fontSize: 16,
  },
  error: {
    color: colors.lightOrange,
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'center',
  },
});
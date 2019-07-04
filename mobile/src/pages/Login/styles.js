import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 125,
    height: 125,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE',
    marginBottom: 15,
  },
  input: {
    width: 300,
    height: 45,
    backgroundColor: '#EEE',
    elevation: 1,
    borderRadius: 25,
    marginTop: 12,
    fontSize: 16,
    paddingHorizontal: 20,
    borderColor: '#AAA',
    borderWidth: 0.3
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 300,
    height: 45,
    elevation: 0.5,
    marginTop: 12,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Gill Sans',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default styles;

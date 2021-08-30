import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#43a1c9',
    justifyContent: "flex-start"
  },
  Test2: {
    flex: 1,
    justifyContent: "flex-end"
  },
  Test3: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 50,
    elevation: 3,
  },
  ButtonText:{
    fontSize: 30,
  },
  FormInput:{
    padding: 5,
    height: 40,
    backgroundColor: "#ccc",
  }
});
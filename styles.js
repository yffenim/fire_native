import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#acb7ae',
    // backgroundColor: '#EFC7B7',
    color: '#d0d0c0'
		},
  button: {
    backgroundColor: '#444',
    padding: 10, 
    marginTop: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
  },
  buttonEdit: {
    backgroundColor: '#444',
    padding: 10,
    marginTop: 10,
    marginRight: 75,
    marginLeft: 75,
    borderRadius: 10
  },
  buttonTextEdit: {
    color: '#fff',
    fontWeight: "bold",
  },
  flatList: {
    width: '100%',
  },
  listText: {
    color: 'white',
  },
  listItem: {
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    backgroundColor: '#776677',
    padding: 1,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  modalButtonOpen: {
    backgroundColor: "#F194FF",
  },
  modalButtonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "right"
  },
  deleteButton: {
    color: "#F194FF",
    margin: 5
  }
});

export default styles;

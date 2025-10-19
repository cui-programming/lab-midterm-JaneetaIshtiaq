import { StyleSheet } from 'react-native';

/**
 * 👉 Students: create all your styles here.
 * Start with: container, headerText, sectionTitle, itemRow, itemName, counter, input, button, etc.
 * Keep style names semantic.
 */
export const styles = StyleSheet.create({
  tmcontainer: {
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    margin: 10,
  },

  tmtext: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  tminput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  tmbutton: {
  backgroundColor: 'lightpink',
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 5,
  alignItems: 'center',
  marginHorizontal: 10,
  marginVertical: 10,
  height:50,
  width:'25%',
},
itemRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'lightblue',
  padding: 10,
  marginVertical: 5,
  borderRadius: 8,
},

itemName: {
  flex: 1,
  fontSize: 16,
  fontWeight: 'bold',
},

counter: {
  width: 40,
  textAlign: 'center',
  fontSize: 16,
},

buttonRow: {
  flexDirection: 'row',
},

plusButton: {
  backgroundColor: 'lightgreen',
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 5,
  marginHorizontal: 3,
},

minusButton: {
  backgroundColor: 'lightpink',
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 5,
  marginHorizontal: 3,
},
section: {
    padding: 20,
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'darkgreen',
    textAlign: 'center',
    marginBottom: 15,
  },


  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'lightyellow',
    fontSize: 16,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'darkgreen',
  },

  
  

});

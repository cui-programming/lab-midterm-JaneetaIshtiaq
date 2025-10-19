import React,{useState} from 'react';
import { View,FlatList } from 'react-native';
import { styles } from '../../styles/styles';
import {Text,TextInput,Button} from '../ui';
import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/SearchAndAdd
 * Students implement:
 *  - a text box to add a new zikr (phrase only, count starts at 0)
 *  - a search box to filter existing azkaar by phrase
 *  - use only components from 'ui' for inputs and buttons
 *  - lifting state up if needed
 */
export default function SearchAndAdd() {
  const [data, setData] = useState(initialAzkaar);
  const [searchText, setSearchText] = useState('');
  const [newZikr, setNewZikr] = useState('');
  const addZikr = () => {
    if (newZikr === '') return; 

    
    let already = data.find(
      item => item.phrase.toLowerCase() === newZikr.toLowerCase()
    );

    if (!already) {
      let newItem = {
        id: data.length + 1,
        phrase: newZikr,
        count: 0,
      };
      setData([...data, newItem]); 
      setNewZikr(''); 
    }
  };
  const searchResult = data.filter(item =>
    item.phrase.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <View style={styles.section}>
      {/* TODO: Implement search and add UI here using ui/TextInput and ui/Button */}
    <Text style={styles.sectionTitle}>Search & Add Zikr</Text>
      <TextInput
      style={styles.textInput}
        placeholder="Search zikr..."
        value={searchText}
        onChangeText={setSearchText}/>
      <TextInput
      style={styles.textInput}
        placeholder="Add new zikr..."
        value={newZikr}
        onChangeText={setNewZikr}
      />
      <Button style={styles.tmbutton} onPress={addZikr}>Add</Button>
      <FlatList
        data={searchResult}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemText}>{item.phrase}</Text>
            
        </View>
        )}
      />
    
    </View>
  );
}

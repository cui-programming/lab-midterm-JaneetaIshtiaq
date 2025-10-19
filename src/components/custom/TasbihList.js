import React, { useState } from 'react';
import { View, FlatList} from 'react-native';
 // You may switch Text to ui/Text later
 import {Text,Button} from '../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/TasbihList
 * Renders a FlatList of azkaar with their counts.
 * NOTE: Increment/Decrement buttons are intentionally NOT implemented.
 * Students will add + and - controls using UI/Button and update state accordingly.
 */
export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  // HINT ONLY (do not complete): you will need handlers like increment(id) / decrement(id)
    const increaseCount=(id)=>{
    const newItems=[...items];
    const index=newItems.findIndex((it)=>it.id===id);
    newItems[index].count +=1;
    setItems(newItems);
  }
  const decreaseCount=(id)=>{
    const newItems=[...items];
    const index=newItems.findIndex((it)=>it.id===id);
    if(newItems[index].count >0){
      newItems[index].count-=1;
    } 
    setItems(newItems);
  }
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
      {/* TODO: Add increment/decrement buttons here using ui/Button */}
    <View style={styles.buttonRow}>
      <Button style={styles.plusButton} onPress={()=>increaseCount(item.id)}>+</Button>
      <Button style={styles.minusButton} onPress={()=>decreaseCount(item.id)}>-</Button>

    </View>
    
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}

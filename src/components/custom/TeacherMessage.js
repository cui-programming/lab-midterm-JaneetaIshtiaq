import React,{useState} from 'react';
import { View } from 'react-native';
import {Text,Button,TextInput} from '../ui';
import {styles} from '../../styles/styles';

export default function TeacherMessage(){

    const [suggestion,setsuggestion]=useState("");
    return(
        <View style={styles.tmcontainer}>
            <Text style={styles.tmtext}>
                Hello ! I am you Maths Teacher
            </Text>
            <TextInput style={styles.tminput} placeholder="Any suggestion ?" value={suggestion} onChangeText={setsuggestion}/>
            <Button style={styles.tmbutton}  onPress={()=>alert("Submitted")}>
                <Text style={styles.tmtext}>
                    Submit
                </Text>
                </Button>
        </View>

    );
}

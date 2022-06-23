import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import phoneNumberValidate from "phone-number-validation-tr";


const Input = () =>{
    const [text, setText] = useState("");

    const onChange = (textValue) => {
        setText(textValue)
    }

    const handleSubmit = () => {
        if(phoneNumberValidate(text)){
            Alert.alert('Success', 'Your phone number is valid', [{text: 'Ok'}])
            setTimeout(() => {
                setText("")
            }, 1500);
            
        }else{
            Alert.alert('Error', 'Your phone number is not valid. Please enter a valid phone number', [{text: 'Ok'}])
            setTimeout(() => {
                setText("")
            }, 1500);
        }
    }
    return(
        <View>
            <TextInput textContentType='telephoneNumber' keyboardType='phone-pad' maxLength={11} placeholder="Phone Number..." value={text} style={styles.input} onChangeText={onChange}/>
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
  
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 20,
    },
    btn: {
        backgroundColor: '#FC5304',
        padding: 9,
        margin: 5,
    },
    btnText : {
        color: "#fff",
        fontSize: 20,
        textAlign: 'center'
    }
})
  
export default Input;
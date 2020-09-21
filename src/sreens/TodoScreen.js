import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export const TodoScreen = ({ todo, onRemove, goBack }) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='Назад' color='#757575' onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title='Удалить' color='#e53935' onPress={() => console.log('rm')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    button: {
        width: '40%'
    }
})
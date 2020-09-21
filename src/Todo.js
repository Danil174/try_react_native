import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {console.log('pressed ', todo.id)}}
            onLongPress={() => onRemove(todo.id)}
        >    
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        color: '#fff',
        backgroundColor: '#6699ff',
        marginBottom: 5,
    },
})
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { THEME } from '../theme'
import { AppCard } from '../components/UI/AppCard'

export const TodoScreen = ({ todo, onRemove, goBack }) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Ред.' />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='Назад' color={THEME.GREY_COLOR} onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title='Удалить' color={THEME.WARNING_COLOR} onPress={() => console.log('rm')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function FormsScreen() {
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forms</Text>

            <TextInput
                style={styles.input}
                placeholder="Texto"
                value={text}
                onChangeText={setText}
            />

            <TextInput
                style={styles.input}
                placeholder="546"
                keyboardType="numeric"
                value={number}
                onChangeText={setNumber}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 26,
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#d9d9d9',
        padding: 18,
        borderRadius: 6,
        marginBottom: 18,
        fontSize: 16,
    },
});
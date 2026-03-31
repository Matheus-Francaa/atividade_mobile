import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Crd from '../components/Card';

export default function IconsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ícones</Text>

            <Crd title="Card 1" />
            <Crd title="Card 2" />
            <Crd title="Card 3" />
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
});
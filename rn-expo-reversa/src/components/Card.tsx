import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CardProps {
    title: string;
    onPress?: () => void;
}

export default function Crd({ title, onPress }: CardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#d9d9d9',
        padding: 18,
        borderRadius: 6,
        marginVertical: 12,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});
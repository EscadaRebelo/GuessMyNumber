import { Text, StyleSheet, Platform } from 'react-native';

import Colors from '../../constants/colors';

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        //borderWidth: Platform.OS === 'android' ? 2 : 0, // borderWidth = 2 on android and 0 on ios (no border on ios)
        borderWidth: Platform.select({ ios: 0, android: 2 }), // same thing as above
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300
    },
});
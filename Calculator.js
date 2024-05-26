import { React, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Calculator() {

    const [display, setDisplay] = useState('');

    const handlePress = (value) => {
        setDisplay(display + value);
    };

    const handleCalculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (e) {
            setDisplay('Error');
        }
    };

    const handleClear = () => {
        setDisplay('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{display}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
                        <Text style={styles.buttonText}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={handleClear}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleCalculate}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
//     display: {
//         width: '90%',
//         height: 100,
//         backgroundColor: '#000',
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//         padding: 10,
//         borderRadius: 5,
//         marginBottom: 20,
//     },
//     displayText: {
//         color: '#fff',
//         fontSize: 36,
//     },
//     buttons: {
//         width: '90%',
//     },
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 10,
//     },
//     button: {
//         width: 70,
//         height: 70,
//         backgroundColor: '#ddd',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//     },
//     buttonText: {
//         fontSize: 24,
//     },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',  // Light background color
    },
    display: {
        width: '90%',
        height: 100,
        backgroundColor: '#1c1c1c',  // Darker background for the display
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,  // Shadow for Android
    },
    displayText: {
        color: '#fff',
        fontSize: 40,  // Slightly larger text
    },
    buttons: {
        width: '90%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,  // Increase margin between rows
    },
    button: {
        width: 80,
        height: 80,
        backgroundColor: '#4CAF50',  // Green color for buttons
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,  // Shadow for Android
    },
    buttonText: {
        fontSize: 26,
        color: '#fff',
    },
    specialButton: {
        backgroundColor: '#ff5722',  // Different color for special buttons
    },
});

export default Calculator
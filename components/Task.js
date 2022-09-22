
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) =>{
{/* task list */}
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.Square}>

                </View>
            </View>
            <View style={styles.itemMiddle}>
                    <Text>{props.text}</Text>
            </View>
            <View style={styles.category}>
                    <Text>{props.cat}</Text>
            </View>
            <View style={styles.itemRight}>
                <View style={styles.circular}></View>
            </View>
        </View>
    )
}

{/* styles */}
const styles= StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexwrap: 'wrap',
        flex: 1
    },
    Square: {
        width: 24,
        height: 24,
        borderRadius: 8,
        backgroundColor: '#00ff00',
        opacity: 0.5
    },
    itemMiddle: {
        flexDirection: 'row',
        alignItems: 'center',
        flexwrap: 'wrap',
        flex: 3
    },
    text: {
        maxWidth: '80%'
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexwrap: 'wrap',
        flex: 1
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#00ff00',
        borderWidth: 3,
        borderRadius: 5,

    },
    category: {
        backgroundColor: '#00ff00',
        flexDirection: 'row',
        alignItems: 'center',
        flexwrap: 'wrap',
        flex: 1,
        borderRadius: 10,
        padding: 3
    }

});

export default Task;
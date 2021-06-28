import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { Text, Surface, Switch, Caption } from 'react-native-paper';
import Styles from '../common/Styles';
import AppHeader from '../components/AppHeader'
import Colors from '../constants/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const IconSize = 24

const Content = ({ backgroundColor = Colors.green, width = "100%", height = 10 }) => (
    <View style={[styles.view, { backgroundColor, width, height }]} />
)

const Settings = ({navigation, route}) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('light');
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={styles.container}>
            <AppHeader
                title={route.name} headerBg={Colors.green} iconColor={Colors.black}
                menu optionalBadge={5} navigation={navigation}
                right="more-vertical" rightFunction={() => console.log('right')}
                optionalIcon="bell" optionalFunc={() => console.log('optional')}
            />
            <View style={styles.settingContainer}>
                <View style={styles.themeSelector}>
                    <TouchableOpacity
                        style={[styles.themeBox, { backgroundColor: Colors.white, borderWidth: 2, borderColor: selectedTheme == 'light' ? Colors.green : Colors.white }]}
                        onPress={() => setSelectedTheme('light')}>
                        <Content height={30} />
                        <Content />
                        <Content width={"50%"} height={20} />
                        <Content />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.themeBox, { backgroundColor: Colors.accent, borderWidth: 2, borderColor: selectedTheme == 'dark' ? Colors.green : Colors.accent }]}
                        onPress={() => setSelectedTheme('dark')}>
                        <Content height={30} />
                        <Content />
                        <Content width={"50%"} height={20} />
                        <Content />
                    </TouchableOpacity>
                </View>
                <Surface style={[Styles.rowView, styles.switchContainer]}>
                    <View style={Styles.rowView}>
                        <View style={[styles.switchIcon, { backgroundColor: 'skyblue' }]}>
                            <Ionicons name="alarm-outline" size={IconSize} color={Colors.white} />
                        </View>
                        <Text style={[Styles.largeText, { marginLeft: 16 }]}>Reminder</Text>
                    </View>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'skyblue'} />
                </Surface>
                <Surface style={[Styles.rowView, styles.switchContainer]}>
                    <View style={Styles.rowView}>
                        <View style={[styles.switchIcon, { backgroundColor: 'orange' }]}>
                            <Ionicons name="notifications" size={IconSize} color={Colors.white} />
                        </View>
                        <Text style={[Styles.largeText, { marginLeft: 16 }]}>Notification</Text>
                    </View>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'orange'} />
                </Surface>
                <Surface style={[Styles.rowView, styles.switchContainer]}>
                    <View style={Styles.rowView}>
                        <View style={[styles.switchIcon, { backgroundColor: 'purple' }]}>
                            <MaterialCommunityIcons name="comment-text-outline" size={IconSize} color={Colors.white} />
                        </View>
                        <Text style={[Styles.largeText, { marginLeft: 16 }]}>Help & Support</Text>
                    </View>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'purple'} />
                </Surface>
                <Surface style={[Styles.rowView, styles.switchContainer]}>
                    <View style={Styles.rowView}>
                        <View style={[styles.switchIcon, { backgroundColor: Colors.green }]}>
                            <MaterialIcons name="event" size={IconSize} color={Colors.white} />
                        </View>
                        <Text style={[Styles.largeText, { marginLeft: 16 }]}>Events</Text>
                    </View>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={Colors.green} />
                </Surface>
            </View>
            <Caption style={{ textAlign: 'center', marginVertical: 20 }}>Version 1.0</Caption>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gridCard: {
        flex: 1,
        padding: 10,
        elevation: 1,
        borderRadius: 18,
        margin: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingContainer: {
        flex: 1,
        padding: 16
    },
    switchContainer: {
        padding: 12,
        justifyContent: 'space-between',
        marginVertical: 8,
        borderRadius: 18,
    },
    switchIcon: {
        padding: 8,
        borderRadius: 6,
    },
    themeContainer: {
        flex: 1,
    },
    themeSelector: {
        ...Styles.rowView,
        height: 200,
        padding: 16,
        // backgroundColor: 'yellow'
    },
    themeBox: {
        flex: 1,
        margin: 10,
        padding: 16,
        height: 150,
        width: '100%',
        borderRadius: 10,
    },
    view: { width: '100%', height: 10, backgroundColor: Colors.green, marginTop: 10 }
})

export default Settings
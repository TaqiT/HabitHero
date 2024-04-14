import React from 'react';
import {
    SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Image,
    Switch
} from 'react-native';
import { header } from 'react-native/Libraries/NewAppScreen';
import { FeatherIcon } from 'react-native-vector-icons';

const SECTIONS = [
    {
        header: 'Preferences',
        icon: 'settings',
        items: [
            {id: 'language', label: 'Language', type: 'input' },
            {id: 'darkMode', label: 'Dark Mode', type: 'toggle' },
            {id: 'wifi', label: 'Use Wifi', type: 'toggle' },
            {
                id: 'location',
                label: 'Location',
                type: 'input',
            },
            {
                id: 'showCollaborators',
                label: 'Show collaborators',
                type: 'toggle',
            },
            {
                id: 'accessMode',
                label: 'Accessibility Mode',
                type: 'toggle',
            },


        ],

    },
    {
        header: 'Help',
        icon: 'help-circle',
        items: [
            {label1: 'Item 1', type: 'link'},
            {label1: 'Item 2', type: 'input'},
            {label1: 'Item 3', type: 'toggle'},
            {label1: 'Item 4', type: 'toggle'},
            {label1: 'Item 5', type: 'link'},

        ]

    },
    {
        header: 'Content',
        icon: 'align-center',
        items: [
            {label1: 'Item 1', type: 'link'},
            {label1: 'Item 2', type: 'input'},
            {label1: 'Item 3', type: 'toggle'},
            {label1: 'Item 4', type: 'toggle'},
            {label1: 'Item 5', type: 'link'},

        ]

    },
];

const PROFILE = 
    'https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp'

export default SettingsTab = () => {
    const [form, setForm] = React.useState({
        language: 'English',
        darkMode: true,
        location: 'University City, Pennsylvania',
        wifi: false,
        showCollaborators: true,
        accessMode: false,

    });
    const [value, setValue] = React.useState(0);
    const { tabs, items } = React.useMemo(() => {
        return {
            tabs: SECTIONS.map(({header, icon}) => ({
                header,
                icon,
            })),
            items: SECTIONS[value].items,
        };

    }, [value]);

    return(
        <SafeAreaView styles={{ flex: 1, backgroundColor: '#f6f6f6' }}>
            <ScrollView contentContainerStyles={styles.container}>
                <View styles={styles.header}>
                    <Text styles={styles.title}>Settings</Text>
                </View>

                <View styles={styles.profile}>
                    <View style={styles.profileHeader}>
                        <Image 
                            alt='Profile picture' 
                            source={{uri: PROFILE}} 
                            style={styles.profileAvatar}
                        />
                        <View styles={styles.profileBody}>
                            <Text style={styles.profileName}>John Doe</Text>
                            <Text style={styles.profileHandle}>@John.doe</Text>

                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.profileAction}>
                            <Text style={styles.profileActionText}>Edit Profile</Text>

                            {/* <FeatherIcon name="edit-3" color="#fff" size={16} /> */}
                            <FeatherIcon name="edit-3" color="#fff" size={16} style={{ fontSize: 16, color: '#fff' }} />

                        </View> 
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <View style={styles.tabs}>
                        {tabs.map[({name, icon}, index) => {
                            const isActive = value === index;

                            return [
                                <View key={index} style={[styles.tabWrapper, isActive && {borderBottomColor: '#6366f1'}]}> 
                                    <TouchableOpacity onPress={() => setValue(index)}>
                                        <View style={styles.tab}>
                                            <FeatherIcon name={icon} color={isActive ? '#6366f1' : '#6b7280'} size={16} />
                                            <Text style={[styles.tabText, {color: isActive ? '#6366f1' : '#6b7280'}]}>{header}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            ]
                        }]}
                    </View>
                    {items.map[({label, type, id}, index) => {
                        <View key={index} style={styles.rowWrapper}>
                            <TouchableOpacity
                                onPress={() => {
                                    //handle onPress
                                    
                                }}>
                                <View style={styles.row}>
                                    <Text style={styles.rowLabel}>{label}</Text>
                                    <View style={{flex:1}}/>
                                    {type === 'input' && <Text style={styles.rowValue}> {form[id]} </Text>}
                                    {type === 'toggle' && (
                                        <Switch
                                            trackColor={{ true: '#007bff'}} 
                                            value={form[id]} 
                                            onValueChange={value => setForm({...form, [id]: value})}
                                        />
                                    )}
                                </View>
                                
                            </TouchableOpacity>
                        </View>
                    }]}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 6,

    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',


    },
    profile: {
        paddingTop: 12,
        paddingHorizontal: 24,
        paddingBottom: 24,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 9999,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 12,
    },
    profileName: {
        fontSize: 17,
        fontWeight: '600',
        color: '#3e3e3e',
    },
    profileHandle: {
        marginTop: 4,
        fontSize: 15,
        color: '#989898',

    },
    profileAction: {
        marginTop: 16,
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    profileActionText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
        marginRight: 8,
    },
    content: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: 'e3e3e3',

    },
    tabs: {
        flexDirection: 'row',
        padding: 16,
    },
    tabWrapper: {
        flex: 1,
        borderBottomWidth: 2,
        borderColor: '#e5e7eb',
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        position: 'relative',
        overflow: 'hidden',
    },
    tabText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#6b7280',
        marginLeft: 5,
    },
    rowWrapper: {
        borderTopWidth: 1,
        borderColor: '#e3e3e3',

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        height: 50,
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#2c2c2c',
    },
    rowValue: {
        fontSize: 15,
        fontWeight: '500',
        color: '#7f7f7f',
        marginRight: 4,
    },

});


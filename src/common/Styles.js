import React from 'react';
import { StyleSheet } from "react-native";
import Colors from '../constants/Colors';
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    row_space: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 19,
        color: Colors.accent,
        marginRight: 16,
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    textAlignLeft: {
        textAlign: 'right'
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    verticalMargin: {
        marginVertical: 10
    },
    verticalMarginMax: {
        marginVertical: 20,
    },    
    marginTop: {marginTop: 10},
    marginBottom: {marginBottom: 10},
    divider: {
        height: 0.5,
        width: '100%',
        backgroundColor: Colors.accent,
        opacity: 0.6,
    },
})

export default Styles;
import React, { useState, useEffect, useCallback } from 'react';
import { Platform, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { create, open, dismissLink, LinkSuccess, LinkExit, LinkIOSPresentationStyle, LinkLogLevel } from 'react-native-plaid-link-sdk';
import colors from '../../assets/constants/colors';
import { Image } from 'react-native';
import { useAuth } from '../../AuthContext';
const SettingsPage = ({ route, navigation }: any) => {
  const { userInfo, authToken } = useAuth();

  console.log(userInfo);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Profile:</Text>
      <Text style={styles.title}>Pranav Sathianathan</Text>
      <Text style={styles.subtitle}>Joined: September 11, 2001</Text>
      </View>
     
      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('ChangeInfo' , {userInfo: userInfo , infoType : 'name'})}>
        <Text style={styles.buttonText}>Change name</Text>
        <Image source={require('../../assets/images/forward_btton.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('ChangeInfo' , {userInfo: userInfo, infoType : 'password'})}>
       <Text style={styles.buttonText}>Change/Forgot Password</Text>
       <Image source={require('../../assets/images/forward_btton.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('ChangeInfo' , {userInfo: userInfo, infoType : 'email'})}>
        <Text style={styles.buttonText}>Change Email</Text>
        <Image source={require('../../assets/images/forward_btton.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('LinkAccount' , {userInfo: userInfo})}>
        <Text style={styles.buttonText}>Link Bank</Text>
        <Image source={require('../../assets/images/forward_btton.png')} />
      </TouchableOpacity>
     
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  header:{
    alignItems: 'flex-start',
    marginStart: -20,
    marginVertical: 10,
    marginTop: -60,
  },
  title:{
    fontFamily: 'Merriweather Bold',
    fontSize: 30,
  },
  subtitle: {
    fontFamily: 'Merriweather Sans',
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  buttonText: {
    fontFamily: 'Merriweather Regular',
    fontSize: 20,
    color: 'black',
  },
  settingsButton: {
    width: '90%',
    height: 60,
    backgroundColor :'#f0f0f0',
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
  }

});
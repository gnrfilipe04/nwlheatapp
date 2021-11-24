import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import LogoSvg from '../../assets/logo.svg';

import { UserPhoto } from '../UserPhoto'

import { styles } from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
        <LogoSvg />
        <View style={styles.logoutButton}>
          <TouchableOpacity>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>

          <UserPhoto imageUri='https://randomuser.me/api/portraits/women/44.jpg'/>
        </View>
    </View>
  );
}

export { Header };
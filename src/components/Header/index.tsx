import React from 'react';
import { useAuth } from '../../hooks/auth'
import { Text, View, TouchableOpacity } from 'react-native';
import LogoSvg from '../../assets/logo.svg';

import { UserPhoto } from '../UserPhoto'

import { styles } from './styles';

const Header: React.FC = () => {
  const { user, signOut } = useAuth()
  return (
    <View style={styles.container}>
        <LogoSvg />
        <View style={styles.logoutButton}>
          
          {user && <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>}

          <UserPhoto imageUri={user?.avatar_url}/>
        </View>
    </View>
  );
}

export { Header };
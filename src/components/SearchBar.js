import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import {Icon} from 'react-native-vector-icons/Ionicons';
import AndroidIcon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      {Platform.OS == 'android' && (
        <AndroidIcon styles={styles.iconStyle} name="search" size={40} />
      )}
      {Platform.OS == 'ios' && (
        <Icon styles={styles.iconStyle} name="ios-search" size={30} />
      )}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;

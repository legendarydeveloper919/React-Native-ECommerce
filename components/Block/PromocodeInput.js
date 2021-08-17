import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import COLORS from '../../constants/COLORS';
import UiButton from '../UI/Button';

const PromocodeInputBlock = () => {
  return (
    <View style={Styles.container}>
      <TextInput style={Styles.input} placeholder="Promo Code" />
      <UiButton style={Styles.button} textStyle={Styles.btnText}>
        Apply
      </UiButton>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGrayColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  button: {
    backgroundColor: COLORS.primaryColor,
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 15,
  },
  btnText: {
    color: COLORS.white,
  },
});

export default PromocodeInputBlock;

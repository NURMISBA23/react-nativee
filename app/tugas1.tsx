import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LayarBentukGeometris() {
  return (
    <View style={gaya.wadahUtama}>
      <View style={gaya.bentukSegitiga} />

      <View style={gaya.kotakPersegi}>
        <Text style={gaya.teksDiDalam}>NURMISBA</Text>
      </View>

      <View style={gaya.kapsulInfo}>
        <Text style={gaya.teksDiDalam}>105841103422</Text>
      </View>
    </View>
  );
}

const gaya = StyleSheet.create({
  wadahUtama: {
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    flex: 1,
    gap: 32,
    justifyContent: 'center',
  },
  bentukSegitiga: {
    backgroundColor: 'transparent',
    borderBottomColor: '#c13e2c',
    borderBottomWidth: 115,
    borderLeftColor: 'transparent',
    borderLeftWidth: 75,
    borderRightColor: 'transparent',
    borderRightWidth: 75,
    borderStyle: 'solid',
    height: 0,
    width: 0,
  },
  kotakPersegi: {
    alignItems: 'center',
    backgroundColor: '#2a81ba',
    borderRadius: 10,
    height: 68,
    justifyContent: 'center',
    paddingHorizontal: 15,
    width: 290,
  },
  kapsulInfo: {
    alignItems: 'center',
    backgroundColor: '#28b062',
    borderRadius: 34,
    height: 68,
    justifyContent: 'center',
    paddingHorizontal: 15,
    width: 290,
  },
  teksDiDalam: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

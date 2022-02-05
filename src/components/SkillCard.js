import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
export function SkillCard() {
  return (
    <TouchableOpacity key="1" style={styles.buttonSkill} activeOpacity={0.7}>
      <Text style={styles.textSkill}>skill</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    borderRadius: 50,
    padding: 15,
    backgroundColor: '#1f1e25',
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

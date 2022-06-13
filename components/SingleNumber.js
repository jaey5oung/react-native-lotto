import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SingleNumber(props) {
  let color = styles.green;
  if (props.number < 11) {
    color = styles.yellow;
  } else if (props.number < 21) {
    color = styles.blue;
  } else if (props.number < 31) {
    color = styles.red;
  } else if (props.number < 41) {
    color = styles.black;
  }
  return (
    <View style={[styles.circle, color]}>
      <Text style={styles.label}>{props.number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dbdbdb',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  blue: {
    backgroundColor: 'blue',
  },
  red: {
    backgroundColor: 'red',
  },
  black: {
    backgroundColor: 'black',
  },
  green: {
    backgroundColor: 'green',
  },
});

import React from 'react';
import { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import SingleNumber from '../components/SingleNumber';
import styled from 'styled-components/native';

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const numbers = [];
_.times(45, (n) => numbers.push(n + 1));

function getNumbers() {
  const newNumbers = _.shuffle(numbers);
  newNumbers.length = 6;
  return newNumbers;
}

// 랜더링 할때 마다 매번 실행
function LottoGenerator() {
  const [displayNumbers, setDisplayNumbers] = useState(getNumbers());
  // 읽기 전용, 쓰기전용
  return (
    <View style={styles.container}>
      <Row>
        {displayNumbers.map((value,index) => (
          <SingleNumber number={value} key={index} />
        ))}
      </Row>
      <Button
        title="로또번호 뽑기"
        onPress={() => setDisplayNumbers(getNumbers())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default LottoGenerator;

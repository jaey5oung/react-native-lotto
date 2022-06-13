import React, { useCallback } from "react"
import { Button, FlatList, Pressable, Text } from "react-native"
import styled from "styled-components/native"

const screenList = [
  { key: "1", title: "로또 번호 생성기", link: "LottoGenerator" },
  { key: "2", title: "풍경 시계", link: "WatchFace" },
]

const LinkItem = styled.View`
  padding: 12px 24px;
  border-bottom-width: 1px;
  border-bottom-color: #dbdbdb;
`

function Home({ navigation }) {
  const renderItem = useCallback(({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate(item.link)}>
        <LinkItem>
          <Text>{item.title}</Text>
        </LinkItem>
      </Pressable>
    )
  }, [])
  return (
    <FlatList
      data={screenList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default Home

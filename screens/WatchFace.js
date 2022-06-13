import React, { useEffect, useState } from "react"
import { Text } from "react-native"
import styled from "styled-components/native"
import { DateTime } from "luxon"

const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const TimeText = styled.Text`
  font-size: 64px;
  font-weight: bold;
  color: skyblue;
`
function WatchFace() {
  const [date, setDate] = useState(DateTime.now())
  useEffect(() => {
    const id = setInterval(() => {
      setDate(DateTime.now())
    }, 1000)
    return function () {
      clearInterval(id)
    }
  }, [])
  return (
    <Container source={{ uri: "https://placeimg.com/1280/1280/arch/1" }}>
      <TimeText>{date.toFormat("HH:mm:ss")}</TimeText>
    </Container>
  )
}

export default WatchFace

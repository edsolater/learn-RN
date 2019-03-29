import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { Button } from 'react-native-paper'
import { View, Text } from 'react-native'

const MyView = styled.View`
  width: 100;
  height: 100;
  /* flex: 1; */
`

const Title = () => {
  return (
    <View>
      <Button icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <MyView style={{ backgroundColor: 'powderblue' }} />
      <MyView style={{ backgroundColor: 'steelblue' }} />
      <MyView style={{ backgroundColor: 'skyblue' }} />
    </View>
  )
}

const mapState = state => {
  return {}
}

const mapDispatch = {}

export default connect(
  mapState,
  mapDispatch
)(Title)

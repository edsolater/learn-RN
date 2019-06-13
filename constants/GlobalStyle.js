import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const font = {
  main: {
    fontSize: 14,
    fontColor: 'hsla(238, 21%, 10%, 0.78)'
  }
}
const skeleton = {
  Screen: {
    // 不应该有默认 location，会增加复杂度的
    statusBarIconTheme: 'light',
    boxColor: 'hsl(0, 100%, 98%)'
  },
  Board: {
    boxColor: 'hsl(0, 100%, 100%)'
  },
  Box: {
    size: [40, 20],
    boxColor: 'hsla(208, 100%, 70%, 0.1)'
  },
  Text: {
    size: [112, undefined], // 空值不能改变 length，要显示地设定 undefined
    boxColor: 'hsla(150, 100%, 50%, 0.78)'
  },
  Image: {
    size: [200, 100],
    boxColor: 'hsl(0, 0%, 70%)'
  },
  Icon: {
    size: 48,
    boxColor: 'hsl(0, 0%, 80%)'
  },
  Avatar: {
    size: 100,
    boxColor: 'hsl(0, 0%, 93%)'
  },
  Button: {
    size: [124, 36],
    fontColor: 'hsl(0, 0%, 100%)',
    boxColor: 'hsl(0, 0%, 30%)'
  }
}
export default {
  fontSize: { main: 14 },
  fontColor: { main: 'hsla(238, 21%, 10%, 0.78)' },
  kitSize: {
    Icon: 48,
    Text: [, 112],
    Image: [200, 100],
    Avatar: 100,
    Button: [124, 36]
  },
  kitColor: {
    Screen: 'hsl(0, 100%, 98%)',
    Board: 'hsl(0, 100%, 100%)',
    Box: 'hsla(208, 100%, 70%, 0.9)',
    Text: 'hsla(150, 100%, 50%, 0.78)',
    Image: 'hsl(0, 0%, 70%)',
    Icon: 'hsl(0, 0%, 80%)',
    Avatar: 'hsl(0, 0%, 93%)',
    Button: 'hsl(0, 0%, 30%)'
  },
  font,
  skeleton
}

import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const font = {
  main: {
    fontSize: 14,
    color: 'hsla(238, 21%, 10%, 0.78)'
  }
}
const skeleton = {
  Screen: {
    // 不应该有默认 location，会增加复杂度的
    statusBarIconTheme: 'light',
    boxColor: 'hsl(0, 100%, 98%)'
  }
}
export default { font, skeleton }

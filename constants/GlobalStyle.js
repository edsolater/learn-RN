import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
  text: { main: 'hsla(150, 100%, 50%, 0.78)' },
  boxColor: {
    Screen: 'hsl(0, 100%, 100%)',
    Box: 'hsla(208, 100%, 70%, 0.9)',
    Textbox: 'hsla(150, 100%, 50%, 0.78)'
  },
  textSize:14,
  textBoxWidth: 10 * 14,
  shortcut: {
    center: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
}

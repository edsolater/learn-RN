import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
  defaultWordNum: 8,
  fontColor: { main: 'hsla(238, 21%, 10%, 0.78)' },
  fontSize: { main: 14 },
  defaultColor: {
    Screen: 'hsl(0, 100%, 100%)',
    Box: 'hsla(208, 100%, 70%, 0.9)',
    Textbox: 'hsla(150, 100%, 50%, 0.78)',
    Image: 'hsl(0, 0%, 90%)'
  },
  defaultLayout:{

  }
}

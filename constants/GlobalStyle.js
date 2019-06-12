import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
  fontSize: { main: 14 },
  fontColor: { main: 'hsla(238, 21%, 10%, 0.78)' },
  kitSize: {
    Icon: 48,
    Text: [, 112],
    Image: [200, 100]
  },
  kitColor: {
    Screen: 'hsl(0, 100%, 100%)',
    Box: 'hsla(208, 100%, 70%, 0.9)',
    Text: 'hsla(150, 100%, 50%, 0.78)',
    Image: 'hsl(0, 0%, 90%)',
    Icon: 'hsl(0, 0%, 93%)'
  }
}

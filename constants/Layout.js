import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
  textSize:14,
  textBoxWidth: 10 * 14,
  shortcut: {
    center: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
}

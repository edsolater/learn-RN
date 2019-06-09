import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375,
  bottomNavBarHeight: 18 * 4,
  content: {
    center: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Loading } from '@components'
import { connect } from '@tarojs/redux'
import { getWindowHeight } from '@utils/style'
import './cate.scss'

@connect()
class Cate extends Component {
  config = {
    navigationBarTitleText: '分类'
  }

  state = {
    current: -1,
    loaded: false,
    loading: false
  }

  componentDidMount() {
  }

  render () {

    return (
      <View className='cate'>
      </View>
    )
  }
}

export default Cate

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Loading } from '@components'
import { connect } from '@tarojs/redux'
import { getWindowHeight } from '@utils/style'
import './home.scss'

@connect()
class Home extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    loaded: false,
    loading: false,
    lastItemId: 0,
    hasMore: true
  }

  componentDidMount() {
    // NOTE 暂时去掉不适配的内容
    Taro.showToast({
      title: '注意，',
      icon: 'none',
      duration: 6000
    })
  }



  render () {
    return (
      <View className='home'>
      </View>
    )
  }
}

export default Home

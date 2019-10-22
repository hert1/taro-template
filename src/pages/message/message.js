import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { ButtonItem, ItemList, Loading } from '@components'
import { connect } from '@tarojs/redux'
import { API_CHECK_LOGIN } from '@constants/api'
import { getWindowHeight } from '@utils/style'
import Empty from './empty'
import './message.scss'

@connect()
class Index extends Component {
  config = {
    navigationBarTitleText: '消息'
  }

  state = {
    loaded: false,
    login: false
  }

  componentDidShow() {
  }

  toLogin = () => {
    Taro.navigateTo({
      url: '/pages/user-login/user-login'
    })
  }

  render () {
    if (!this.state.login) {
      return (
        <View className='message message--not-login'>
          <Empty text='未登陆' />
          <View className='message__login'>
            <ButtonItem
              type='primary'
              text='登录'
              onClick={this.toLogin}
              compStyle={{
                background: '#b59f7b',
                borderRadius: Taro.pxTransform(4)
              }}
            />
          </View>
        </View>
      )
    }

    return (
      <View className='message'>
      </View>
    )
  }
}

export default Index

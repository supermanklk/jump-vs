import React, { useEffect } from 'react'
import { notification } from 'antd';
const NotificationJumpVs = (props) => {


  const isDev = () => {
    // 不能是线上地址 可以接受线上的域名
    // 不能是测试环境，不包含test
    let devFlags = ['localhost', '127.0.0.1']
    let isOK = devFlags.some((item,index,arr)=>{
      return location.href.includes(item)
  })
    if (isOK) {
      return true
    }

    return false
  };

  const reminderUser = () => {
    const args = {
      message: '如何点击页面跳转到vscode？',
      description:
        '按着option,鼠标移动到对应的UI点击即可跳转到对应的vscode位置',
      duration: 0,
    };
    notification.open(args);
  };

  useEffect(() => {

    if (isDev) {
      reminderUser()
    }

  }, [])

  return (
    <div></div>
  )
}
export default NotificationJumpVs
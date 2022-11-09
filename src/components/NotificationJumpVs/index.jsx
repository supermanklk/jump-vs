import React, { useEffect } from 'react'
import { notification } from 'antd';
const NotificationJumpVs = (props) => {

  useEffect(() => {
    const args = {
      message: '如何点击页面跳转到vscode？',
      description:
        '按着option,鼠标移动到对应的UI点击即可跳转到对应的vscode位置',
      duration: 0,
    };
    notification.open(args);
  }, [])

  return (
    <div></div>
  )
}
export default NotificationJumpVs
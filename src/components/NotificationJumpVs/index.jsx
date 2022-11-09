import React, { useEffect } from 'react'
import { notification } from 'antd';
const NotificationJumpVs = (props) => {

  useEffect(() => {
    const args = {
      message: 'Notification Title12',
      description:
        'I 11will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0,
    };
    notification.open(args);
  }, [])

  return (
    <div></div>
  )
}
export default NotificationJumpVs
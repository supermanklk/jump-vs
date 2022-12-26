// @ts-ignore
import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom'

import NotificationsManager from '../NotificationsManager/index'
import Notification, { Color, NotificationProps } from '../Notifacation/index'
import createContainer from '../createContainer/index'

const containerElement = createContainer()

let notify: any

ReactDOM.render(
  <NotificationsManager
    setNotify={(notifyFn): void => {
      notify = notifyFn
    }}
  />,
  containerElement
)

// export { Notification, Color }

// export function info(children: React.ReactNode, autoClose: NotificationProps['autoClose']): () => void {
//   return notify({
//     color: Color.info,
//     children,
//     autoClose
//   })
// }

export function success(children: React.ReactNode, autoClose: NotificationProps['autoClose']): () => void {
  return notify({
    color: Color.success,
    children,
    autoClose
  })
}

// export function warning(children: React.ReactNode, autoClose: NotificationProps['autoClose']): () => void {
//   return notify({
//     color: Color.warning,
//     children,
//     autoClose
//   })
// }

// export function error(children: React.ReactNode, autoClose: NotificationProps['autoClose']): () => void {
//   return notify({
//     color: Color.error,
//     children,
//     autoClose
//   })
// }

// @ts-ignore
import React, { useEffect, useState } from 'react'

export const randomId = () => `isense-${Math.random().toString(36).slice(2, 11)}`

import Notification, { NotificationProps } from '../Notifacation'

interface Props {
  setNotify(fn: (params: NotificationProps) => void): void
}

export default function NotificationsManager(props: Props) {
  const { setNotify } = props
  const [notifications, setNotifications] = useState<NotificationProps[]>([])

  const createNotification = ({ color, autoClose, children }: NotificationProps): void => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
        children,
        color,
        autoClose,
        id: randomId()
      }
    ])
  }

  useEffect(() => {
    setNotify(({ color, autoClose, children }) => createNotification({ color, autoClose, children }))
  }, [setNotify])

  const deleteNotification = (id: number): void => {
    const filteredNotifications = notifications.filter((_, index) => id !== index, [])
    setNotifications(filteredNotifications)
  }

  return (
    <template>
      {notifications.map(({ id, ...props }, index) => (
        <Notification key={id} onDelete={(): void => deleteNotification(index)} {...props} />
      ))}
    </template>
  )
}

// @ts-ignore
import React, { useEffect, useState } from 'react';

export const randomId = () => `isense-${Math.random().toString(36).slice(2, 11)}`;

import Notification, { NotificationProps } from '../Notifacation';

interface Props {
  setNotify(fn: (params: NotificationProps) => void): void;
}

export default function NotificationsManager(props: Props) {
  const { setNotify } = props;
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const isDev = () => {
    // 不能是线上地址 可以接受线上的域名
    // 不能是测试环境，不包含test
    let devFlags = ['localhost', '127.0.0.1'];
    let isOK = devFlags.some((item, index, arr) => {
      return location.href.includes(item);
    });
    if (isOK) {
      return true;
    }

    return false;
  };

  const createNotification = ({
    color,
    autoClose,
    children,
    destroyWithDev = true,
  }: NotificationProps): void => {
    if (destroyWithDev && !isDev()) {
      console.log('faith=============生产环境不弹notifacation');
      return;
    }

    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
        children,
        color,
        autoClose,
        id: randomId(),
      },
    ]);
  };

  useEffect(() => {
    setNotify(({ color, autoClose, children, destroyWithDev }) =>
      createNotification({ color, autoClose, children, destroyWithDev }),
    );
  }, [setNotify]);

  const deleteNotification = (id: number): void => {
    const filteredNotifications = notifications.filter((_, index) => id !== index, []);
    setNotifications(filteredNotifications);
  };

  return (
    <template>
      {notifications.map(({ id, ...props }, index) => (
        <Notification key={id} onDelete={(): void => deleteNotification(index)} {...props} />
      ))}
    </template>
  );
}

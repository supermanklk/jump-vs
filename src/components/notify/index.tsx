// @ts-ignore
import React from 'react';
import ReactDOM from 'react-dom';

import NotificationsManager from '../NotificationsManager/index';
import Notification, { Color, NotificationProps } from '../Notifacation/index';
import createContainer from '../createContainer/index';

const containerElement = createContainer();

let notify: any;

ReactDOM.render(
  <NotificationsManager
    setNotify={(notifyFn): void => {
      notify = notifyFn;
    }}
  />,
  containerElement,
);

export function info(
  children: React.ReactNode,
  autoClose: NotificationProps['autoClose'],
  destroyWithDev: boolean,
): () => void {
  return notify({
    color: 'info',
    children,
    autoClose,
    destroyWithDev,
  });
}

export function success(
  children: React.ReactNode,
  autoClose: NotificationProps['autoClose'],
  destroyWithDev: boolean,
): () => void {
  return notify({
    color: Color.success,
    children,
    autoClose,
    destroyWithDev,
  });
}

export function warning(
  children: React.ReactNode,
  autoClose: NotificationProps['autoClose'],
  destroyWithDev: boolean,
): () => void {
  return notify({
    color: Color.warning,
    children,
    autoClose,
    destroyWithDev,
  });
}

export function error(
  children: React.ReactNode,
  autoClose: NotificationProps['autoClose'],
  destroyWithDev: boolean,
): () => void {
  return notify({
    color: Color.error,
    children,
    autoClose,
    destroyWithDev,
  });
}

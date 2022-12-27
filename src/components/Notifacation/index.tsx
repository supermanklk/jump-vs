// @ts-ignore
import React, { useEffect, useState } from 'react';
// @ts-ignore
import styles from './index.module.less';
import cn from 'classnames';
import createContainer from '../createContainer';
const container = createContainer();
// @ts-ignore
import { createPortal } from 'react-dom';
export enum Color {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export type TimerType = NodeJS.Timeout;

export interface NotificationProps {
  color?: Color;
  children?: React.ReactNode;
  onDelete?: Function;
  autoClose?: boolean | number;
  id?: React.Key;
  destroyWithDev?: boolean;
}

const defaultAutoCloseTime = 5 * 1000;
const timeToDelete = 300;

const Notification: React.FC<NotificationProps> = ({
  color = Color.info,
  children,
  onDelete,
  autoClose = false,
}) => {
  const autoCloseTime =
    typeof autoClose === 'boolean'
      ? defaultAutoCloseTime
      : autoClose > 0
      ? autoClose
      : defaultAutoCloseTime;

  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isClosing) {
      const timerId = setTimeout(() => setIsClosing(true), timeToDelete);
      return (): void => {
        clearTimeout(timerId);
      };
    }
  }, [isClosing, onDelete]);

  useEffect(() => {
    let timer: any = -1;
    if (autoClose) {
      console.log('faith=============12');
      // @ts-ignore
      timer = setTimeout(() => {
        // setIsClosing(true)
        console.log('faith=============autoCloseTime', autoCloseTime);
        deleteNotificationItem();
      }, autoCloseTime);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [autoClose]);

  const deleteNotificationItem = () => {
    let timer: any = -1;
    setIsClosing(true);
    // @ts-ignore
    timer = setTimeout(() => {
      onDelete();
    }, timeToDelete);

    return () => {
      clearTimeout(timer);
    };
  };

  return createPortal(
    <div
      className={cn([
        styles.container,
        {
          [styles.shrink]: isClosing,
        },
      ])}
    >
      <div
        className={cn([
          styles.notification,
          styles[color],
          {
            [styles.slideIn]: !isClosing,
            [styles.slideOut]: isClosing,
          },
        ])}
      >
        {children}
        <button onClick={deleteNotificationItem} className={styles.closeButton}>
          <img
            className={cn([styles.closeIcon])}
            src={`http://faith-2021-001.oss-cn-hangzhou.aliyuncs.com/20221226/1672048384395425.png`}
            alt=""
          />
        </button>
      </div>
    </div>,
    container,
  );
};
export default Notification;

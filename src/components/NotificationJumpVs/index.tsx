// @ts-ignore
import React, { useEffect, useState } from 'react';
// @ts-ignore
import { notification } from 'antd';

const stimulateText =
  '(我们应该重视团队的精神，一个人作用再大，也不过是一碗水中比较大的一粒水珠而已。)';

enum ProjectList {
  'meeting-pc' = '按着 shift + control + command + c，然后点击视图跳转到对应的代码块，仅支持vscode, 来自 react-dev-inspector ',
  'meeting-mobile' = '暂时未集成代码跳转，敬请期待',
  'isense-h5-cast-screen' = '按着option + 左click，即可跳转到对应的代码块, 来自clickToComponent/ ',
  'isense-backend-pc' = '按着option + 右click，即可跳转到对应的代码块, 来自clickToComponent 暂时左click有缺陷 ',
  '' = '点一下UI，按着option,鼠标移动到对应的UI点击即可跳转到对应的vscode位置',
}

const NotificationJumpVs = ({ projectName }) => {
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

  const getDescription = () => {
    let tipText = ProjectList[projectName];
    return `${tipText ? tipText : ProjectList['']}  ${stimulateText}`;
  };

  const reminderUser = () => {
    let description = '';

    const args = {
      message: '如何点击页面跳转到vscode？',
      description: getDescription(),
      duration: 0,
    };
    notification.warning(args);
    notification.warning(args);
  };

  useEffect(() => {
    console.info('当前是开发环境？', isDev());
    console.info('当前是开发环境？', isDev());
    console.info('当前是开发环境？', isDev());
    if (isDev()) {
      reminderUser();
    }
  }, []);

  return <div></div>;
};

function JumpVsTip({ projectName }: { projectName?: '' }) {
  return <NotificationJumpVs projectName={projectName} />;
}

export default JumpVsTip;

function sum(a: any, b: any) {
  return a + b + 1 + 3 + 1 + 10;
}

const getQueryVariable = (variable: string) => {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
};

const isAndroidOrIos = () => {
  const ran = navigator.userAgent;
  const isAndroid = ran.indexOf('Android') > -1 || ran.indexOf('Linux') > -1;
  const isIOS = !!ran.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  if (isAndroid) {
    return 'Android';
  }
  if (isIOS) {
    return 'iOS';
  }
  return 'unknow';
};

const strArrIsNumsCombination = (nums: string) => {
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const newArr = nums.split('').filter((item) => {
    return num.includes(item);
  });
  if (nums.length === newArr.length) {
    return true;
  }
  return false;
};

// 注意 data 返回的接口，接口定义需要设置 responseType: 'blob'
const downloadExcelFromBlob = (data: any, excelTitle: string) => {
  const blob = new Blob([data], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${excelTitle}.xlsx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

const getUserLanguage = () => {
  const lang = navigator?.language;
  // 如果用户设置了语言，则用用户语言
  const defaultLang = localStorage.getItem('umi_locale');
  if (defaultLang) {
    return defaultLang;
  }
  // 用户没有设置语言，使用浏览器默认语言
  if (lang) {
    return lang;
  }
  // 兜底中文
  return 'zh-CN';
};






// 方法
export  {
  sum,
  getQueryVariable,
  isAndroidOrIos,
  strArrIsNumsCombination,
  downloadExcelFromBlob,
  getUserLanguage
}


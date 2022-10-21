function sum(a: any, b: any) {
  return a + b + 1 + 3 + 1 + 10;
}

export const getQueryVariable = (variable: string) => {
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



// 方法
const FUtils = {
  sum,
  getQueryVariable
}
export default FUtils


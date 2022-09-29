export default {
  // 外部使用的时候默认忽略state， 不用传
  setHeaderTitle(state, routerName) {
    switch (routerName) {
      case 'day':
        state.headerTitle = '当天信息';
        break;
      case 'month':
        state.headerTitle = '近期假期';
        break;
      case 'year':
        state.headerTitle = '当年假期';
        break;
      default:
        state.headerTitle = '当天信息';
        break;
    }
  },
  setErrorCode(state, errorCode) {
    state.errorCode = errorCode;
  },
  setData(state, payload) {
    const { field, data } = payload;
    switch (field) {
      case 'day':
        state.dayData = data;
        break;
      case 'month':
        state.monthData = data;
        break;
      case 'year':
        state.yearData = data;
        break;
      default:
        break;
    }
  }
}
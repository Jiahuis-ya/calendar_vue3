export default {
  setMaxLength(state, routerName) {
    switch (routerName) {
      case 'day':
        state.maxLength = 8;
        break;
      case 'month':
        state.maxLength = 6;
        break;
      case 'year':
        state.maxLength = 4;
        break;
      default:
        state.maxLength = 8;
        break;
    }
  },
  setPlaceholder(state, routerName) {
    const date = new Date();

    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

    switch (routerName) {
      case 'day':
        state.placeholder = `格式：${year}${month}${day} (${year}年${month}月${day}日)`;
        break;
      case 'month':
        state.placeholder = `格式：${year}${month} (${year}年${month}月)`;
        break;
      case 'year':
        state.placeholder = `格式：${year} (${year}年)`;
        break;
      default:
        state.placeholder = `格式：${year}${month}${day} (${year}年${month}月${day}日)`;
        break;
    }
  }
  
}
export function _addZero (value) {
  return value < 10 ? `0${value}` : value
}

export const getIconDate = (type) => {
  const date = new Date()

  switch(type) {
    case 'day':
      return _addZero(date.getDate().toString());
    case 'month':
      return _addZero((date.getMonth() + 1).toString());
    case 'year':
      return date.getFullYear().toString().substring(2);
  }
}

export function formatChisDate(date, type) {
  const _arr = date.split('-');

  switch(type) {
    case 'day':
      return `${_arr[0]}年${_arr[1]}月${_arr[2]}日`;
    case 'month':
      return `${_arr[0]}年${_arr[1]}月`;
    case 'year':
      return `${_arr[0]}年` ;
    default:
      return `${_arr[0]}年${_arr[1]}月${_arr[2]}日`;
  }
}

export function mapChisDate(data, key) {
  return data.map(item => {
    item[key] = formatChisDate(item[key]);
    return item;
  })
}

export function getNowDate(field) {
  const date = new Date();

  let year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();

    switch(field) {
      case 'day':
        return `${year}-${month}-${day}`;
      case 'month':
        return `${year}-${month}`;
      case 'year':
        return `${year}`;
      default:
        return `${year}-${month}-${day}`;
    }
}

export function formatUserDate(value) {
  const len = value.length;
  if(len < 4) {
    return;
  }

  if(len === 4) {
    return value;
  }

  // if(len > 4 && len === 5) {
  if(len > 4 && len < 6)  {
    return value.substr(0, 4);
  }

  let _arr = [],
      patten;

  // 6位或7位
  if(len >= 6 && len < 8) {
    patten = /(\d{4})(\d{2})/;
    value = value.substr(0, 6).replace(patten, "$1-$2");
  
    _arr = Array.from(value).filter((item, index) => {
      // 2015-04 -> 2015-4
      if(index === 5 && item === '0') {
        return false;
      }
      return true;
    })
  }

  if(len >= 8) {
    patten = /(\d{4})(\d{2})(\d{2})/;
    value = value.substr(0, 8).replace(patten, "$1-$2-$3");
  
    _arr = Array.from(value).filter((item, index) => {
      // 2015-04-30 -> 2015-4-30
      if((index === 5 || index === 8) && item === '0') {
        return false;
      }
      return true;
    });
    
  }
  // ['2','0','1','5','-'','4','-'','3','0'] -> 2015-4-30
  return _arr.toString().replace(/,/g, '');
}
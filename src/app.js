export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      products: [
        {name: 'dva',state: 1, address:'浦东新区', id: 1},
        {name: 'antd',state: 2, address:'创新佳苑', id: 2}, 
        {name: 'design',state: 1, address:'安徽省古井镇', id: 3}
      ],
      counts: 0
    }
  }
};

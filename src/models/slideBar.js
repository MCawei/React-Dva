export default {
  namespace: 'slideBar',
  state: {
    MenuList: [
      {key: 1, icon: 'pie-chart', name: '菜单01', router: '/count'},
      {key: 'sub01',icon: 'mail', name: '导航菜单1', children: [
          {key: 2,icon: 'inbox', name: 'dvaStart', router: '/dvaStart/start'},
          {key: 3,icon: 'desktop', name: 'AntdDesign Table', router: '/products'},
          {key: 4,icon: 'appstore', name: 'count', router: '/count'},
        ]},
      {key: 5, icon: 'pie-chart', name: '后台系统模版', router: '/systemSetup/template'},
      {key: 'antd',icon: 'mail', name: 'Ant Design', children: [
          {key: 'ant1',icon: 'inbox', name: 'Progress', router: '/antdUi/progress'},
          {key: 'ant2',icon: 'desktop', name: 'Option 2', router: '/products'},
          {key: 'ant3',icon: 'appstore', name: 'Option 3', router: '/count'},
        ]},
    ],
  },
  reducers: {
    menuSlide(state, {payload: id}) {
      return id
    }
  }
}

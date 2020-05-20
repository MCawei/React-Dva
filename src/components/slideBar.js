import React from 'react';
import {connect} from 'dva';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'dva/router'

const { SubMenu } = Menu;

@connect((state) => ({
  MenuList: state.slideBar.MenuList,
}))
class slideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      slideWidth: 256,
      // menuList: this.props.MenuList,
      menuList: [
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
      OptionItem: []
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'slideBar/menuSlide',
      payload: this.state.slideWidth
    })

    this.createMenu(this.state.menuList)
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      slideWidth: this.state.collapsed?256:80
    });

    this.props.getMenu(this.state.collapsed ? 256 : 80)

    //  问题 如果不异步 向父组件传值 slideWidth 传递的是上一次的数值？？
    // setTimeout(()=> {
    //   this.props.getMenu(this.state.slideWidth)
    // }, 200)
  };

  menuClick = ({ item, key, keyPath, domEvent }) => {

  }

  //创建 菜单
  createMenu = async (menu) => {
    let links = []
    if(!menu) return
    menu.forEach((val) => {
      if(!val.children) {
        links.push(
          <Menu.Item key={val.key}>
          <Icon type={val.icon} />
          <span><Link to={val.router}>{val.name}</Link></span>
        </Menu.Item>
        )
      } else {
        let linkChilds = []
        {
          (val.children).forEach(function(v) {
            linkChilds.push(
              <Menu.Item key={v.key}>
              <Icon type={v.icon} />
              <span><Link to={v.router}>{v.name}</Link></span>
            </Menu.Item>
            )
          })
        }

        links.push(
          <SubMenu
          key={val.key}
          title={
            <span>
              <Icon type={val.icon} />
              <span>{val.name}</span>
            </span>
          }
        >
        {linkChilds}
        </SubMenu>
        )
      }
    })
    this.setState({
      OptionItem: links
    })
      return links
  }

  render() {
    return (
      <div style={{ width: this.state.slideWidth,color: '#fff' }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          { this.state.slideWidth}
        </Button>

        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          onClick={this.menuClick}
          inlineCollapsed={this.state.collapsed}
        >
          {this.state.OptionItem}

          {/*<SubMenu*/}
          {/*  key="sub2"*/}
          {/*  title={*/}
          {/*    <span>*/}
          {/*      <Icon type="appstore" />*/}
          {/*      <span>导航菜单2</span>*/}
          {/*    </span>*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Menu.Item key="9">Option 9</Menu.Item>*/}
          {/*  <Menu.Item key="10">Option 10</Menu.Item>*/}
          {/*  <SubMenu key="sub3" title="Submenu">*/}
          {/*    <Menu.Item key="11">Option 11</Menu.Item>*/}
          {/*    <Menu.Item key="12">Option 12</Menu.Item>*/}
          {/*  </SubMenu>*/}
          {/*</SubMenu>*/}
        </Menu>
      </div>
    );
  }
}
export default slideBar;

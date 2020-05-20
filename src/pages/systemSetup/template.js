import React from 'react';
import {Row, Col, Input, Select, DatePicker, Radio, Button, Tabs, Icon } from 'antd';
// import { SearchOutlined, PoweroffOutlined } from '@ant-design/icons';
import TemplateTable from './templateTable';
import CommentList from './commentList';

const { RangePicker } = DatePicker;

const { Option } = Select;
const { TabPane } = Tabs;

class Template extends React.Component {
  constructor(props) {
    super(props)
    console.log('parent',props);
    this.state = {
      inputVal1: '',
      inputVal2: [],
      inputVal3: [],
      inputVal4: '',
      datePicker: []
    }

    this.PickerChange = this.PickerChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
    this.reset = this.reset.bind(this)
  }
  onChange = (e) => {
    this.setState({
      inputVal1: e.target.value
    })
  }

    handleChange(value) {
      this.setState({
        inputVal2: value
      })
    }

  PickerChange(value, dateString) {
    console.log('PickerChange: ', dateString);
      this.setState({
        inputVal3: dateString,
        datePicker: value,
      })
    }

  PickerOk(value) {
    console.log('onOk: ', value);
  }

  onChange4 = e => {
    this.setState({
      inputVal4: e.target.value,
    });
  };

  // search && reset
  search() {
    console.log(this.state);
    // let par = 'a=1&b=2&c=3&b=4'
    // let obj = {}
    // par.split('&').map((v)=>{
    //   obj[v.split('=')[0]] = v.split('=')[1]
    // })
  }

  reset() {
    this.setState({
      inputVal1: '',
      inputVal2: [],
      inputVal3: [],
      datePicker: [],
      inputVal4: '',
    });
  }

  tabCallback(key) {
    console.log(key);
  }
  render() {
    const w100 = { width: '100%' };
    const mt10 = { marginTop: '10px' };
    const children = [];

    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false },
    ];

    return (
      <div className="template">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
              <Input placeholder="input" value={this.state.inputVal1} allowClear onChange={this.onChange} />
          </Col>
          <Col className="gutter-row" span={6}>
            <Select mode="tags" value={this.state.inputVal2} style={{ width: '100%' }} onChange={this.handleChange} tokenSeparators={[',']}>
              {children}
            </Select>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <RangePicker
                style={w100}
                value={this.state.datePicker}
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                onChange={this.PickerChange}
                onOk={this.PickerOk}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <Radio.Group
              options={optionsWithDisabled}
              onChange={this.onChange4}
              value={this.state.inputVal4}
            />
          </Col>
        </Row>

        <div style={mt10}>
          <Row>
            <Col span={2} offset={1}>
              <Button type="primary" icon="search" onClick={this.search}>Search</Button>
            </Col>
            <Col span={2}>
              <Button type="danger" onClick={this.reset}>reset</Button>
            </Col>
          </Row>
        </div>

        {/* 切换 */}
        <Tabs onChange={this.tabCallback} type="card" defaultActiveKey="1" animated>
          <TabPane tab={
            <span><Icon type="apple" />Tab 1</span>
          } key="1">
            <TemplateTable />
          </TabPane>
          <TabPane tab={
            <span><Icon type="android" />Tab 2</span>
          } key="2">
            <CommentList data={this.props} />
          </TabPane>
        </Tabs>

      </div>
    )
  }
}

export default Template;

### React
### 一.事件
##### bind 方法
##### 1.1
`
onClick={this.handleClick.bind(this, 'test')} 或
onClick={::this.handleClick}
`
##### 1.2.箭头函数...

##### 2.React 中使用原生事件，一定要在组件卸载时手动移除，可能会造成内存泄漏
`this.$refs.button.removeEventLister('click', this.handleClick)`
##### 3.受控与非受控组件
##### 使用一个事件处理器，处理多个表单域
`
handleChange(name, e) {
  const { value } = e.target
  this.setState({
    [name]: value
  })
  }
`
```
function omniPoller(queryStatus, successCallback) {
    // Implement your solution here
    
    let time = 1000  // 时间 1s
    
    let index = 0 // index 定义为 fn 执行次数
    
    fn(time, successCallback)
    
    function fn(t, Callback) {  // fn 函数
        index ++ 
        if(index <= 3) {  // 自定义函数执行次数 如：三次  == queryStatus 函数
        let time = 1.5 * t
         setTimeout(()=> {     
                console.log(time)
               fn(time, successCallback)
           }, t)
        } else {
            Callback()
            return 
        }
    }
}
```
### 二. React组件
 ##### 1.1 Css in Js
 ##### 2 组件间通信
 

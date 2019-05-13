import React,{Component} from 'react';
import lifecycleimg from '../../static/images/react/lifecycle/lifecycle.png';
import { Row, Col } from 'antd';
class LifeCycle extends Component{
  constructor(props){
    super(props);
    this.state={
        number:1
    }
  };  
  
  render(){
      console.log('render')
    return (
      <div className="lifecycle">
          <Row>
              <Col span={12}>
                <p>生命周期图解</p>
                <p>
                 <img src={lifecycleimg} style={{width:488,height:400}} alt="生命周期"/>
                </p>

              </Col>
              <Col span={12}>
                  <h3>React 生命周期分为三种状态 1. 初始化 2.更新 3.销毁</h3>
                  <h4>
                      1.初始化
                  </h4>
                  <ul>
                      <li>
                          <h4>
                              getDefaultProps()
                          </h4>
                          <p>
                              设置默认的props，也可以用dufaultProps设置组件的默认属性.
                          </p>
                      </li>
                      <li>
                          <h4>
                              getInitialState()
                          </h4>
                          <p>
                                在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props
                          </p>
                      </li>
                        <li>
                            <h4>
                                componentWillMount()
                            </h4>
                            <p>
                                组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
                            </p>
                        </li>
                        <li>
                            <h4>
                                render()
                            </h4>
                            <p>
                                react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。
                            </p>
                        </li>
                        <li>
                            <h4>
                                componentDidMount()
                            </h4>
                            <p>
                                组件渲染之后调用，只调用一次。
                            </p>
                        </li>
                  </ul>
                  <h4>
                      2.更新
                  </h4>
                  <ul>
                      <li>
                          <h4>
                              componentWillReceiveProps(nextProps)
                          </h4>
                          <p>
                              组件初始化时不调用，组件接受新的props时调用。
                          </p>
                      </li>
                      <li>
                          <h4>
                              shouldComponentUpdate(nextProps, nextState)
                          </h4>
                          <p>
                              react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候
                          </p>
                      </li>
                      <li>
                          <h4>
                              componentWillUpdata(nextProps, nextState)
                          </h4>
                          <p>
                              组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state.
                              注意：在 componentWillUpdate 的函数当中，此时可以更改 state, 比如 nextState.name = '你想要更改的值'， render 的时候会用你更改的值。 这里面调用 this.setState() 要谨慎，不能每次在 componentWillUpdate 执行 this.setState()
                          </p>
                      </li>
                      <li>
                          <h4>
                              render()
                          </h4>
                          <p>
                              组件渲染
                          </p>
                      </li>
                        <li>
                            <h4>
                                componentDidUpdate()
                            </h4>
                            <p>
                                组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
                            </p>
                        </li>
                  </ul>
                    <h4>
                        3.卸载
                    </h4>
                    <ul>
                        <li>
                            <h4>
                                componentWillUnmount()
                            </h4>
                            <p>
                                组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
                            </p>
                        </li>
                  </ul>
                  <p>
                      原文链接：https://www.cnblogs.com/qiaojie/p/6135180.html
                  </p>
              </Col>
          </Row>

      </div>
    )
  }
}
export default LifeCycle;

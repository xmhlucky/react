import React,{Component} from 'react';

class Introduction extends Component{

	render(){
			console.log(1)
		return (
			<div className="introduction">
				<p>
				    React是一个JavaScript框架，用于构建“可预期的”和“声明式的”Web用户界面，它已经使Facebook更快地开发Web应用。
				</p>
				<h3>
				    一、特点：
				</h3>
				<ul>
					<li>
						1、简单简单的表述任意时间点你的应用应该是什么样子的，React将会自动的管理UI界面更新当数据发生变化的时候。
					</li>
					<li>
						2、声明式在数据发生变化的时候，React从概念上讲与点击了F5一样，实际上它仅仅是更新了变化的一部分而已。React是关于构造可重用组件的，实际上，使用React你做的仅仅是构建组建。通过封装，使得组件代码复用、测试以及关注点分离更加容易。
	         </li>
				</ul>
				<h3>
				    二、主要原理：
				</h3>
				<p style={{textIndent:'2em'}}>
				    传统的web应用，操作DOM一般是直接更新操作的，但是我们知道DOM更新通常是比较昂贵的。而React为了尽可能减少对DOM的操作，提供了一种不同的而又强大的方式来更新DOM，代替直接的DOM操作。就是Virtual DOM,一个轻量级的虚拟的DOM，就是React抽象出来的一个对象，描述dom应该什么样子的，应该如何呈现。通过这个Virtual DOM去更新真实的DOM，由这个Virtual DOM管理真实DOM的更新。
				</p>
				<p style={{textIndent:'2em'}}>
				    为什么通过这多一层的Virtual DOM操作就能更快呢？ 这是因为React有个diff算法，更新Virtual DOM并不保证马上影响真实的DOM，React会等到事件循环结束，然后利用这个diff算法，通过当前新的dom表述与之前的作比较，计算出最小的步骤更新真实的DOM。
				</p>
			</div>
		)
	}
}
export default Introduction;

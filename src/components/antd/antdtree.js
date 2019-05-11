
import React,{Component} from 'react';
import { Tree } from 'antd';
const { TreeNode } = Tree;
class AntdTree extends Component{
  constructor(props){
    super(props);
  }
   renderTreeNodes = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    })
  render(){
    const treeData = [
      {
        title: '0-0',
        key: '0-0',
        children: [{
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        }, {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        }, {
          title: '0-0-2',
          key: '0-0-2',
        }],
      }, {
        title: '0-1',
        key: '0-1',
        children: [
          { title: '0-1-0-0', key: '0-1-0-0' },
          { title: '0-1-0-1', key: '0-1-0-1' },
          { title: '0-1-0-2', key: '0-1-0-2' },
        ],
      }, {
        title: '0-2',
        key: '0-2',
      }];
    return (
    <Tree
        checkable
      >
      {this.renderTreeNodes(treeData)}
      </Tree>
    )
  }
}
export default AntdTree;

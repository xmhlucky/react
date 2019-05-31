import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
};

class BindFormItem extends Component {
    static contextTypes = {
        getFieldDecorator: PropTypes.func
    };
    constructor(props){
        super(props);
    }
    render(){
        let {name, label, value, required, message, rules, layout, children, ...others} = this.props;
        layout = layout || formItemLayout;
        rules = rules || [{required: required, message: message}];
        let {getFieldDecorator} = this.context;

        return <FormItem {...layout} label={label} {...others}>
            {
                getFieldDecorator(name, {
                    initialValue: value,
                    rules: rules //控制啥时候开始校验  默认是实时校验

                })(
                    children
                )
            }
        </FormItem>
    }
}

BindFormItem.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    message: PropTypes.string,
    rules: PropTypes.array,
    layout: PropTypes.object
};

class BindForm extends Component {
    static childContextTypes = {
        getFieldDecorator: PropTypes.func
    };
    getChildContext() {
        let {getFieldDecorator} = this.props.form;
        return {getFieldDecorator};
    }
    constructor(props){
        super(props);
    }
    render(){
        return <Form>
            {this.props.children}
        </Form>
    }
}
BindForm = Form.create()(BindForm);
BindForm.Item = BindFormItem;

export default BindForm;

import React, { Component } from 'react';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.children
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.children.map((c, i) => {
        if (c.props.children !== this.state.data[i].props.children) {
          this.changeBack(i);
          return this.cloneElement(c, i, this.props.color);;
        }
        return this.state.data[i];
      })
    });
  }

  changeBack(index) {
    setTimeout(() => {
      this.setState({
        data: this.state.data.map((c, i) => {
          if (index === i) {
            return this.cloneElement(c, i, '');
          }
          return this.state.data[i];
        })
      });
    }, this.props.timeout);
  }

  cloneElement = (child, key, className) => {
    return React.cloneElement(child, {
      className,
      key
    });
  };

  render() {
    return <>{this.state.data}</>;
  }
}

export default Wrapper;

import React, {Component} from 'react';

class SimpleComponent extends Component {

  // Life

  constructor (props) {
    super(props);

    this.state = {
      prop1: 1,
      prop2: 'some text'
    };
  }

  componentWillMount () {
    this.addOne();
  }

  componentDidMount () {
    this.addOne();
  }

  // Private

  addOne () {
    this.setState({
      prop1: this.state.prop1 + 1
    });
  }

  changeText(prop2) {
    this.setState({
      prop2
    });
  }

  // Render

  render () {
    return (
      <div>
        <h1>Value is {this.state.prop1}</h1>
        <button onClick={() => this.addOne()}>Add 1</button>
        <p/>
        <h1>Text value is {this.state.prop2}</h1>
        <input placeholder={this.props.textPlaceholder} onChange={event => this.changeText(event.target.value)}/>
      </div>
    )
  }
}

export default SimpleComponent;

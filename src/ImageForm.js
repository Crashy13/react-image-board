import { Component } from 'react';

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      url: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value }); // will work for both inputs because we called name in the key
  }

  handleSubmit(event) {
    event.preventDefault(); //keeps page from reloading on button press
    this.props.addImage(this.state); // calls add image when event is fired
    this.setState({description: '', url: ''}); //resets the keys to empty strings
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="url" name="url" value={this.state.url} onChange={this.handleInput} placeholder="Image URL"/>
        <input type="text" name="description" value={this.state.description} onChange={this.handleInput} placeholder="Image Caption"/>
        <button type="submit">Add Image</button>
      </form>
    )
  }
};

export default ImageForm

import { Component } from 'react';
import './App.css';

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeText(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleChangeImage(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="image" value={this.state.image} onChange={this.handleChangeImage}/>
        <input type="text" name="text" value={this.state.text} onChange={this.handleChangeText}/>
        <button type="">Cancel</button>
        <button type="submit">Add Image</button>
      </form>
    )
  }
};

class ImageList extends Component{
  render() {
    return(
      <ul>
        <li>
        <img src="this.state.image" alt=""/>
        <p>Image 1</p>
        </li>
        <li>
        <img src="this.state.image" alt=""/>
        <p>Image 2</p>
        </li>
        <li>
        <img src="this.state.image" alt=""/>
        <p>Image 3</p>
        </li>
      </ul>
    )
  }
};

class ImageBoard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    }
  }



  render() {
    return(
      <div>
        <ImageForm />
        <ImageList />
      </div>
    )
  }
}

export default ImageBoard;

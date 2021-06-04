import { Component } from 'react';
import './App.css';
import ImageForm from './ImageForm'
import ImageList from './ImageList'

class ImageBoard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      counter: 3,
    }

    this.addImage = this.addImage.bind(this);
  }

  componentDidMount() {
    const images = [
      { id: 1,
        url: 'https://am21.mediaite.com/tms/cnt/uploads/2019/04/Heroes-in-crisis-reveal-is-harsh.jpg',
        description: 'Image 1'
      },
      { id: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwAa50X_T2lzpZ4HktTHWt7qW7hU1Aj3bqw&usqp=CAU',
        description: 'Image 2'
      }
    ];

    this.setState({ images });
  }

  addImage(image) {
    image.id = this.state.counter;
    const images = [ ...this.state.images ]; // creates a shallow copy of images
    images.push(image); // pushes new image into images array
    // this.setState({ images });
    this.setState((state) => ({ images, counter: state.counter + 1 })); // re-render to update images and the counter
  }

  render() {
    return(
      <>
        <ImageForm addImage={this.addImage}/>
        <ImageList images={this.state.images} />
      </>
    )
  }
}

export default ImageBoard;

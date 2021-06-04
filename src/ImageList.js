import { Component } from 'react';

function ImageList(props) {

  const images = props.images.map((image) => (
    <li key={image.id}>
      <img src={image.url} alt={image.description}/>
      <p>{image.description}</p>
    </li>
  ));

  return(
    <ul>{images}</ul>
  )
}

export default ImageList

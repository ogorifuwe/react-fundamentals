const ImageList = props => {

  const listOfImages = props.images.map(image => {
    const { id, urls, alt_description } = image;
    return <img key={id} src={urls.regular} alt={alt_description}/>;
  });

  return (
    <div>
      <ul>{listOfImages}</ul>
    {props.images.length}
    </div>
  );
}

export default ImageList;

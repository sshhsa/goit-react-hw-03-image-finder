import ImageGalleryItem from './ImageGalleryItem';
import css from './Style.module.css';

function ImageGallery({ images }) {
  const imageArray = Object.values(images);
  return (
    <ul className={css.galleryList}>
      {imageArray.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
}

export default ImageGallery;

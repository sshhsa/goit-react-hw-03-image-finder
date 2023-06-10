import css from './Style.module.css';

function ImageGalleryItem({ image }) {
  return (
    <li className={css.imageGalleryItem}>
      <img src={image.webformatURL} alt={image.user} />
    </li>
  );
}

// {
//   "total": 1726082,
//     "totalHits": 500,
//       "hits": [
//         {
//           "id": 8042018,
//           "pageURL": "https://pixabay.com/photos/landscape-sea-beach-sand-conch-8042018/",
//           "type": "photo",
//           "tags": "landscape, sea, beach",
//           "previewURL": "https://cdn.pixabay.com/photo/2023/06/05/11/21/landscape-8042018_150.jpg",
//           "previewWidth": 150,
//           "previewHeight": 100,
//           "webformatURL": "https://pixabay.com/get/geca5e5bf8d0fb64455d9aa093ff16de96acf1fc93b232e52c4a7a2e4f12a4302ec1ca6a6e2787faf3e7d7d29ec4b7470c697687fbb6a28146f8697fbdfc7f7ab_640.jpg",
//           "webformatWidth": 640,
//           "webformatHeight": 427,
//           "largeImageURL": "https://pixabay.com/get/g78fa50d7aa873616bf3cc74b200650a1b9273e123f4d924aadef0113c6fdd1f7f11ff920baa0679a12a3be3fbc0127255faf41bf80b2b566cc65ca7aee6fbadf_1280.jpg",
//           "imageWidth": 7087,
//           "imageHeight": 4724,
//           "imageSize": 2977963,
//           "views": 6677,
//           "downloads": 6217,
//           "collections": 4,
//           "likes": 77,
//           "comments": 29,
//           "user_id": 3764790,
//           "user": "ELG21",
//           "userImageURL": "https://cdn.pixabay.com/user/2022/04/07/18-24-56-559_250x250.jpg"
//         }]
// }

export default ImageGalleryItem;

import React, { Component } from 'react';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import ButtonLoadMore from 'components/Button';

import css from './components/Style.module.css';

// npm i notiflix
// import Notiflix from 'notiflix';

class App extends Component {
  state = {};

  render() {
    return (
      <div className={css.container}>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Modal />
        <Loader />
        <ButtonLoadMore />
      </div>
    );
  }
}

export default App;

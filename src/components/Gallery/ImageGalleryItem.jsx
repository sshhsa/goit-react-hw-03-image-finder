import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';

import css from './ImageGallery.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { image } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <li className={css.imageGalleryItem}>
          <img
            src={image.webformatURL}
            alt={image.user}
            width="350"
            height="200"
            onClick={this.toggleModal}
          />
        </li>
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img
              src={image.largeImageURL}
              alt={image.user}
              className={css.imageModal}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

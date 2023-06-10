import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader';
import ButtonLoadMore from 'components/Button';

import css from './components/Style.module.css';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className={css.container}>
        <Searchbar />
        <ImageGallery />
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
        <Loader />
        <ButtonLoadMore />
      </div>
    );
  }
}

export default App;

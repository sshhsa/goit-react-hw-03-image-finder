import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/Gallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader';
// import ButtonLoadMore from 'components/Button';

import css from './components/Style.module.css';

import axios from 'axios';

class App extends Component {
  state = {
    showModal: false,
    images: [],
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async query => {
    try {
      const myKey = '35838965-00a6ae99c457ac18fcac9dde6';
      const url = `https://pixabay.com/api/?key=${myKey}&q=${query}&image_type=photo&orientation=horizontal&per_page=12`;
      const response = await axios.get(url);
      this.setState({
        images: response.data.hits,
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Backend:', this.state.images);
    }
  };

  onSubmit = query => {
    this.fetchImages(query);
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
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />

        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}

        <Loader />
        {/* <ButtonLoadMore /> */}
      </div>
    );
  }
}

export default App;

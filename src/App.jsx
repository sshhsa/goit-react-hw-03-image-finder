import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/Gallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import Message from 'components/Message/MessageEmpty';
// import ButtonLoadMore from 'components/Button';

import css from './components/Style.module.css';

import axios from 'axios';

class App extends Component {
  state = {
    showModal: false,
    images: [],
    isLoading: false,
    isFirstRender: true,
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async query => {
    try {
      this.setState({ isLoading: true });

      const myKey = '35838965-00a6ae99c457ac18fcac9dde6';
      const url = `https://pixabay.com/api/?key=${myKey}&q=${query}&image_type=photo&orientation=horizontal&per_page=12`;
      const response = await axios.get(url);

      this.setState({
        images: response.data.hits,
      });
      if (response.data.hits.length === 0) {
        throw new Error('Backend is empty by this request');
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false, isFirstRender: false });
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
    const { showModal, isLoading, isFirstRender } = this.state;

    return (
      <div className={css.container}>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />
        {/* {this.state.images.length === 0 && (
          <Message message="Backend is empty by this request" />
        )} */}
        {!isFirstRender && this.state.images.length === 0 && (
          <Message message="Backend is empty by this request" />
        )}
        {this.state.images && <ImageGallery images={this.state.images} />}

        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
        {/* <ButtonLoadMore /> */}
      </div>
    );
  }
}

export default App;

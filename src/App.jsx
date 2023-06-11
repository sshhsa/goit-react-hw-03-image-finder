import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/Gallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader';
import ButtonLoadMore from 'components/Button';

import css from './components/Style.module.css';

import axios from 'axios';

class App extends Component {
  state = {
    showModal: false,
    images: [],
  };

  async componentDidMount() {
    // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
    // https://pixabay.com/api/?key=35838965-00a6ae99c457ac18fcac9dde6   --- for postman
    try {
      const myKey = '35838965-00a6ae99c457ac18fcac9dde6';
      const url = `https://pixabay.com/api/?key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`;
      const response = await axios.get(url);
      this.setState({
        images: response.data,
      });
      console.log(this.state.images);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Final');
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className={css.container}>
        <Searchbar onSubmit={this} />
        <ImageGallery images={this.state.images.hits} />
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

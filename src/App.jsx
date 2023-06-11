import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/Gallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Message from 'components/Message/MessageEmpty';
import ButtonLoadMore from 'components/Button/Button';

import css from './components/Style.module.css';

import axios from 'axios';

class App extends Component {
  state = {
    showModal: false,
    images: [],
    isLoading: false,
    isFirstRender: true,
    page: 1,
    query: '',
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async (query, page = 1) => {
    try {
      this.setState({ isLoading: true });

      const myKey = '35838965-00a6ae99c457ac18fcac9dde6';
      const url = `https://pixabay.com/api/?key=${myKey}&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`;
      const response = await axios.get(url);

      if (response.data.hits.length === 0) {
        throw new Error('Backend is empty by this request');
      }

      if (page === 1) {
        this.setState({
          images: response.data.hits,
        });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false, isFirstRender: false });
      // console.log('Backend:', this.state.images);
    }
  };

  onSubmit = query => {
    if (query.trim() === '') {
      this.setState({
        images: [],
        pafe: 1,
      });
    } else {
      this.setState({ query });
      this.fetchImages(query);
    }
  };

  loadMoreImages = () => {
    const { query, page } = this.state;
    const nextPage = page + 1;

    this.fetchImages(query, nextPage);
    this.setState({ page: nextPage });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { isLoading, isFirstRender, images } = this.state;
    const hasMoreImages = images.length > 0 && images.length % 12 === 0;

    return (
      <div className={css.container}>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />

        {!isFirstRender && this.state.images.length === 0 && (
          <Message message="Backend is empty by this request" />
        )}
        {this.state.images && (
          <ImageGallery images={this.state.images} query={this.state.query} />
        )}

        {hasMoreImages && <ButtonLoadMore onClick={this.loadMoreImages} />}
      </div>
    );
  }
}

export default App;

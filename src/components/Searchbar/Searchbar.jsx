// import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { GoSearch } from 'react-icons/go';

import css from './Searchbar.module.css';

const schema = yup.object().shape({
  images: yup.string().min(4).max(20).required(),
});

const initialValues = {
  images: '',
};

function Searchbar() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <header className={css.searchbarHeader}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formSearch}>
          <button type="submit" className={css.buttonSearch}>
            <GoSearch className={css.iconSearch} />
          </button>

          <Field
            style={{ border: 'none' }}
            className={css.inputSearch}
            name="images"
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <ErrorMessage
            name="images"
            component="div"
            className={css.errorMessage}
          />
        </Form>
      </Formik>
    </header>
  );
}

// Searchbar.propTypes = {}

export default Searchbar;

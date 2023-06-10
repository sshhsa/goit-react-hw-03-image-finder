// import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import css from './Style.module.css';

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
          <Field
            className={css.inputSearch}
            name="images"
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <ErrorMessage name="images" component="div" />

          <button type="submit" className={css.buttonSearch}>
            <span className={css.buttonLabel}>Search</span>
          </button>
        </Form>
      </Formik>
    </header>
  );
}

// Searchbar.propTypes = {}

export default Searchbar;

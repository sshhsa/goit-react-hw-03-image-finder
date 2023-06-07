import css from './Style.module.css';

function Modal() {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Modal;

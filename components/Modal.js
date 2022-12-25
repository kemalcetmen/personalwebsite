import Modal from 'react-modal';
import styles from "../styles/Modal.module.scss";
import Image from 'next/image'
import x from "../public/x.svg"

const Modals = (props) => {
  const { modalIsOpen, setIsOpen, contents } = props

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      border: 'none',
      padding: 'none',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
    },
  };

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={ modalIsOpen }
      onRequestClose={ closeModal }
      ariaHideApp={ false }
      style={ customStyles }
      contentLabel="Modal"
    >
      <div onClick={ closeModal } className={ styles.deleteframe }>
        <Image
          src={ x }
          alt=""
          width={ 20 }
          className={ styles.delete }
        />
      </div>
      { contents }
    </Modal>
  );
}

export default Modals
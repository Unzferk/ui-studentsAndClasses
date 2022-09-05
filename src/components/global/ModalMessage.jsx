import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const ModalMessage = ({ title, message, show, setModal }) => {
	return (
		<>
			<Modal
				show={show}
				onHide={() => setModal()}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{message}</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' onClick={() => setModal()}>
						Got it!
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
ModalMessage.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	show: PropTypes.bool,
	setModal: PropTypes.func.isRequired,
};
export default ModalMessage;

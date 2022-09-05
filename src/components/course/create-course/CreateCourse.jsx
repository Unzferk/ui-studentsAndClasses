import { useState } from 'react';
import { postCourse } from '../../../redux/reducers/courseReducer';
import { useDispatch } from 'react-redux';
import './style.css';
import ModalMessage from '../../global/ModalMessage';
import useModal from '../../hooks/useModal';

const CreateCourse = () => {
	const [code, setCode] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const { showModal, mTitle, setMtitle, mMessage, setMmessage, mShow } =
		useModal();

	const dispatch = useDispatch();

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!code || !title) {
			setMtitle('Error');
			setMmessage("he field name or title can't be emtpy");
			showModal();
		}
		if (!description) setDescription('');
		if (code && title) {
			dispatch(postCourse({ code, title, description }));
		}
	};

	return (
		<div className='container container-course mt-2 mb-2 ml-2 mr-2 '>
			<div className='title-course h4'> Register a Course </div>

			<form className='create-max-with'>
				<div className='row'>
					<div className='col col-md-2'>
						<input
							type='text'
							className='form-control form-control-sm'
							placeholder='code'
							autoComplete='off'
							onChange={(e) => setCode(e.target.value)}
						/>
					</div>

					<div className='col col-md-3'>
						<input
							type='text'
							className='form-control form-control-sm'
							placeholder='title'
							autoComplete='off'
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>

					<div className='col col-md-5'>
						<input
							type='text'
							className='form-control form-control-sm'
							placeholder='description'
							autoComplete='off'
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<div className='col col-md-2'>
						<button
							className='btn btn-primary btn-sm'
							onClick={(e) => onSubmit(e)}
						>
							Create
						</button>
					</div>
					<ModalMessage
						title={mTitle}
						message={mMessage}
						show={mShow}
						setModal={showModal}
					/>
				</div>
			</form>
		</div>
	);
};

export default CreateCourse;

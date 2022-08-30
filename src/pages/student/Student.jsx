import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getStudents } from '../../redux/reducers/studentReducer';
import './style.css'


const Student = () => {
  const { students } = useSelector(state => state.students);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, [])

  return (
    <div className='container-fluid container-extended'>
      <div className='row'>
        <div className='col-7'>
          <div className='container mt-5 mb-16 ml-3 mr-5 component'>
            
          </div>

        </div>
        <div className='col-5'>
          <div className='container mt-5 mb-16 ml-5 mr-3 component'>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Student
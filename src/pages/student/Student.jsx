import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getStudents } from '../../redux/reducers/studentReducer';


const Student = () => {
  const {students} = useSelector(state => state.students);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getStudents());
  },[])

  return (
    <div>
      Student
    </div>
    
  )
}

export default Student
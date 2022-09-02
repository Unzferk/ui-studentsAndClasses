import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {  postStudent } from '../../../redux/reducers/studentReducer';
import { useDispatch } from 'react-redux';
import "./style.css"

const CreateStudent = () => {

  const { register, handleSubmit, reset, formState, formState: { errors } } = useForm({
    defaultValues: {
      studentId: "",
      firstName: "",
      lastName: ""
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ studentId: "", firstName: "", lastName: "" });
    }
  }, [formState, reset]);

  const onSubmit = async (data) => {
    dispatch(postStudent(data));
  }

  return (
    <div className='container container-student mt-2 mb-2 ml-2 mr-2'>
      <div className='title-student h4'> Register a Student </div>

      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='row'>
          <div className='col col-md-2'>
            <input type="text"
              className="form-control form-control-sm"
              placeholder='ci'
              autoComplete="off"
              {...register("studentId", { required: true })}
            />
            <div  className='msg-alert-student'>{errors.studentId?.type === 'required' && "This field is required"} </div>
          </div>

          <div className='col col-md-4'>
            <input type="text"
              className="form-control form-control-sm"
              placeholder='first name'
              autoComplete="off"
              {...register("firstName", { required: true })}
            />
            <div className='msg-alert-student'>{errors.firstName?.type === 'required' && "This field is required"} </div>
          </div>

          <div className='col col-md-4'>
            <input type="text"
              className="form-control form-control-sm"
              placeholder='last name'
              autoComplete="off"
              {...register("lastName", { required: true })}
            />
            <div className='msg-alert-student'>{errors.lastName?.type === 'required' && "This field is required"} </div>
          </div>

          <div className='col col-md-2'>
            <button type="submit" className="btn btn-primary btn-sm">Create</button>
          </div>

        </div>
      </form>

    </div>
  )
}

export default CreateStudent
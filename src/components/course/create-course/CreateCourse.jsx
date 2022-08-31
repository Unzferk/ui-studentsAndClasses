import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { getCourses, postCourse } from '../../../redux/reducers/courseReducer';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"

const CreateCourse = () => {

  const { register, handleSubmit, reset, formState, formState: { errors } } = useForm({
    defaultValues: {
      code: "",
      title: "",
      description: "",
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ code: "", title: "", description: "" });
    }
  }, [formState, reset]);
  
  const onSubmit = async (data) => {
    dispatch(postCourse(data));
  }

  return (
    <div className='container container-course mt-2 mb-2 ml-2 mr-2'>
      <div className='title-course h4'> Register a Course </div>

      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='row'>
          <div className='col col-md-2'>
            <input type="text"
              className="form-control form-control-sm"
              placeholder='code'
              autoComplete="off"
              {...register("code", { required: true })}
            />
            <div  className='msg-alert-course'>{errors.code?.type === 'required' && "This field is required"} </div>
          </div>

          <div className='col col-md-3'>
            <input type="text"
              className="form-control form-control-sm"
              placeholder='title'
              autoComplete="off"
              {...register("title", { required: true })}
            />
            <div className='msg-alert-course'>{errors.title?.type === 'required' && "This field is required"} </div>
          </div>

          <div className='col col-md-5'>
            <input type="text"
              className="form-control form-control-sm"
              placeholder='description'
              autoComplete="off"
              {...register("description", { required: true })}
            />
            <div className='msg-alert-course'>{errors.description?.type === 'required' && "This field is required"} </div>
          </div>

          <div className='col col-md-2'>
            <button type="submit" className="btn btn-primary btn-sm">Create</button>
          </div>

        </div>
      </form>

    </div>
  )
}

export default CreateCourse
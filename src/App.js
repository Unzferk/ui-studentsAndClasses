import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getStudents } from './redux/reducers/studentReducer';


function App() {
  const {students} = useSelector(state => state.students);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getStudents());
  },[])
  

  return (
    <div>
      Hello world!!!
    </div>
  );
}

export default App;

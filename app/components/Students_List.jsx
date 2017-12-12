import React from 'react';
import { Link } from 'react-router-dom';

const Student_List = (props) => {
  const students = props.students;
  return(
    <div>
    {students && students.map(student => (
      <div key={student.id}>
        <h3>
          <Link to={`/students/${student.id}`}>
            {student.name}
          </Link>
        </h3>
        </div>
    ))}
  </div>
  )
}
export default Student_List;
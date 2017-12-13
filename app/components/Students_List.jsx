import React from 'react';
import { Link } from 'react-router-dom';

const Student_List = (props) => {
  const students = props.students;
  return (
    <table>
      {students && students.map(student => (
        <tr key={student.id} >
          <td>
            {student.id}
          </td>
          <td>
            <Link to={`/students/${student.id}`}>
              {student.name}
            </Link>
          </td>
          <td>
            {student.email}
          </td>
        </tr>
      ))}
    </table>
  )
}
export default Student_List;
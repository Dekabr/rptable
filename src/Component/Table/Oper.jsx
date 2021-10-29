import './Oper.css';
import {Patient} from './Patient';

export function Oper (props) {
  return (
    <>
    <th colSpan="9">
      <h1>Oper№</h1>
    </th>
    <tr>
      <td>Name</td>
      <td>Date of Birth</td>
      <td>Receipt date</td>
      <td>Blood</td>
      <td>Diagnosis</td>
      <td>Operation plan</td>
      <td>Brigade</td>
      <td>Financing</td>
      <td>Time</td>
    </tr>
    {
      props.pac.map(patient => (
        <Patient key = {patient.id} name = {patient.name}/>
      ))
    }

    
    </>
  )
}

// <div>
    //   <div className = "header">
    //     <h1>Oper№</h1>
    //     <div className="th">
    //       <div className="td">
    //         <h2>Name</h2>
    //       </div>
    //       <div className="td">
    //         <h2>Date of Birth</h2>
    //       </div>
    //       <div className="td">
    //         <h2>Receipt date</h2>
    //       </div>
    //       <div className="td">
    //         <h2>Blood</h2>
    //       </div>
    //       <div className="td">
    //         <h2>Diagnosis</h2>
    //       </div>
    //       <div className="td">
    //         <h2>Operation plan</h2>
    //       </div>
    //       <div className="td">
    //         <h2>Brigade</h2>
    //       </div>
    //       <div className="td">
    //         <h2>Financing</h2>
    //       </div>
    //       <div className="td">
    //         <h2>Time</h2>
    //       </div>
    //     </div>
    //   </div>
    //   <Patient />
    // </div>
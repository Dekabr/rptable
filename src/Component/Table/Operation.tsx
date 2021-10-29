import './Operation.scss'
import { Patient } from './Patient'
import { IOperation } from '../../App'

interface IOperationProps {
  operation: IOperation
}

export function Operation({ operation }: IOperationProps) {
  return (
    <>
    <h1 className="operatin-header">{operation.name}</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Receipt date</th>
          <th>Blood</th>
          <th>Diagnosis</th>
          <th>Operation plan</th>
          <th>Brigade</th>
          <th>Financing</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {
            operation.patients.map(patient => (
              <Patient key={patient.id} patient={patient} />
            ))
          }
      </tbody>
    </table>
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

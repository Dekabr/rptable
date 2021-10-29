import {Oper} from "./Oper"

export function Table (props) {
  return (
    <table>
      {/* {
      props.pac.map(patient => (
        <Patient key = {patient.id} name = {patient.name}/>
      ))
    } */}
    {
      props.table.map(patient => (
        <Oper  key = {patient.oper} pac = {props.table}/>
      ))
    }

     
    </table>
  )
}
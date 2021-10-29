import { Operation } from './Operation'

interface ITableProps {
  operations: any[]
}

export function Table({ operations }: ITableProps) {
  return (
    <table>
      {/* {
      props.pac.map(patient => (
        <Patient key = {patient.id} name = {patient.name}/>
      ))
    } */}
      {
        operations.map(operation => (
          <Operation key={operation.id} operation={operation} />
        ))
      }

    </table>
  )
}

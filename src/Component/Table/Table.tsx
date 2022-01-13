import { IOperation, IPatient } from '../../App'
import { Operation } from './Operation'

interface ITableProps {
  operations: IOperation[]
  patients: Record<string, IPatient>
}

export function Table({ operations, patients }: ITableProps) {
  return (
    <>
      {operations.map((operation) => (
        <Operation
          key={operation.id}
          operation={operation}
          patients={patients}
        />
      ))}
    </>
  )
}

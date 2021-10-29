import { Operation } from './Operation'

interface ITableProps {
  operations: any[]
}

export function Table({ operations }: ITableProps) {
  return (
    <>
      {
        operations.map(operation => (
          <Operation key={operation.id} operation={operation} />
        ))
      }
    </>
  )
}

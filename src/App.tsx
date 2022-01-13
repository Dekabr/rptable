import { Table } from './Component/Table/Table'
import { Form } from './Component/Form/Form'
import React, { useState } from 'react'
import { v4 } from 'uuid'

export interface IPatient {
  id: string
  name: string
  dofB: Date
  rd: Date
  blood: BloodType
  diagnosis: string
  op: string
  brig: string
  fin: string
  time: Date
}

export interface IOperation {
  id: string
  name: string
  patients: string[]
}

export enum BloodType {
  I = 'I',
  II = 'II',
  III = 'III',
  IV = 'IV',
}

export const App = () => {
  // change it to useState if you want to change it in runtime
  const [operations, setOperations] = useState<Array<IOperation>>([
    {
      id: v4(),
      name: `Oper1`,
      patients: [`abc1`, `abc2`, `abc3`],
    },
  ])

  const [patients, setPatients] = useState<Record<string, IPatient>>({
    abc1: {
      id: `abc1`,
      name: 'Vasya Vasilievich Noga',
      dofB: new Date(`10,10,1894`),
      rd: new Date(`10,10,1912`),
      blood: BloodType.IV,
      diagnosis: 'AbraCadabra',
      op: 'Plus AbraHuyabra',
      brig: 'Tima, Tema, Collapse',
      fin: 'OMS',
      time: new Date(),
    },
    abc2: {
      id: `abc2`,
      name: 'Vasya Vasilievich Noga',
      dofB: new Date(`10,10,1894`),
      rd: new Date(`10,10,1912`),
      blood: BloodType.IV,
      diagnosis: 'AbraCadabra',
      op: 'Plus AbraHuyabra',
      brig: 'Tima, Tema, Collapse',
      fin: 'OMS',
      time: new Date(),
    },
    abc3: {
      id: `abc3`,
      name: 'Vasya Vasilievich Noga',
      dofB: new Date(`10,10,1894`),
      rd: new Date(`10,10,1912`),
      blood: BloodType.IV,
      diagnosis: 'AbraCadabra',
      op: 'Plus AbraHuyabra',
      brig: 'Tima, Tema, Collapse',
      fin: 'OMS',
      time: new Date(),
    },
  })

  const handleClickPatient = () => {}

  const handleClickOper = () => {
    setOperations([
      ...operations,
      {
        id: v4(),
        name: `Oper2`,
        patients: [`abc1`, `abc2`, `abc3`],
      },
    ])
  }

  return (
    <>
      <Form />
      <Table operations={operations} patients={patients} />
      <button onClick={handleClickOper}>Add</button>
    </>
  )
}

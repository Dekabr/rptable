import { Table } from './Component/Table/Table'
import React from 'react'

export interface IPatient {
  id: string,
  name: string,
  dofB: Date,
  rd: Date,
  blood: BloodType,
  diagnosis: string,
  op: string,
  brig: string,
  fin: string,
  time: Date,
}

export interface IOperation {
  id: string,
  name: string,
  patients: IPatient[]
}

export enum BloodType {
  I = 'I',
  II = 'II',
  III = 'III',
  IV = 'IV',
}

export const App = () => {
  // change it to useState if you want to change it in runtime
  const operations: IOperation[] = [
    {
      id: `op1`,
      name: `Oper1`,
      patients: [{
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
        {
          id: `abc2`,
          name: 'Vas Vasilievich Noga',
          dofB: new Date(`10,10,1894`),
          rd: new Date(`10,10,1912`),
          blood: BloodType.I,
          diagnosis: 'AbraCadabra',
          op: 'Plus AbraHuyabra',
          brig: 'Tima, Tema, Collapse',
          fin: 'OMS',
          time: new Date(),
        },
        {
          id: `abc3`,
          name: 'Vasyan Vasilievich Noga',
          dofB: new Date(`10,10,1894`),
          rd: new Date(`10,10,1912`),
          blood: BloodType.II,
          diagnosis: 'AbraCadabra',
          op: 'Plus AbraHuyabra',
          brig: 'Tima, Tema, Collapse',
          fin: 'OMS',
          time: new Date(),
        },
      ],
    },
  ]
  return <Table operations={operations} />
}

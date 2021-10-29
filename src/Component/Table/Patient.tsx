import dayjs from 'dayjs'

import { IPatient } from '../../App'

interface IPatientProps {
  patient: IPatient
}

export function Patient({ patient }: IPatientProps) {
  return (

    <tr>
      <td>{patient.name}</td>
      <td>{dayjs(patient.dofB).format('DD/MM/YYYY')}</td>
      <td>{dayjs(patient.rd).format('DD/MM/YYYY')}</td>
      <td>{patient.blood}</td>
      <td>{patient.diagnosis}</td>
      <td>{patient.op}</td>
      <td>{patient.brig}</td>
      <td>{patient.fin}</td>
      <td>{dayjs(patient.time).format('HH:mm:ss')}</td>
    </tr>

  )
}

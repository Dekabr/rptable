export function Patient (prop) {
  return (
    <>
      <tr>
        <td>{prop.name}</td>
        <td>{prop.dofB}</td>
        <td>{prop.rd}</td>
        <td>{prop.blood}</td>
        <td>{prop.diagnosis}</td>
        <td>{prop.op}</td>
        <td>{prop.brig}</td>
        <td>{prop.fin}</td>
        <td>{prop.time}</td>
      </tr>
    </>
  )
}
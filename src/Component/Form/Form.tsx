import React, { ChangeEvent, useState } from 'react'

export const Form = () => {
  const [name, setName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [receiptDate, setReceiptDate] = useState('')
  const [blood, setBlood] = useState('')
  const [diagnosis, setDiagnosis] = useState('')
  const [operationPlan, setOperationPlan] = useState('')
  const [brigade, setBrigade] = useState('')
  const [financing, setFinancing] = useState('')
  const [time, setTime] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <div>
      <h1>Form</h1>
      <label>
        {' '}
        Name
        <input
          type="text"
          name="firstName"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        {' '}
        Date Of Birth
        <input
          type="date"
          name="firstName"
          value={dateOfBirth}
          onChange={handleChange}
        />
      </label>
      <label>
        {' '}
        Receipt Date
        <input
          type="date"
          name="firstName"
          value={receiptDate}
          onChange={handleChange}
        />
      </label>
      <label>
        {' '}
        Blood
        <select>
          <option>I</option>
          <option>II</option>
          <option>III</option>
          <option>IV</option>
        </select>
      </label>
      <label>
        {' '}
        Diagnosis
        <input
          type="text"
          name="diagnosis"
          value={receiptDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        {' '}
        Operation plan
        <input
          type="text"
          name="Operation plan"
          value={operationPlan}
          onChange={handleChange}
        />
      </label>
      <label>
        {' '}
        Brigade
        <input
          type="text"
          name="diagnosis"
          value={diagnosis}
          onChange={handleChange}
        />
      </label>
      <label>
        {' '}
        Financing
        <select>
          <option>I</option>
          <option>II</option>
          <option>III</option>
          <option>IV</option>
        </select>
      </label>
      <label>
        {' '}
        Time
        <input
          type="time"
          name="diagnosis"
          value={time}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

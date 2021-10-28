import './Oper.css'
import { Patient } from './Patient'

export function Oper() {
  return (
    <div>
      <div className='header'>
        <h1>Oper№</h1>
        <div className='th'>
          <div className='td'>
            <h2>Name</h2>
          </div>
          <div className='td'>
            <h2>Date of Birth</h2>
          </div>
          <div className='td'>
            <h2>Receipt date</h2>
          </div>
          <div className='td'>
            <h2>Blood</h2>
          </div>
          <div className='td'>
            <h2>Diagnosis</h2>
          </div>
          <div className='td'>
            <h2>Operation plan</h2>
          </div>
          <div className='td'>
            <h2>Brigade</h2>
          </div>
          <div className='td'>
            <h2>Financing</h2>
          </div>
          <div className='td'>
            <h2>Time</h2>
          </div>
        </div>
      </div>
      <Patient />
    </div>
  )
}

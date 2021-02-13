import './App.css';
import './components/WinnerForm'
import { useState } from 'react'
import WinnerForm from './components/WinnerForm';

const App = () => {
  const [clicks, setClicks] = useState(0)
  return (
      <div className='col-title'>
        Hello World
      </div>
  )
}

export default App
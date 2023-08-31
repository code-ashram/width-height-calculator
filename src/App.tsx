import { useState } from 'react'

import Calculator from './Components/Calculator'

import styles from './App.module.css'

const App = () => {
  const [isShow, setIsShow] = useState(true)

  const handleShowOutput = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      <button className={styles.btn} onClick={handleShowOutput}>Show/hide</button>
      {isShow && <Calculator />}
    </>

  )
}

export default App

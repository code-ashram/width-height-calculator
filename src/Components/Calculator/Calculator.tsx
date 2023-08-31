import { FC, useEffect, useState } from 'react'

import styles from './Calculator.module.css'

const Calculator: FC = () => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const onResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return <div className={styles.calculator}>
    <output className={styles.output}>width: {width} height: {height}</output>
  </div>
}

export default Calculator

import { useState } from 'react'

// Style
import style from './style.module.css'

export default function Button() {
  const [state, setState] = useState(0)

  return (
    <button className={style.StyledButton} onClick={() => setState(state + 1)}>
      Click Me: {state}
    </button>
  )
}

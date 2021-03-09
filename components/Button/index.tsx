import { useState } from 'react'

// Style
import { StyledButton } from './style'

export default function Button() {
  const [state, setState] = useState(0)

  return <StyledButton onClick={() => setState(state + 1)}>Click Me: {state}</StyledButton>
}

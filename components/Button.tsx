import claxed from 'claxed'

// Style
const StyledButton = claxed.button`
  px-3
  py-2
  ${({ color }) => {
    switch (color) {
      case 'red':
        return 'bg-red-200'
      case 'blue':
        return 'bg-blue-200'
      default:
        return 'bg-gray-200'
    }
  }}
  bg-gray-200
  rounded-xl
`

interface IButton
  extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  color?: 'red' | 'blue'
}

export default function Button({ color, ...rest }: IButton) {
  return <StyledButton color={color} {...rest} />
}

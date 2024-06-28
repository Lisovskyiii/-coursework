import './style.scss'

export const Button = props => {
  return (
    <button type={props.type} {...props}>
      {props.children}
    </button>
  )
}

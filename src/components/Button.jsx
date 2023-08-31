import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, className, link, onClick}) => {
  return (
    <Link to={link}><button onClick={onClick} className={className}>{text}</button></Link>
  )
}

export default Button
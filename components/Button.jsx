const Button = ({title, handler}) => {
  return (
    <button className='text-white font-semibold hover:text-slate-300 transition-colors duration-300 whitespace-nowrap' onClick={handler}>
      {title}
    </button>
  )
}

export default Button

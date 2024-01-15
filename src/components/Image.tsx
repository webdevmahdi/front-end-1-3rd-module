const Image = ({imageUrl}) => {
  return (
    <div>
        <img className='border rounded-full w-24' src={imageUrl}></img>
    </div>
  )
}

export default Image
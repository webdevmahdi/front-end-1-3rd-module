import Image from './Image'
import mahdi from '../../public/mahdi.png'
import WithBorder from './WithBorder'

const UserWithBorder = WithBorder(Image)

const GameResult = () => {
  return (
    <div className='flex'>
        <Image imageUrl={mahdi}/>
        <UserWithBorder imageUrl={mahdi}/>
        <Image imageUrl={mahdi}/>
        <Image imageUrl={mahdi}/>
    </div>
  )
}

export default GameResult
import BigText from 'components/BigText'
import AltCont from 'components/Container/AltCont'
import { Image, Button, Link } from '@chakra-ui/react'

export default function Home() {
  return (
    <AltCont>
      <div className='flex flex-col items-center justify-center inset-0'>
        <BigText slides={['Welcome to', 'Pandamania.', 'Craze.']} />
      </div>
    </AltCont>
  )
}

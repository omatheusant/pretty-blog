import Image from "next/image"
import {Heart} from 'lucide-react'

const DonatePage = () => {
  return (
    <div className="flex flex-col items-center mt-20  text-center">
      <h1 className="text-4xl sm:text-6xl flex">Gostaria de me ajudar? <Heart size={30} /></h1>
      <h2 className="text-3xl sm:text-4xl">Chave PIX: 16992265097</h2>

      <Image className="" src={'/cute.gif'} width={200} height={200} alt=""/>
    </div>
  )
}

export default DonatePage
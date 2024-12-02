import Image from "next/image"
import dog from '@/assets/dogs/bean.jpg'

export const metadata = {
  title: "WiMBL | Dog",
}

export default function DogPage() {

  return (
    <div className="m-4 ring ring-fuchsia-400 rounded">
      <Image
      alt="dog"
      src={dog}
      className="rounded"/>
    </div>
  )
}
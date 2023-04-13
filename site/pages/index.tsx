import Image from 'next/image';
import { Inter } from 'next/font/google';
import AskElon from "../components/askelon"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      < AskElon />
    </div>
  )
}

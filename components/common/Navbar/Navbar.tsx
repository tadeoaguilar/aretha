

import { FC } from "react"
import { Container } from "@components/ui"
import Link from "next/link"
import s from "./Navbar.module.css"
import { Usernav } from "@components/common"
import Image from "next/image"

const Navbar: FC = () => {
  return (
    <Container>
      <div className={s.root}>
        <div className="flex flex-1 items-center">
         
        
            <Image src = '/Aretha.svg' alt= 'Aretha' width={150} height={100} layout="fixed"/>

       
          
         
          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={s.link}>Canastas</a>
            </Link>
            <Link href="/">
              <a className={s.link}>Regalos</a>
            </Link>
            <Link href="/">
              <a className={s.link}>Madres</a>
            </Link>
            
          </nav>

          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar

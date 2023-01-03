import React from 'react'
import { NavBar, Footer } from '../componets'

export default function layout({ children }) {
  return (
    <>
        <NavBar />
            <main>{children}</main>
        <Footer />
    </>
  )
}
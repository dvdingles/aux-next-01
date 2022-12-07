import Head from 'next/head'
import React, { Children } from 'react'

export const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <title>Auxx</title>
            <meta name='author' content='David Ingés' />
            <meta name='description' content='Información sobre cajas de carton' />
            <meta name='keywords' content='cajas, embalaje, cartón, Murcia, Auxiliar, manipuladora, David Inglés' />
        </Head>

        {/* Navbar */}

        <main>

            { children }

        </main>
    </>
  )
}

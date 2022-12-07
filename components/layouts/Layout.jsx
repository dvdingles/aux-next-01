import Head from 'next/head'
import React, { Children } from 'react'
import styles from './Layout.module.css'

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

        <header>
              <img className={styles.logo_aux} src="/logo-aux.svg" alt="aaa" />
        </header>

            { children }

        </main>
    </>
  )
}

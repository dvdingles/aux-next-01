import Head from 'next/head'
import Link from 'next/link'
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
              <buttom>
                <Link href={"./"}>
                  
                    <img className={styles.logo_aux} src="/logo-aux.svg" alt="aaa" />
                  
                </Link>
              </buttom>
        </header>


        

            { children }



        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aviso Legal{' '}
          </a>
        </footer>

        </main>
    </>
  )
}

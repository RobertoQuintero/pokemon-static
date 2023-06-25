import Head from "next/head"
import { Navbar } from "../ui"
type Props={
  children: JSX.Element | JSX.Element[]
  title?:string
}

const origin = (typeof window==='undefined') ?'':window.location.origin

export const Layout= ({children,title}:Props) => {

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Roberto Quintero" />
        <meta name="description" content={`Información sobre el Pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon,pokedex`} />
        <meta property="og:title" content={`Informacipon sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar/>
      <main style={{
        padding:'0 20px'
      }}>
        {children}
      </main>
    </>
  )
}

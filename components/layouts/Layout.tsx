import Head from "next/head"
import { Navbar } from "../ui"
type Props={
  children: JSX.Element | JSX.Element[]
  title?:string
}
export const Layout= ({children,title}:Props) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Roberto Quintero" />
        <meta name="description" content={`Información sobre el Pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon,pokedex`} />
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

import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Formulário Kiss</title>
        <meta name="description" content="Formulario criado com nextJs, chakra UI, React Hook Forms e Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Formulário</h2>
      </main>
    </>
  )
}

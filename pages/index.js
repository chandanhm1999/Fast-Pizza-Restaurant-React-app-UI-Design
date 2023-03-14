import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Featured from '@/components/Featured'
import PizzaList from '@/components/pizzaList'

export default function Home() {
  return (
    <div className={styles.continer}>
      <Head>
        <title>Pizza Restaurant!</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/checked.png" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  )
}

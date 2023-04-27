import Head from 'next/head'
// import styles from '@/styles/Home.module.css'
import Header from '../pages/components/Header';
import Carousel from './components/carousel';
import TicketList from './components/Ticket';

export default function Home() {
  return (
    <>
      <Head>
        <title>DLt Apps</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>
     <Carousel/>
     <TicketList/>
    </>
  )
}

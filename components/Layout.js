import Head from 'next/head';
import Navbar from './Navbar';
export default function Layout({ children }) {
    return (<>
        <Head>
            <title>Gate 2022</title>
            <meta name="description" content="Sample Gate Quiz Portal" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div>
            {children}
        </div>
    </>);
}
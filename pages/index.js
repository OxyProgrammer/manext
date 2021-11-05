import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Manext</title>
        <meta
          name='description'
          content='A scaffold project to give a quick start with NextJS and Material UI'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Manext
    </div>
  );
}
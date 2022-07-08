import Head from "next/head";
import Image from "next/image";
import NavTop from "./components/Navbar";
import MidSection from "./components/MidSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEE REAL ESTATE</title>
        <meta name='description' content='Generated by create next app' />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1'
          crossOrigin='anonymous'
        />
        <link rel='icon' href='../public/images/LogoMakr.png' />
      </Head>
      <NavTop />
      <MidSection/>
    </div>
  );
}

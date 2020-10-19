import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="about__main-container">
        <section className="about__hero">
          <div className="img-container">
            <img src="/wagner-nicolas.jpg" alt="Wagner Nicolas biography - blockchain developer" />
          </div>
          <div className="about__hero-text">
            <p>
            (TODO: change to I and the wording)
            Nicolas is a self-taught developer who has worked for Tradelab, Novactive, Air France and the French
            Administration. Beginning in June 2016, he became interested in blockchain technology. The transparent
            and disintermediate dimension of this blockchain protocol convinced him that it would be the next
            technology that would disrupt technology and society, just as the internet did in the 1990s. He won many
            hackathons (2nd BeMyApp, 2nd Startup weekend blockchain, 1st prize at Merkle Week with Dether). In
            addition, he regularly contributes to blockchain projects (Kleroterion, Abie fund) and frequently organizes
            blockchain workshops (HackerHouse, Blockfest).
            </p>
            <p style={{paddingTop: '1rem'}}>
              I want to create projects:
              <ul>
                <li>- open source,</li>
                <li>- focus on the real economy, these projects are rare compare Defi...,</li>
                <li>- decentralized as as much as possible.</li>
              </ul>
            </p>
            <p style={{paddingTop: '1rem'}}>
              About, my general vision about the blockchain, we are going to respond to the major challenges of the 
              blockchain, such as:
              <ul>
                <li>- scalability,</li>
                <li>- onboarding and the experience of (new) users,</li>
                <li>- governance of the protocol and decentralized applications,</li>
                <li>- and the security of smart contracts,</li>
              </ul>
              to make the blockchain the new generation of the internet.
            </p>
          </div>
        </section>
        <section className="social-links">
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Mail</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

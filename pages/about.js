import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="about__hero">
        <img className="about__img-container" src="/wagner-nicolas.jpg" alt="Wagner Nicolas biography - blockchain developer" />
        <div className="about__hero-text">
          <h1 style={{color: '#51c4e9', fontSize: '1.5rem', marginBottom: '2rem'}}>
            Nicolas
          </h1>
          <p className="p-indent">
            I am a self-taught developer who has worked as Freelance since 2014 for different startups 
            and corporates (Tradelab, Novactive, Air France, SNCF...).
            Beginning in June 2016, he became interested in blockchain technology. The transparent
            and disintermediate dimension of this blockchain protocol convinced him that it would be the next
            technology that would disrupt technology and society, just as the internet did in the 1990s. 
            To improve my development skils and to experiment the entrepreneuship mindset I participated some hackatons
            and I won some (2nd BeMyApp, 2nd Startup weekend blockchain, 1st prize at Merkle Week with Dether) and 
            organised some blockchain meetup.
            In 2017, I co-funded Kleros, the first decentralized trabunal who the juror are crowdsourced to solve any kind of disputes (insurance, moderation).
            It was a big challenge technically and humainement. In 2019, I left the project and take some rest :) .
            I took over freelance for web and blockchain and in parallel I continue some side project like Recover on Kleros hoping that Kleros and more globally
            all the blockchain ecosystem become mainstream to found the new internet of value.
          </p>
          <p className="p-indent" style={{paddingTop: '1rem'}}>
            About the projects I particularly want to be part:
            <ul>
              <li>- open source source and if possible transparency project,</li>
              <li>- project focus on the real economy (Defi is necessary but projects linked directly with the real economy as well...),</li>
              <li>- project where we pushed the decentralization as as much as possible.</li>
            </ul>
          </p>
          <p className="p-indent" style={{paddingTop: '2rem'}}>
            Finally, here is my general vision about the blockchain, we are going to respond to the major challenges of the 
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
        <ul className="about__social-links">
          <li>
            <a href="https://twitter.com/w_n1c01a5"><img className="about__social-links-icon .about__social-links--first" src="/twitter.svg" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nicolas-wagner-ab59249a"><img className="about__social-links-icon" src="/linkedin.svg" /></a>
          </li>
          <li>
            <a href="mailto:contact@wagner-nicolas.com"><img className="about__social-links-icon" src="/gmail.svg" /></a>
          </li>
          <li>
            <a href="https://github.com/n1c01a5"><img className="about__social-links-icon" src="/github.svg" /></a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

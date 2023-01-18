import React from "react"
import Head from "next/head";
import OCol from "../bemit/07-objects/o-col/o-col.js"
import OContainer from "../bemit/07-objects/o-container/o-container.js"
import BLayout from "../bemit/08-blocks/b-layout/b-layout.js"
import { m } from 'framer-motion';
import PAGE_TRANSITION from '../utils/pageTransitionsVars'
import Link from "next/link.js";

const Home = ({id, posts, home}) =>{
  const p = 'b-home';

  const easing = [.09,.55,.36,.82]
  const TOTAL_TIME = PAGE_TRANSITION.DURATION;
  const titleVariants = {
    initial: {y: '200%'},
    animate: {y: '0%'},
    exit: {y:'-110%'}
  };

  return(

<BLayout>
    <div className={`${p}`}>
    <Head>
    </Head>
      <div className={`${p}__contenido`}>
      <OContainer p={p} extraClasses={`${p}__wrapper`}>
        <OCol p={p} cols={{sm: 2, lg:6}}>
          <div className={`${p}__wrapper-logo`}>
            <h1>Dospeca.</h1>
          </div>
        </OCol>
        <OCol p={p} cols={{sm: 2, lg:6}}>
          <div className={`${p}__wrapper-button`}>
            <Link href={'https://wa.link/b6p4lb/'}><button >Whatsapp</button></Link>
          </div>
        </OCol>
      </OContainer>

      <OContainer p={p} extraClasses={`${p}__content`}>
      <OCol p={p} cols={{sm:4, lg:5}}>
        <div className={`${p}__wrapper`}>
        <div className={`${p}__wrapper-subtitle`}>
        <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME, delay:.3, ease: easing }}
              ><span className={`${p}__tagline`} >We connect with people</span></m.div></div>
          <div className={`${p}__wrapper-title`}>
          <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME, delay:.3, ease: easing }}
              ><h2 className={`o-font-title-home`}>Branding</h2></m.div></div>
        </div>
      </OCol>
      <OCol p={p} cols={{sm:4, lg:4}}>
      <div className={`${p}__wrapper`}>
      <div className={`${p}__wrapper-title`}>
      <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME, delay: .6, ease: easing }}
              ><h2 className={`o-font-title-home`}>UX/UI</h2></m.div></div>
      </div>  
      </OCol>
      <OCol p={p} cols={{sm:4, lg:3}}>
      <div className={`${p}__wrapper`}>
      <div className={`${p}__wrapper-title`}>
      <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME, delay: .9, ease: easing }}
              >
        <h2 className={`o-font-title-home`}>RRSS</h2></m.div></div>
      </div>
      </OCol>
      </OContainer>
      <OContainer p={p} extraClasses={`${p}__footer`}>
      <OCol cols={{sm:4, md:6, lg:12}}><hr className={`${p}__line-hr`}></hr></OCol>
        <OCol p={p} cols={{sm:1, lg: 2}}>
          <div className={`${p}__wrapper country`}>
            <h4>España</h4>
            <ul>
              <li>Argüelles<br/>28015, MAD</li>
            </ul>
          </div>
        </OCol>
        <OCol p={p} cols={{sm:1, lg: 2}}>
          <div className={`${p}__wrapper country`}>
            <h4>Perú</h4>
            <ul>
              <li>San Borja<br/>15036, LIM</li>
            </ul>
          </div>
        </OCol>
        <OCol p={p} cols={{sm:1, lg: 2}}>
          <div className={`${p}__wrapper country`}>
            <h4>Portugal</h4>
            <ul>
              <li>Lisboa<br/>1106, LIS</li>
            </ul>
          </div>
        </OCol>
        <OCol p={p} cols={{sm:1, lg: 2}}>
          <div className={`${p}__wrapper country`}>
            <h4>EE.UU</h4>
            <ul>
              <li>Indianápolis<br/>46077, IN</li>
            </ul>
          </div>
        </OCol>
        <OCol p={p} cols={{sm:2, lg: 2}}>
          <div className={`${p}__wrapper`}>
            <h4>Hablemos</h4>
            <ul>
              <li>hola@dospeca.com</li>
              <li>(+34) 625 788 094</li>
            </ul>
          </div>
        </OCol>
        <OCol p={p} cols={{sm:2, lg: 2}}>
          <div className={`${p}__wrapper social-media`}>
            <ul>
              <li><Link href={'https://www.facebook.com/dospeca'}>Facebook</Link></li>
              <li><Link href={'https://www.instagram.com/dospeca/'}>Instagram</Link></li>
              <li><Link href={'https://www.behance.net/contactodofacd'}>Behance</Link></li>
              <li><Link href={'https://www.linkedin.com/company/dospeca/'}>LinkedIn</Link></li>
            </ul>
          </div>
        </OCol>
        <OCol cols={{sm:4, lg:3}}>
          <div className={`${p}__wrapper`}>
            <span className={`${p}__legal mobile-none`}>
              Design and development by<br />
              <b>Dospeca.com</b>
            </span>
          </div>
        </OCol>
        <OCol cols={{sm:4, lg:9}}>
          <div className={`${p}__wrapper`}>
            <span className={`${p}__legal`}>
              <b>©2023 Dospeca™ All rights reserved.</b> Dospeca is a digital design agency. <br />
               Created to help our team and now it will save yours some valuable time.
            </span>
          </div>
        </OCol>
      </OContainer>
      </div>
      <div className={`${p}__wrapper-video`}>
      <video muted autoPlay loop>
        <source poster={'./liq.png'} src={'./video-vf.webm'} type="video/webm" />
      </video>
      </div>
    </div>
</BLayout>
  );
}
export default Home
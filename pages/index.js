import React, { use } from "react"
import Head from "next/head";
import OCol from "../bemit/07-objects/o-col/o-col.js"
import OContainer from "../bemit/07-objects/o-container/o-container.js"
import BLayout from "../bemit/08-blocks/b-layout/b-layout.js"
import { m } from 'framer-motion';
import PAGE_TRANSITION from '../utils/pageTransitionsVars'
import useIsTouchDevice from '../hooks/useIsTouchDevice'
import parallaxNode from '../utils/parallaxNode'
import Link from "next/link.js";
import Image from "next/image.js";

const Home = ({id, posts, home}) =>{
  const p = 'b-home';
  const lineEasing = [.25,.1,.25,1]
  const easing = [.09,.55,.36,.82]
  const TOTAL_TIME = PAGE_TRANSITION.DURATION;
  const titleVariants = {
    initial: {y: '200%'},
    animate: {y: '0%'},
    exit: {y:'-100%'}
  };
  const titleCountry = {
    initial: {y: '200%', opacity: 0},
    animate: {y: '0%', opacity: 1},
    exit: {y:'-100%', opacity: 0}
  };
  const lineVariants = {
    initial: {width: '0%'},
    animate: {width: '100%'},
    exit: {width:'0%'}
  };
  const preloadVariants = {
    initial: {y: '0'},
    animate: {y: '-100%'},
    exit: {y:'0%'}
  };

  const isMouseEnterClass = 'is-mouse-enter';
  const isTouch = useIsTouchDevice();

  const handlerMouseEnter = e => {
    e.currentTarget.classList.add(isMouseEnterClass);
  }

  const handlerMouseLeave = e => {
    e.currentTarget.classList.remove(isMouseEnterClass);
  }

  const handlerMouseMove = e => {
    e.currentTarget.classList.add(isMouseEnterClass);
    const wrapperImage =e.currentTarget.getElementsByClassName(`js-para`)[0];
    if(wrapperImage) parallaxNode(e, wrapperImage, -20)
  }

  const mouseEvents = (!isTouch) ?
  {
    onMouseEnter : handlerMouseEnter,
    onMouseLeave : handlerMouseLeave,
    onMouseMove : handlerMouseMove
  } : null;

  return(

<BLayout>
    <div className={`${p}`}>
    <Head>
        <title>{'Dospeca Studio - Coming soon'}</title>
        <meta property="og:title" content={'Dospeca Studio - Coming soon'} key="title" />
        <meta name="description" content={'Dospeca Branding Studio'}/>
        <meta name="keywords" content={'branding, digital, web, ux, ui, ux/ui, design, web design'}/>
    </Head>
      <div className={`${p}__contenido`}>
      <m.div className={`${p}__wrapper-preloader`}
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={preloadVariants}
                transition={{ duration: .85, delay:2, ease: easing }}
              >
                            <div className={`${p}__wrapper-logo`}>
            <div className={`${p}__wrapper-loader-animation`}><span className={`${p}__bomb`}></span></div>
          </div>       
      </m.div>
     
      <OContainer p={p} extraClasses={`${p}__wrapper`}>
        <OCol p={p} cols={{sm: 2, lg:6}}>
          <div className={`${p}__wrapper-logo`}>
            <h1><Image
              src={'/dospeca-logo.png'}
              width={'150'}
              height={'54'}
              alt={'Dospeca'}
            /></h1>
          </div>
        </OCol>
        <OCol p={p} cols={{sm: 2, lg:6}} >
          <div className={`${p}__wrapper-button`} >
            <Link href={'https://wa.link/b6p4lb/'}><button>Whatsapp</button></Link>
          </div>
        </OCol>
      </OContainer>

      <OContainer p={p} extraClasses={`${p}__content`}>
      <OCol p={p} cols={{sm:4, lg:4}}>
        <div className={`${p}__wrapper item-home`} {...mouseEvents}>
        <div className={`${p}__wrapper-subtitle`}>
        <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME, delay:2.3, ease: easing }}
              ><span className={`${p}__tagline`}>We connect with people</span></m.div></div>
          <div className={`${p}__wrapper-title`}>
          <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME, delay:2.3, ease: easing }}
              ><h2 className={`o-font-title-home`}>Branding</h2></m.div></div>
          <div className={`${p}__wrapper-video-item js-para`}>
            <video muted autoPlay loop>
              <source  src={'./rrss.webm'} type="video/webm" />
            </video>
          </div>
        </div>
      </OCol>
      <OCol p={p} cols={{sm:4, lg:4}}>
      <div className={`${p}__wrapper item-home`} {...mouseEvents}>
      <div className={`${p}__wrapper-title`}>
      <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME, delay: 2.6, ease: easing }}
              ><h2 className={`o-font-title-home`}>UX/UI</h2></m.div></div>
        <div className={`${p}__wrapper-video-item js-para`}>
          <video muted autoPlay loop>
              <source  src={'./uxui.webm'} type="video/webm" />
          </video>
        </div>
      </div>  
      </OCol>
      <OCol p={p} cols={{sm:4, lg:4}}>
      <div className={`${p}__wrapper item-home`} {...mouseEvents}>
      <div className={`${p}__wrapper-title`}>
      <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleVariants}
                transition={{ duration: TOTAL_TIME, delay: 2.9, ease: easing }}
              >
        <h2 className={`o-font-title-home`}>RRSS</h2></m.div></div>
        <div className={`${p}__wrapper-video-item js-para`}>
          <video muted autoPlay loop>
              <source  src={'./rrss.webm'} type="video/webm" />
          </video>
        </div>
      </div>
      </OCol>
      </OContainer>
      <OContainer p={p} extraClasses={`${p}__footer`}>
      <OCol cols={{sm:4, md:6, lg:12}}>
        <m.div
                  key={`detail-project-${id}-subtitle`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={lineVariants}
                  transition={{ duration: .9, delay: 2.6, ease: lineEasing }}>
            <hr className={`${p}__line-hr`}></hr>
        </m.div>
        </OCol>
        <OCol p={p} cols={{sm:1, lg: 2}}>
          <div className={`${p}__wrapper country`}>
          <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleCountry}
                transition={{ duration: TOTAL_TIME, delay: 2.6, ease: easing }}>
              <h4>Espa??a</h4>
              <ul>
                <li>Arg??elles<br/>28015, MAD</li>
              </ul>
          </m.div>
          </div>
        </OCol>

        <OCol p={p} cols={{sm:1, lg: 2}}>
          <div className={`${p}__wrapper country`}>
            
          <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleCountry}
                transition={{ duration: TOTAL_TIME, delay: 2.62, ease: easing }}>
            <h4>Per??</h4>
            <ul>
              <li>San Borja<br/>15036, LIM</li>
            </ul>
          </m.div>

          </div>
        </OCol>

        <OCol p={p} cols={{sm:1, lg: 2}}>
          <div className={`${p}__wrapper country`}>
          <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleCountry}
                transition={{ duration: TOTAL_TIME, delay: 2.64, ease: easing }}>
            <h4>Portugal</h4>
            <ul>
              <li>Lisboa<br/>1106, LIS</li>
            </ul>
          </m.div>
          </div>
        </OCol>
        <OCol p={p} cols={{sm:1, lg: 2}}>
          <div className={`${p}__wrapper country`}>
          <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleCountry}
                transition={{ duration: TOTAL_TIME, delay: 2.66, ease: easing }}>
            <h4>EE.UU</h4>
            <ul>
              <li>Indian??polis<br/>46077, IN</li>
            </ul>
          </m.div>
          </div>
        </OCol>
        <OCol p={p} cols={{sm:2, lg: 2}}>
          <div className={`${p}__wrapper country`}>
          <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleCountry}
                transition={{ duration: TOTAL_TIME, delay: 2.68, ease: easing }}>
            <h4>Hablemos</h4>
            <ul>
              <li><Link href={'mailto:hola@dospeca.com'}>hola@dospeca.com</Link></li>
              <li><Link href={'tel://+34625788094'}>(+34) 625 788 094</Link></li>
            </ul>
          </m.div>
          </div>
        </OCol>
        <OCol p={p} cols={{sm:2, lg: 2}}>
          <div className={`${p}__wrapper social-media country`}>
          <m.div
                key={`detail-project-${id}-subtitle`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleCountry}
                transition={{ duration: TOTAL_TIME, delay: 2.7, ease: easing }}>
            <ul>
              <li><Link href={'https://www.facebook.com/dospeca'}>Facebook</Link></li>
              <li><Link href={'https://www.instagram.com/dospeca/'}>Instagram</Link></li>
              <li><Link href={'https://www.behance.net/contactodofacd'}>Behance</Link></li>
              <li><Link href={'https://www.linkedin.com/company/dospeca/'}>LinkedIn</Link></li>
            </ul>
          </m.div>
          </div>
        </OCol>
        <OCol cols={{sm:4, lg:3}} extraClasses={'d-none-m'}>
          <div className={`${p}__wrapper wr-legal`}>
          <m.div
                  key={`detail-project-${id}-subtitle`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={titleCountry}
                  transition={{ duration: TOTAL_TIME, delay: 2.8, ease: easing }}>
            <span className={`${p}__legal mobile-none`}>
              Design and development by<br />
              <b>Dospeca.com</b>
            </span>
          </m.div>
          </div>
        </OCol>
        <OCol cols={{sm:4, lg:9}}>
          <div className={`${p}__wrapper wr-legal`}>
            <m.div
                  key={`detail-project-${id}-subtitle`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={titleCountry}
                  transition={{ duration: TOTAL_TIME, delay: 2.85, ease: easing }}>
              <span className={`${p}__legal`}>
                <b>??2023 Dospeca??? All rights reserved.</b> Dospeca is a digital design agency. <br />
                Created to help our team and now it will save yours some valuable time.
              </span>
            </m.div>
          </div>
        </OCol>
      </OContainer>
      </div>
      <div className={`${p}__wrapper-video`}>
        <div className={`${p}__poster-video`}>
          <Image 
            src={'/liq.jpg'}
            height={'1200'}
            width={'500'}
            alt={'poster'}
          />
        </div>
      <video muted autoPlay loop>
        <source poster={'./liq.jpg'} src={'./video-vf.webm'} type="video/webm" />
      </video>
      </div>
    </div>
</BLayout>
  );
}
export default Home
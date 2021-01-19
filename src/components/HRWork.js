import React from 'react';
import {motion} from 'framer-motion';
import { summary, leterThree } from './Animations';
import citricsLogo from '../assets/Citrics Icon.svg';
import eschoolLogo from '../assets/EscholIcon.svg';
import expatLogo from '../assets/ExpatIcon.svg';

export const HRWork = () => {


    return (
    <>
        <motion.section id='work' className='summary-container' variants={summary} initial='init' animate='after'>
            <motion.div className='about-me' variants={leterThree} initial='init' animate='after'>
                <motion.h2>My Work</motion.h2>
                
                <motion.article className='projects'>
                    <h3>Citrics</h3> <br />
                    <img src={citricsLogo} alt='Citrics Logo' width='50%'/>
                    <div>
                        <a href="https://expat-journal-chi.vercel.app/" target="_blank">Live Demo</a> &nbsp;
                        <a href="https://github.com/zachary-peterson/front-end-1" target="_blank">GitHub</a>
                    </div>

                    <p>As a Front-End developer worked with 5 developers remotely, mainly focused on dynamic icon and responsive design.</p>
                </motion.article>

                <motion.article className='projects'>
                    <h3>eSchool</h3>
                    <img src={eschoolLogo} alt='eschool logo' width='50%'/>
                    <div>
                        <a href="https://front-end-puce-nu.vercel.app/" target="_blank">Live Demo</a> &nbsp;
                        <a href="https://github.com/zachary-peterson/front-end" target="_blank">GitHub</a>
                    </div>

                    <p>As a Front-End developer worked with 3 developers remotely, mainly focused on Redux and application security.</p>
                </motion.article>

                <motion.article className='projects'>
                    <h3>Expat Journal</h3>
                    <img src={expatLogo} alt='expat logo' width='50%'/>
                    <div>
                        <a href="https://expat-journal-chi.vercel.app/" target="_blank">Live Demo</a> &nbsp;
                        <a href="https://github.com/zachary-peterson/front-end-1" target="_blank">GitHub</a>
                    </div>

                    <p>As a Front-End developer worked with 5 developers remotely, mainly focused on form design.</p>
                </motion.article>

            </motion.div>
        </motion.section>   
    </>
    )
}
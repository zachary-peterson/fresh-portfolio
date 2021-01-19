import React from 'react';
import {motion} from 'framer-motion';
import { summary, leterThree } from './Animations';
import citricsLogo from '../assets/Citrics Icon.svg'

export const HRContact = () => {


    return (
        <>
            <motion.div className='summary-container' variants={summary} initial='init' animate='after'>
            <motion.div className='about-me' variants={leterThree} initial='init' animate='after'>
                <motion.h2>Send me a message!</motion.h2>
                
                <div>
                    
                </div>

            </motion.div>
        </motion.div>
                
        </>
    )
}
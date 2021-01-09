import React from 'react';
import {motion} from 'framer-motion';
import { summary, leterThree } from './Animations';
import bungee from '../assets/001.jpg';
import skydive from '../assets/002.jpg';
import cave from '../assets/003.jpg'
import scene1 from '../assets/004.jpg';
import { useSelector } from 'react-redux';

export const HRAbout = () => {

    return (
        <motion.div id='about' className='summary-container' variants={summary} initial='init' animate='after'>
                <motion.div className='about-me' variants={leterThree} initial='init' animate='after'>
                    <motion.h2>Well hello!</motion.h2>
                    <motion.p> I'm Zach, a Full-Stack Web Developer, currently located in Upstate NY.</motion.p>
                    <motion.p>Throughout the years, I've built upon a wide range of skills to grow both professionally and intellectually.</motion.p>
                    <motion.p>From interning with TIME Magazine at the 2012 Republican National Convention, to working on set with William H. Macy in a deleted scene of Showtime's Shameless, one of my biggest strengths has always been my ability to adapt.</motion.p>
                    <motion.p>No matter where life's taken me though, one of my driving interests has always been the Tech. If the project involved making decisions about anything regarding the web, I'd be the first to volunteer.</motion.p>
                    <motion.p>Come 2015, the interest hit a fever-pitch, and I enrolled in a part-time Front-End Dev course. Upon completion, life happened, and code once again became a hobby.</motion.p>
                    <motion.p><span>TL;DR</span> With the current state of the world in mind, this past June I began Lambda School's Full-Stack Web Development course, and as we're wrapping up, I'm looking for an opportunity to bring my skills and technical knowledge to a long-term commitment.</motion.p>
                    <motion.p>If you think I'd be a good fit with your team, make sure to reach out!</motion.p>
                </motion.div>

                <motion.div className='about-me' variants={leterThree} initial='init' animate='after'>
                <div className='abt-block'>
                <motion.h3>Free time?</motion.h3>
                <motion.div className='photos'>
                    <img src={bungee} width='300px ' alt='bungee jumping' />
                    <div>
                    <img src={skydive} width='300px ' alt='skydiving' />
                    <img src={cave} width='300px ' alt='spelunking' />
                    </div>
                    <img src={scene1} width='620px ' alt='Coromandel, NZ' />
                </motion.div>
                </div>    
                </motion.div>

             
            </motion.div>
    )
}
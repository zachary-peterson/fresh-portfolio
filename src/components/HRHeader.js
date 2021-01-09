import React from 'react';
import { motion } from "framer-motion";
import {header, leterOne, leterTwo, leterThree} from './Animations';
import { FaLinkedin, FaTwitter, FaGithubSquare } from 'react-icons/fa';

export const HRHeader = () => {

    const openInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
      }

    return (
        <motion.div className='header' variants={header} initial='init' animate='after'>
                    <motion.h1>
                        <motion.span variants={leterOne} initial='init' animate='after'>Z</motion.span>
                        <motion.span variants={leterThree} initial='init' animate='after'>a</motion.span>
                        <motion.span variants={leterOne} initial='init' animate='after'>c</motion.span>
                        <motion.span variants={leterTwo} initial='init' animate='after'>h</motion.span>
                        <motion.span variants={leterThree} initial='init' animate='after'>a</motion.span>
                        <motion.span variants={leterThree} initial='init' animate='after'>r</motion.span>
                        <motion.span variants={leterOne} initial='init' animate='after'>y</motion.span>
                            <br/>
                        <motion.span variants={leterThree} initial='init' animate='after'>P</motion.span>
                        <motion.span variants={leterOne} initial='init' animate='after'>e</motion.span>
                        <motion.span variants={leterThree} initial='init' animate='after'>t</motion.span>
                        <motion.span variants={leterTwo} initial='init' animate='after'>e</motion.span>
                        <motion.span variants={leterTwo} initial='init' animate='after'>r</motion.span>
                        <motion.span variants={leterOne} initial='init' animate='after'>s</motion.span>
                        <motion.span variants={leterOne} initial='init' animate='after'>o</motion.span>
                        <motion.span variants={leterThree} initial='init' animate='after'>n</motion.span>
                    </motion.h1>
                    <motion.h3 variants={leterOne} initial='init' animate='after'>Full-Stack Web Developer</motion.h3>

                    <motion.div className='social' variants={leterOne} initial='init' animate='after'>
                        <FaLinkedin className='social-bttn' size='50px' color="#0e76a8" onClick={() => openInNewTab('https://www.linkedin.com/in/zacharytpeterson/')} /> &nbsp;&nbsp;
                        <FaTwitter className='social-bttn' size='50px' color="#00acee" onClick={() => openInNewTab('https://twitter.com/zipwrites')} /> &nbsp;&nbsp;
                        <FaGithubSquare className='social-bttn' size='50px' color="#000000" onClick={() => openInNewTab('https://github.com/zachary-peterson')} />
                    </motion.div>
                    <motion.div>
                        
                    </motion.div>
                </motion.div>
    )
}

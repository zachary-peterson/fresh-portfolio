import React from 'react';
import { motion } from "framer-motion";
import {summary, banner, certTitle} from './Animations'
import { FaHtml5,
     FaCss3Alt,
      FaJsSquare,
       FaReact,
        FaJava,
        FaAndroid, 
        FaDocker, 
        FaAdobe, 
        FaGitAlt, 
        FaLinux, 
        FaWindows, 
        FaMailBulk, 
        FaPhoneSquareAlt, 
        FaSteam, 
        FaDev, 
        FaInstagramSquare, 
        FaPython } from 'react-icons/fa';
import { SiPostgresql } from "react-icons/si";
import { Player } from 'video-react';
import profilePicture from '../assets/profile-photo.png';

export const HRDanger = () => {

    const openInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
      }

    return (
        <>
            <motion.div className='summary-container' variants={summary} initial='init' animate='after'>
                    <motion.div className='left' variants={banner} initial='init' animate='after'>
                        <motion.div className='skills-container'>
                            <motion.h2>Certifications</motion.h2>

                            <motion.div className='cert'>
                                <motion.h4 variants={certTitle} initial='init' whileHover='hover'
                                onClick={() => openInNewTab('https://lambdaschool.com/')}>
                                Lambda School</motion.h4>
                                
                                <motion.h5 variants={certTitle} initial='init' whileHover='hover'
                                onClick={() => openInNewTab('https://lambdaschool.com/courses/full-stack-web-development')}>
                                Full-Stack Web Development</motion.h5>
                                
                                <motion.h6>June 2020 - <span>In Progress</span></motion.h6>
                            </motion.div>

                            <motion.div className='cert'>
                                <motion.h4 variants={certTitle} initial='init' whileHover='hover'
                                onClick={() => openInNewTab('https://generalassemb.ly/')}>
                                General Assembly</motion.h4>
                                
                                <motion.h5 variants={certTitle} initial='init' whileHover='hover'
                                onClick={() => openInNewTab('https://generalassemb.ly/education/front-end-web-development-remote-online')}>
                                Front-End Web Development</motion.h5>
                                
                                <motion.h6>Oct. 2015 - Jan. 2016</motion.h6>
                            </motion.div>
                        </motion.div>

                        <div><br/><br/></div>
                        
                        <motion.div className='skills-container'>
                            <motion.h2>Technologies</motion.h2>
                        <motion.div className='cert'>
                            <motion.h4 >Skilled:</motion.h4>
                            <motion.div className='icons'>
                                <FaHtml5 size='35px' color="#e34c26" />
                                <FaCss3Alt size='35px' color="#2965f1" /> 
                                <FaJsSquare size='35px' color="#323330" />
                                <FaJava size='35px' color="#5382a1" />
                                <FaReact size='35px' color="#1f232a" /> 
                                <FaGitAlt size='35px' color='#F1502F' />
                                <FaAdobe size='35px' color='#FF0000' />
                                <FaLinux size='35px' color='#000000' />
                                <FaWindows size='35px' color='#00A4EF'/>
                            </motion.div>
                        </motion.div>

                        <motion.div className='cert'>
                            <motion.h4 >Practitioner:</motion.h4>
                            <motion.div className='icons'>
                                <FaPython size='35px' color='#306998'/>
                                <FaDocker size='35px' color="#0db7ed" />
                                <FaAndroid size='35px' color="#a4c639" />
                                <SiPostgresql size='35px' color='#336791' />
                            </motion.div>
                        </motion.div>
                        </motion.div>

                        
                    </motion.div>

                    <motion.div className='left'>
                        <motion.div className='skills-container' variants={banner} initial='init' animate='after'>
                            <img className='prof-pic' src={profilePicture} alt='Zachary Peterson'/>
                        </motion.div>

                        <motion.div className='sticker-container' variants={banner} initial='init' animate='after'>
                            <motion.div className='sticker'>
                                <motion.div>
                                    <motion.p className='nametop'><strong>HELLO</strong><br/>my name is:</motion.p>
                                    <motion.h2 className='nametag'>Zachary Peterson</motion.h2>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div className='left'>
                        <motion.div className='skills-container' variants={banner} initial='init' animate='after'>
                            <motion.h2>Up for a chat?</motion.h2>
                            <motion.ul>
                                <motion.li className='equalize'><FaMailBulk size='30px' color='#a16a35'/> : zachary@zpwrites.com</motion.li>
                                <motion.li className='equalize'><FaPhoneSquareAlt size='30px' color='#008000'/> : (607) 333-4627</motion.li>
                                <motion.li className='equalize'><FaDev size='30px'/> : @zacharypeterson</motion.li>
                                <motion.li className='equalize'><FaSteam size='30px' color='#1b2838'/> : @zpwrites</motion.li>
                                <motion.li className='equalize'><FaInstagramSquare size='30px' color='#bc2a8d'/> : @zipwrites</motion.li>
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                    
                </motion.div>
            </>
    )
}
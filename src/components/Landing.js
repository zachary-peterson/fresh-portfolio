import React from 'react';
import { motion } from "framer-motion";
import { HRLanding } from './HRLanding';
import { leterOne } from './Animations';
import { FaDice } from 'react-icons/fa';

export const Landing = () => {

    return (
        <motion.section className='container'>
            <motion.button className='toggle' variants={leterOne} initial='init' animate='after'><FaDice size='50px' /></motion.button>
            
            <HRLanding />
            
        </motion.section>
    )
}
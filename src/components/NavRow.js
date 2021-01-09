import React from 'react';
import { motion } from "framer-motion";
import {navRow, rowLink} from './Animations'

export const NavRow = () => {
    return (
        <motion.div className='navrow' variants={navRow} initial='init' animate='after'>
            <motion.button className='row-link' variants={rowLink} initial='init' animate='after' whileHover='hover'><a href='#about' className='row-link'>About</a></motion.button>
            <motion.button className='row-link' variants={rowLink} initial='init' animate='after' whileHover='hover'>Work</motion.button>
            <motion.button className='row-link' variants={rowLink} initial='init' animate='after' whileHover='hover'>Contact</motion.button>
        </motion.div>
    )
}
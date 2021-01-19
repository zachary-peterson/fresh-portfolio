import React from 'react';
import { motion } from "framer-motion";
import {navRow, rowLink} from './Animations'

export const NavRow = () => {
    return (
        <motion.div className='navrow' variants={navRow} initial='init' animate='after'>
            <motion.button className='row-link' variants={rowLink} initial='init' animate='after' whileHover='hover'><a href='#about' className='row-link'>About</a></motion.button>
            <motion.button className='row-link' variants={rowLink} initial='init' animate='after' whileHover='hover'><a href='#work' className='row-link'>Work</a></motion.button>
            <motion.button className='row-link' variants={rowLink} initial='init' animate='after' whileHover='hover'><a href='#contact' className='row-link'>Contact</a></motion.button>
        </motion.div>
    )
}
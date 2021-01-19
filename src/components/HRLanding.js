import React from 'react';
import { motion } from "framer-motion";
import {summary} from './Animations';
import { NavRow } from './NavRow';
import { HRHeader } from './HRHeader';
import { HRDanger } from './HRDanger';
import bungee from '../assets/001.jpg';
import skydive from '../assets/002.jpg';
import cave from '../assets/003.jpg'
import scene1 from '../assets/004.jpg';
import ScrollableAnchor from 'react-scrollable-anchor';
import { HRAbout } from './HRAbout';
import { HRContact } from './HRContact';
import { HRWork } from './HRWork';

export const HRLanding = () => {
    return (
        <div>


            <HRHeader />
            <NavRow />
            <HRDanger />
            <HRAbout />
            <HRWork />
            <HRContact />

            <motion.div className='summary-container'>
                
            </motion.div>


        </div>
    )
}
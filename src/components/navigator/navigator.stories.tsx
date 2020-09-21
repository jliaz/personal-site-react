import React from 'react';
import Navigator from './navigator.component';

export default {
    title: 'Navigator',
    component: Navigator,
}

export const Default = () => <Navigator 
    moveUp={()=>{}}
    moveDown={()=>{}}
    move={()=>{}}
    items={["Home", "About", "Experience", "Extra"]}
    currentItem="Home"
    ></Navigator>
import React, { Component } from 'react';
import { SkillsChart } from './SkillsChart.js';
import { GoogleChart } from './GoogleChart.js';
import { MobileSkillsMenu, MobileSkillsProps } from './MobileSkillsMenu.js';


/*
We have to take into account I.E. 11, and it's dislike of the canvas element.
Thus in I.E. 11, I cannot use ChartJS and instead use the Google Charts API,
while in other browsers I use ChartJS, as it is supported in laptops with
Hi DPI screen. Thus this ChartComponent handles detection of I.E. 11, and renders
the according component for the chart.
*/
const ChartComponent = props => {
    const internet_explorer = Boolean(document.documentMode);
    const chart_ref = React.createRef();
    return (
        <div className={`${(internet_explorer) ? 'pt-2' : 'pt-0'} px-0 m-0`}>
            {
                !(internet_explorer) ?
                <SkillsChart ref_prop={chart_ref} /> :
                <GoogleChart />
            }
            <MobileSkillsMenu />
        </div>
    )
} 


export { ChartComponent };

import React, { Component } from 'react';
import './Second Page.css';


/*
The properties that are used in the MobileSkillsMenu component.
On small devices and below ( < 768px) all skills are given a rating
out of 5 stars. Light-gray means an empty star, dark-gray means the star
is already full. The header property is the skill name, the stars 
property represents how many stars it should get.

The heading and stars components combine to give you the MobileSkillsMenu
component. at the bottom.
*/
const MobileSkillsProps = [
    {
        header: 'Python',
        stars: 3
    },
    {
        header: 'HTML, CSS',
        stars: 2.5
    },
    {
        header: 'JavaScript',
        stars: 2.5
    },
    {
        header: 'Bootstrap',
        stars: 2
    },
    {
        header: 'REACTjs',
        stars: 1.5
    },
    {
        header: 'Django',
        stars: 1.5
    },
    {
        header: 'SQL/SQLite3',
        stars: 1.5
    },
    {
        header: 'Git/GitHub',
        stars: 1.5
    },
    {
        header: 'Object Oriented Design',
        stars: 2
    },
    {
        header: 'Willingness to learn',
        stars: 5
    }
];


/*
The heading for a certain skill.
*/
const Heading = props => {
    return (
        <h5 className={`col-7 text-left m-0 px-0 skill-heading font-weight-normal`}>
            {props.header}
        </h5>
    );
}


/**
 * The stars each skill have. To determine the color for the star, do the following:
 * 1) Subtract the stars property from the index value
 * 2) If the difference is greater than or equal to 0, do nothing. It will be filled dark gray.
 * 3) If the difference === -0.5, then you have a half star. If you're in internet explorer,
 * this is an empty star (I.E. doesn't support linear gradients). Otherwie, use the half-star
 * class.
 */
const Stars = props => {
    return (
        <div className={`col-5 px-0 text-right`}>
            {
                [1, 2, 3, 4, 5].map((val, index) => {
                    let difference = props.stars - (index + 1);
                    console.log(difference);
                    return (
                        <span 
                            className={`${(difference >= 0) ? '' : (difference === -0.5) ?
                                          Boolean(document.documentMode) ? 'gray' : 'half-star' : 'gray'} star`} 
                            key={`star_${(index + 1)}`}>&#9733;</span>
                    );
                })
            }
        </div>
    );
} 


const MobileSkillsMenu = props => {
    return(
        <div className="w-100 align-items-center d-md-none mx-0 h-100">
            {
                MobileSkillsProps.map((prop, index) => {
                    return(
                        <div className="row m-0 p-0 d-flex align-items-center" key={`skill_${index + 1}`}>
                            <Heading {...prop} />
                            <Stars {...prop} />
                        </div>
                    );
                })
            }
        </div>
    )
}


export { MobileSkillsMenu, MobileSkillsProps };

import React, { Component } from 'react';
import './Second Page.css';

const MobileSkillsProps = [
    {
        header: 'Python',
        stars: 3,
        oop: false
    },
    {
        header: 'HTML, CSS',
        stars: 2.5,
        oop: false
    },
    {
        header: 'JavaScript',
        stars: 2.5,
        oop: false
    },
    {
        header: 'Bootstrap',
        stars: 2,
        oop: false
    },
    {
        header: 'REACTjs',
        stars: 1.5,
        oop: false
    },
    {
        header: 'SQL/SQLite3',
        stars: 1.5,
        oop: false
    },
    {
        header: 'Git/GitHub',
        stars: 1.5,
        oop: false
    },
    {
        header: 'Object Oriented Design',
        stars: 2.5,
        oop: true
    },
    {
        header: 'Willingness to learn',
        stars: 5,
        oop: true
    }
];

const StarArray = [1, 2, 3, 4, 5];

const Heading = props => {
    return (
        <h5 className={`${(props.oop) ? 'col-7' : 'col-7'} text-left m-0 px-0 skill-heading font-weight-normal`}>
            {props.header}
        </h5>
    );
}

const Stars = props => {
    return (
        <div className={`${(props.oop) ? 'col-5' : 'col-5'} px-0 text-right`}>
            {
                StarArray.map((val) => {
                    let difference = props.stars - val;
                    // let difference = 5 - (props.stars - (val + 1));
                    // console.log(difference);
                    return (
                        <span 
                            className={`${(difference >= 0) ? '' : (difference === -0.5) ? 'half-star': 'gray'} star`} 
                            key={`star_${val}`}>&#9733;</span>
                    );
                })
            }
        </div>
    );
} 

// class Stars extends Component {
//     render() {
//         return (
//             <div>
//             </div>
//         )
//     }
// }

// export { Stars };
const MobileSkillsMenu = props => {
    return(
        <div className="w-100 align-items-center d-md-none mx-0 h-100">
            {
                MobileSkillsProps.map((prop, index) => {
                    // w-100
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
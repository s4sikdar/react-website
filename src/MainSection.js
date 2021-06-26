import './Navbar.css';
import "./FrontPage.css";
import './Text Formatting and Styling.css';
import React, { useState } from 'react';
import { IconTag } from './CommonUtilities.js';
import { Tooltip } from 'reactstrap';

/* 
The classes responsible for the icons that show.
Font Awesome and Material Icons are used for this, and they
just make use of classes. These are all the links to various
classes.
*/
const IconProps = [
    {
        italic_tag: {
            class_name: 'color-light mx-lg-5 smaller',
        },
        link_tag: {
            link: 'Sailesh Sikdar Resume Winter 2021 updated.pdf',
            id: 'Resume',
        },
        classname_inner: 'fas fa-file-pdf fa-sm color-light resume'
    },
    {
        italic_tag: {
            class_name: 'color-light link-icon mx-lg-5',
        },
        link_tag: {
            link: 'https://ca.linkedin.com/in/sailesh-sikdar-96277a17a',
            id: 'Linkedin',
        },
        classname_inner: 'fab fa-linkedin fa-sm color-light'
    },
    {
        italic_tag: {
            class_name: 'color-light link-icon mx-lg-5 github',
        },
        link_tag: {
            link: 'https://github.com/s4sikdar',
            id: 'Github',
        },
        classname_inner: 'fab fa-github fa-sm color-light'
    },
    {
        italic_tag: {
            class_name: 'color-light link-icon mx-lg-5 pb-0 mb-0',
            id: 'outer-italic-tag'
        },
        link_tag: {
            link: 'mailto:saileshsikdar1@gmail.com',
            id: 'Gmail',
        },
        classname_inner: 'iconify color-light'
    }
];

/* 
The Icon component responsible for the icon you see on the front page, and the tooltip that shows when hovering
over the icon.
*/
const Icon = props => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <React.Fragment>
            {/* 
            The icon responsible for 
            */}
            {/* <i className = {props.classname_outer} id = {(id === 'Gmail') ? 'outer-italic-tag' : ''}>
                <a target = "_blank" rel="noreferrer" className = {props.link_classname} href = {props.link} id = {id}>
                    
                </a>
            </i> */}
            <IconTag {...props} rel="noreferrer" target="_blank">
                {
                    (props['link_tag'].id === 'Gmail') ? 
                    <span className={props.classname_inner} data-icon="mdi-gmail" data-inline="false"></span> :
                    <i className = {props.classname_inner}></i>
                }
            </IconTag>
            {/* 
            Tooltip from reactstrap, placed at the bottom of the icon when hovered. I don't know React well enough to
            know about hooks, or much about Reactstrap. This I just got from here: https://reactstrap.github.io/components/tooltips/
            I just changed the placement and the target.
            */}
            <Tooltip 
            placement = 'bottom'
            target = {(props['link_tag'].id === 'Gmail') ? 'outer-italic-tag' : props['link_tag'].id } 
            isOpen={tooltipOpen} toggle = {toggle}
            >
                {`My ${props['link_tag'].id}`}
            </Tooltip>
        </React.Fragment>
    );
};


/*
This is the div that is responsible for the front page of the site.
The h1 tag is what has my name, an the second div nested inside stores the icons.
Since I make use of the bootstrap grid sytems, there are a couple of nested divs:
the container-fluid div, then the row div, then the column div. Inside is another
row div which has the icons.  
*/
const MainPage = props => {
    return (
        <div className = "main-page w-100 h-100 dark-hover container-fluid d-flex p-0">
            <div className = "row w-100 align-items-center m-0">
                <div className = "col-12 w-100 align-self-center px-0">
                    <h1 className = {"align-self-center text-center " + 
                                    "w-100 pb-lg-0 mb-lg-0 pb-1 translate-down " + 
                                    "position-relative main-header light-after color-light header-font"}>
                        {props.name}
                    </h1>
                    <div className = {"row justify-content-lg-center " + 
                                    "justify-content-between align-items-center " +
                                    "pt-0 mt-3 mt-md-2 pt-2 icon-container mx-auto d-none d-sm-flex"}>
                        {
                            IconProps.map((icon_prop, index) => {
                                return <Icon {...icon_prop} key = {`${icon_prop.id}_${index}`}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export { MainPage };

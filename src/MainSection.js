import './Navbar.css';
import "./FrontPage.css";
import './Text Formatting and Styling.css'
import React, { useState } from 'react'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';
import { Tooltip } from 'reactstrap';

const IconProps = [//resume
    {
        classname_outer: 'color-light mx-lg-5 smaller',
        link_classname: '',
        link: '#',
        id: 'Resume',
        classname_inner: 'fas fa-file-pdf fa-sm color-light resume'
    },
    {
        classname_outer: 'color-light link-icon mx-lg-5',
        link_classname: '',
        link: 'https://ca.linkedin.com/in/sailesh-sikdar-96277a17a',
        id: 'Linkedin',
        classname_inner: 'fab fa-linkedin fa-sm color-light'
    },
    {
        classname_outer: 'color-light link-icon mx-lg-5 github',
        link_classname: '',
        link: 'https://github.com/s4sikdar',
        id: 'Github',
        classname_inner: 'fab fa-github fa-sm color-light'
    },
    {
        classname_outer: 'color-light link-icon mx-lg-5 pb-0 mb-0',
        link_classname: '',
        link: 'mailto:saileshsikdar1@gmail.com',
        id: 'Gmail',
        classname_inner: 'iconify color-light'
    }
];


const Icon = props => {
    const { id } = props;
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    // ${(id === 'Gmail') ? 'translate-down' : ''}
    return (
        <React.Fragment>
            <i 
            className = {props.classname_outer}
            id = {(id === 'Gmail') ? 'outer-italic-tag' : ''}>
                <a target = "_blank"
                rel="noreferrer"
                // id = {props.id}
                className = {props.link_classname}
                href = {props.link}
                id = {id}
                //    data-toggle = {props.github ? "" : "tooltip"}
                //    data-placement = {props.github ? "" : (props.id == "Gmail") ? "top": "bottom"}
                //    title = {props.github ? "" : `My ${props.id}`}
                //    data-animation = {props.github ? "" : "true"}
                //    data-offset = {props.data_offset} 
                >
                    {
                        (id === 'Gmail') ? 
                        <span className={props.classname_inner} data-icon="mdi-gmail" data-inline="false"></span> :
                        <i className = {props.classname_inner}></i>
                    }
                </a>
            </i>

            <Tooltip 
            // placement = {(id === 'Gmail') ? 'top' : 'bottom'}
            placement = 'bottom'
            target = {(id === 'Gmail') ? 'outer-italic-tag' : id } 
            isOpen={tooltipOpen} toggle = {toggle}
            // modifiers = {{offset: (id == 'Gmail') ? {offset: '0px,0px,-10px'} : {}}}
            >
                {`My ${id}`}
            </Tooltip>
        </React.Fragment>
    );
};


const MainSection = props => {
    return (
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
    )
};

const MainPage = props => {
    return (
        <div className = "main-page w-100 h-100 dark-hover container-fluid d-flex p-0">
            {/* <div className = "row align-self-center w-100"> */}
                {/* <h1 className = "text-center w-100 pl-2">Sailesh Sikdar</h1> */}
                {/* <div className = "row w-100 d-flex align-items-center dark pl-2">
                    <h2>Extra text</h2>
                </div> */}
            {/* </div> */}
            <MainSection name = {props.name} />
        </div>
    )
};

const ThirdComponent = props => {
    return (
        <ul className="nav fixed-top light justify-content-end">
            {props.values.map((value, index) => {
                return (
                    (index !== (props.values.length - 1)) ?
                    <a key = {index} className = "nav-list-item light p-2 position-relative text-decoration-none" href = "#">
                        {value}
                    </a> :
                    <a key = {index} className = "nav-list-item light p-2 mr-1 position-relative text-decoration-none" href = "#">
                        {value}
                    </a>
                );
            })}
        </ul>
    )
};

const FourthComponent = props => {
    return (
        <ul className="nav fixed-top transparent justify-content-end">
            {props.values.map((value, index) => {
                return (
                    (index != (props.values.length - 1)) ?
                    <a key = {index} className = "transparent-item p-2 position-relative text-decoration-none" href = "#">
                        {value}
                    </a> :
                    <a key = {index} className = "transparent-item p-2 mr-4 position-relative text-decoration-none" href = "#">
                        {value}
                    </a>
                );
            })}
        </ul>
    )
};

export { MainPage, ThirdComponent, FourthComponent };
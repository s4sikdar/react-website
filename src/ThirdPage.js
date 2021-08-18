import React, { Component } from 'react';
import { SectionHeader } from './CommonUtilities.js';
import './Text Formatting and Styling.css';
import './Third Page.css';
import './Database\ Icon.png';
import './Table database.svg';
import './New\ Dino\ Sprite.png';
import './Database\ Icon.png';
import './New\ Website\ Dino\ Sprite\ Small.png';


/**
 * Documentation on ProjectProps:
 * 
 * This is used in the project section of the third page. Each section that talks about one 
 * project is represented in one of these object literals. Inside are various properties used
 * for different purposes described below:
 * 1) header_text - the header text of the project 
 * 2) technologies - Skills/Technologies listed that were used for the project
 * 3) left_to_right - If true then the project description is on the left, the image is on the right.
 * Otherwise if false, then the opposite direction.
 * small_screen_images: so the way the rendering of the used images works is that for smaller
 * devices, all images are loaded in image tags and different images are displayed at different
 * breakpoints. Properties for each tag are as follows:
 *  a) source: The url for the image
 *  b) header_text: Based on this, the margin classes are different
 *  c) class: If other classes are needed for any special cases, then
 *  use the class attribute
 * 4) img_src - the main link for the image on the right side of the page
 * 5) buttons - properties used for the button elements. These are used for links to
 * the application, or the source code. There are properties for each button:
 *  a) text: the text inside the button
 *  b) link: where the link goes to
 * 6) last_card - if true, then some extra classes are added to give you the bottom line tag
 * (each section uses a class for the top line tag, and the last one has a class for the botttom
 * line tag as well)
 * 
 * Possible Questions:
 * 
 * Why did I have all images rendered and shown at different breakpoints insteadof combing media-queries
 * with the "content: url()" property in a stylesheet?
 * 
 * That's what I originally did when making my old website, and it's what I did here originally. The
 * problem is that when I tested it in Firefox and I.E. 11, it doesn't work when using Create React
 * App. Oddly enough, when I made the site in plain HTML, CSS and JavaScript, I didn't run into this
 * in Firefox. Thus it works this way now.
 */
const ProjectProps = [
    {
        header_text: 'Tic Tac Toe',
        technologies: ['Python', 'SQL', 'SQLite3'],
        description_text: [
            'Single and Multiplayer Tic Tac Toe, created using Python, SQL/SQLite3, and ' + 
            'implemented with the Minimax algorithm. Make sure you have Python3 installed.'
        ],
        left_to_right: true,
        small_screen_images: [
            {
                source: './Tic Tac Toe.png',
                header_text: 'Tic Tac Toe'
            }
        ],
        img_src: './Tic Tac Toe.png',
        buttons: [
            {
                text: 'Code',
                link: 'https://github.com/s4sikdar/Tic-Tac-Toe-OOP-version'
            }
        ]
    },
    {
        header_text: 'Chrome Dino Run',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GIMP'],
        description_text: [
            'A colored replica of the Chrome dinosaur game found by typing ',
            ' on Google. This game was made using Canvas, Object Oriented Design, and multi-threaded programming. ' + 
            'Supported in all else but I.E., phones and tablets.'
        ],
        description_links: ['chrome://dino'],
        left_to_right: false,
        small_screen_images: [
            {
                source: './New Dino Sprite.png',
                header_text: 'Chrome Dino Run'
            },
            {
                source: './New Website Dino Sprite Small.png',
                header_text: 'Chrome Dino Run'
            }
        ],
        img_src: './New Website Dino Sprite Large.png',
        buttons: [
            {
                text: 'Application',
                link: 'https://s4sikdar.github.io/new_old_website/chrome_dino_run/Dino_game.html'
            },
            {
                text: 'Code',
                link: 'https://github.com/s4sikdar/s4sikdar.github.io/tree/master/new_old_website/chrome_dino_run'
            }
        ],
    },
    {
        header_text: 'NBA Records Database',
        technologies: ['SQL', 'SQLite3'],
        description_text: [
            'My final project for CS 338, a relational database storing records of NBA teams over the last 10 years. ' +
            'You\'ll find information on championships, team records, coaches and General Managers.'
        ],
        left_to_right: true,
        img_src: './Large Size Database Img.png',
        small_screen_images: [

            {
                source: Boolean(document.documentMode) ? './Database Icon.png' : './Table database.svg',
                header_text: 'NBA Records Database',
                img_class: Boolean(document.documentMode) ? 'd-none d-md-block d-lg-none mw-50' : false
            },
            {
                source: './Database Icon.png',
                header_text: 'NBA Records Database'
            }
        ],
        buttons: [
            {
                text: 'Code',
                link: 'https://github.com/s4sikdar/CS-338-Final-Project'
            }
        ],
        last_card: true
    }
];


/**
 * The project header. This is used for the h1 tag that is used on smaller devices and regular laptops.
 * So based on the small property, the bootstrap classes are rendered accordingly. Thank god for
 * Bootstrap.
 */
const ProjectHeader = props => {
    return(
        <h1 className={`pb-xl-3 pb-lg-2 project-headers 
                        d-${props.small ? `block` : `none`} d-lg-${props.small ? `none` : `block`}`}
            id={`${props.header_text.replace(/\s+/g, '-')}-sm-header`}>
            {props.header_text}
        </h1>
    )
}


/**
 * Used for nicely styled text that you may see in the description section (the description
 * text, and the skills listed)
 */
const DecoratedText = props => 
                    <span className={`link header-font light ${props.last_skill ? '' : 'mr-2'} 
                                      my-1 my-sm-0 font-weight-normal d-inline-flex d-sm-inline`}>
                        {props.skill}
                    </span>


/**
 * Extra classes we use to get bootstrap-like buttons, but with a slightly different look
 */
const Button = props => {
    return(
            <a href = {props.link} className='project-button py-sm-1 px-sm-2 mr-2 text-decoration-none' 
               target='_blank' rel="noreferrer">
                {props.text}
            </a>
    )
}


/**
 * Used for the bold "Description" label
 */
const Subheading = props => <span className='font-weight-bold project-paragraph'>{props.text}</span>


const ProjectDescriptionSection = props => {
    return(
        <React.Fragment>
            <div className='mb-0 p-0'>
                <ProjectHeader header_text={props.header_text}/>
                <p className='project-paragraph'>
                    <Subheading text='Decription: ' />
                    {/* 
                    Add a string of text from the description property (it's an array),
                    and then add the DecoratedText component with the text inside it.
                    If we've gone through the array of object literals representing
                    description links to add, then just add null. This would mean
                    something like if I had 2 decorated text components, and 3 sections
                    of text (3 strings in the description_text array), then we would reach
                    a point where we've gone through the span tags, and we just add the
                    last line of text and then null.
                    */}
                    {
                        props.description_text.map((text_piece, index) => {
                            return (
                                    (props.description_links) ?
                                    <React.Fragment key = {`Text_part_${(index + 1)}`}>
                                        {text_piece}
                                        {
                                            (index <= (props.description_links.length - 1)) ?
                                            <DecoratedText skill={props.description_links[index]} key = {`Link_${(index + 1)}`}
                                                    last_skill={index === (props.description_links.length - 1)}/> :
                                            null
                                        }
                                    </React.Fragment> :
                                    text_piece
                            )
                        })
                    }
                </p>
                {/* 
                List skills after describing the project, and then put any applicable links last below that in the
                last div below.
                */}
                <p className='project-paragraph'>
                    <Subheading text='Technologies used: '/>  
                    {
                        props.technologies.map((skill, index) => <DecoratedText skill={skill} key={`Skill_${index + 1}`} 
                                                                        last_skill={index === (props.technologies.length - 1)}/>)
                    }
                </p>
            </div>
            <div className='m-0 p-0 d-flex flex-row'>
                {
                    props.buttons.map((button_props, index) => <Button {... button_props} key={`Button_${index + 1}`}/>)
                }
            </div>
        </React.Fragment>
    )
}


/**
 * Used for each section where you see a project described, separated by horizontal lines. Look over
 * the specific methods for more info.
 */
class Section extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }

        this.image = this.image.bind(this);
    }

    /**
     * The images that are all loaded and shown at different screen sizes.
     * Take each image source, and replace any of '.', '\', '/', ' '
     * with a dash. When you see it first, replace it with an empty 
     * string, then follow the above rule. This will be the class that 
     * is used, unless the image class is specified in the props parameter
     * passed. 
     * So for example if we have'./Dino Sprite Image.png', it becomes
     * 'Dino-Sprite-Image-png', and this is the class property. The class
     * for this would be specified in the stylesheet, so it can be rendered
     * only on certain browser widths.
     */
    image(props, index) {
        let class_name = props.source.replace('./', '');
        class_name = class_name.replace(/[.\/\s*]/g, '-');
        return (
            <img src={props.source}
            className={`mw-90 mx-auto ${(props.img_class) ? props.img_class : class_name} 
                        ${(props.header_text === 'NBA Records Database') ? 'my-2 my-md-3' : 
                          (props.header_text === 'Tic Tac Toe') ? 'my-2' : 'my-0 '}
                        my-lg-0`} key={index} alt='Image not available'/>
        );
    }
    
    /**
     * How we render each section. First we have the project header that we show for
     * mobile devices. Then we rendeer all the images that are shown on various small
     * devices. Then we render the description on the left and the image on the right,
     * or the image on the left and the description on the right, based on the 
     * left_to_right property. Contain everything in a div with the appropriate classes, 
     * contain the mobile header and images in a div, and the main section for laptops in
     * a div as well, all with their respective classes.
     */
    render() {
        return(
            <div className={`project ${this.props.last_card ? 'last-project' : ''} 
                            light-before light-after row mx-auto py-3 
                            py-${(this.props.header_text === 'Tic Tac Toe') ? 'lg' : 'md'}-4 position-relative`}>
                <div className={`text-center d-block d-lg-none w-100 px-3 px-sm-4`}>
                    <ProjectHeader header_text={this.props.header_text} small={true}/>
                    {
                        this.props.small_screen_images.map((prop, index) => {
                            return this.image(prop, `${prop.source.replace('./', '').replace(/(.|\\|\/)\s*/g, '-')}_${index + 1}`);
                        })
                    }
                </div>
                <div className={`col-12 col-lg-6 d-flex py-1 px-3 px-sm-4
                                 ${(this.props.left_to_right) ? 
                                    `flex-column justify-content-between  
                                    ${(this.props.header_text === 'Tic Tac Toe') ? 'pr-md-2' : ''}` :
                                    'justify-content-end pl-lg-1 pr-lg-4'}`}>
                    {
                        (this.props.left_to_right) ?
                        <ProjectDescriptionSection {...this.props}/> :
                        <img src={this.props.img_src} 
                             className={`${(this.props.header_text === 'Tic Tac Toe') ? '' : 'pl-4 '}
                                        w-100 d-none d-lg-block h-auto align-self-center`} 
                             alt='Image not available' id = {this.props.header_text.replace(/\s+/g, '-')}/>
                    }
                </div> 
                <div className={`col-12 col-lg-6 d-flex py-1 px-3 px-sm-4 pl-lg-3 pl-xl-4 
                                ${(this.props.left_to_right) ? 
                                  `justify-content-end ` :
                                  'flex-column justify-content-between' }`}>
                    {
                        (this.props.left_to_right) ?
                        <img src={this.props.img_src}
                            className={`w-100 d-none d-lg-block h-auto align-self-center`}
                             alt='Image not available' id = {this.props.header_text.replace(/\s+/g, '-')}/> :
                        <ProjectDescriptionSection {...this.props}/>
                    }
                </div>
            </div>
        )
    }
}


/**
 * Encompass all the projects in a div that is centered, an uses the column grid to change
 * widths based on browser width. We must nest it in a row div.
 */
class ProjectSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='row pb-4'>
                <div className='col-11 col-sm-10 col-lg-9 mx-auto'>
                    {
                        ProjectProps.map((prop, index) => <Section {...prop} key={`Project_${index + 1}`}/>)
                    }
                </div>
            </div>
        )
    }
}


/**
 * We have to have a div that has the container-fluid class. It has the header and the main content.
 * We add some classes afterwards for color schemes and spacing, but that's about it.
 */
class ThirdPage extends Component {
    render() {
        return (
            <div className='w-100 dark light-after light-before pt-1 pb-3 pb-md-4 pb-lg-5 mb-1 container-fluid' id='third_page'>
                <SectionHeader class_name='mt-3 mb-sm-2 mb-md-3 mb-xl-4'>
                    Projects
                </SectionHeader>
                <ProjectSection last_card={true} />
            </div>
        )
    }
}

export { ThirdPage };

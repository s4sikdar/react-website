import React, { Component } from 'react';
import './Text Formatting and Styling.css';
import './Third Page.css';
import './Database\ Icon.png';
import './Table database.svg';
import './New\ Dino\ Sprite.png';
import './Database\ Icon.png';
import './New\ Website\ Dino\ Sprite\ Small.png';

const ProjectProps = [
    {
        header_text: 'Tic Tac Toe',
        technologies: ['Python', 'SQL', 'SQLite3'],
        description: [
            'Single and Multiplayer Tic Tac Toe, created using Python, SQL/SQLite3, and ' + 
            'implemented with the Minimax algorithm. Make sure you have Python3 installed.'
        ],
        left: true,
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
        ] //dbd7d2ff
    },
    {
        header_text: 'Chrome Dino Run',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GIMP'],
        description: [
            'A colored replica of the Chrome dinosaur game found by typing ',
            ' on Google. This game was made using Canvas, Object Oriented Design, and multi-threaded programming. ' + 
            'Supported in all else but I.E., phones and tablets.'
        ],
        description_links: ['chrome://dino'],
        left: false,
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
                link: 'https://s4sikdar.github.io/chrome_dino_run/Dino_game.html'
            },
            {
                text: 'Code',
                link: 'https://github.com/s4sikdar/s4sikdar.github.io/tree/master/chrome_dino_run'
            }
        ],
    },
    {
        header_text: 'NBA Records Database',
        technologies: ['SQL', 'SQLite3'],
        description: [
            'My final project for CS 338, a relational database storing records of NBA teams over the last 10 years. ' +
            'You\'ll find information on championships, team records, coaches and General Managers.'
        ],
        left: true,
        img_src: './Large Size Database Img.png',
        small_screen_images: [

            {
                source: Boolean(document.documentMode) ? './Database Icon.png' : './Table database.svg',
                header_text: 'NBA Records Database',
                class: Boolean(document.documentMode) ? 'd-none d-md-block d-lg-none mw-60' : false
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

const Header = () => <h1 className = 'text-center w-100 p-0 page-headers mt-3 mb-sm-2 mb-md-3 mb-xl-4 header-font font-weight-bold'>Projects</h1>

// const ProjectHeader = props =>  <h1 className={`pb-xl-3 pb-lg-2 project-headers d-none 
//                                              d-${(props.header_text == 'Tic Tac Toe') ? 'md' : 'lg'}-block`}>
//                                                  {props.header_text}
//                                 </h1>

class ProjectHeader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }

        this.class_name = this.class_name.bind(this);
    }

    class_name() {
        return `${(this.props.header_text == 'Tic Tac Toe') ? 'lg' : 'lg'}`
    }

    render() {
        return(
            <h1 className={`pb-xl-3 pb-lg-2 project-headers 
                            d-${this.props.small ? `block` : `none`} d-lg-${this.props.small ? `none` : `block`}`}
                id={`${this.props.header_text.replace(/\s+/g, '-')}-sm-header`}>
                                {this.props.header_text}
            </h1>
        )
    }
}
const DecoratedText = props => <span className={`link header-font light ${props.last_skill ? '' : 'mr-2'} 
                                        my-1 my-sm-0 font-weight-normal d-inline-flex d-sm-inline`}>
                            {props.skill}
                        </span>
const Button = props => {
    return(
        // <button className='project-button py-1 px-2 project-paragraph mr-2'>
            <a href = {props.link} className='project-button py-sm-1 px-sm-2 mr-2 text-decoration-none' 
               target='_blank' rel="noreferrer">
                {props.text}
            </a>
        // </button>
        // col-12 col-md-11 col-lg-10
    )
}

const Subheading = props => <span className='font-weight-bold project-paragraph'>{props.text}</span>

const LeftSection = props => {
    return(
        <React.Fragment>
            <div className='mb-0 p-0'>
                <ProjectHeader header_text={props.header_text}/>
                <p className='project-paragraph'>
                    <Subheading text='Decription: ' />
                    {
                        props.description.map((text_piece, index) => {
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

class Section extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }

        this.image = this.image.bind(this);
    }
    
    image(props, index) {
        let class_name = props.source.replace('./', '');
        console.log(props.source, class_name);
        class_name = class_name.replace(/[.\/\s*]/g, '-');
        console.log(props.source, class_name);
        console.log(props.class);
        return (
            <img src={props.source}
            className={`mw-70 mx-auto ${(props.class) ? props.class : class_name} 
                        ${(props.header_text === 'NBA Records Database') ? 'my-2 my-md-3' : 
                          (props.header_text === 'Tic Tac Toe') ? 'my-2' : 'my-0 '}
                        my-lg-0`} key={index} alt='Image not available'/>
        );
    }
    
    // ${(this.props.header_text === 'Tic Tac Toe') ?
    // project ${this.props.last_card ? 'last-project' : ''}
    render() {
        return(
            <div className={`project ${this.props.last_card ? 'last-project' : ''} 
                            light-before light-after row mx-auto py-3 
                            py-${(this.props.header_text === 'Tic Tac Toe') ? 'lg' : 'md'}-4 position-relative`}>
                <div className={`text-center d-block 
                                 d-${(this.props.header_text === 'Tic Tac Toe') ? 'lg' : 'lg'}-none w-100 px-3 px-sm-4`}>
                    <ProjectHeader header_text={this.props.header_text} small={true}/>
                    {
                        this.props.small_screen_images.map((prop, index) => {
                            return this.image(prop, `${prop.source.replace('./', '').replace(/(.|\\|\/)\s*/g, '-')}_${index + 1}`);
                        })
                    }
                    {/* <img src={this.props.img_src} id={`${this.props.header_text.replace(/\s+/g, '-')}-sm`}
                        className={`mw-70 mx-auto 
                                   ${(this.props.header_text === 'NBA Records Database') ? 'my-2 my-md-3' : 
                                     (this.props.header_text === 'Tic Tac Toe') ? 'my-2' : 'my-0 '}
                                   my-lg-0`}/> */}
                </div>
                <div className={`col-12 col-${(this.props.header_text === 'Tic Tac Toe') ? 'lg' : 'lg'}-6 d-flex
                                 ${(this.props.left) ? 
                                    `flex-column justify-content-between py-1 px-3 px-sm-4 
                                    ${(this.props.header_text === 'Tic Tac Toe') ? 'pr-md-2' : ''}` :
                                    'justify-content-end py-1 px-3 px-sm-4 pl-lg-1 pr-lg-4'}`}>
                    {/* d-none d-${(this.props.header_text === 'Tic Tac Toe') ? 'md': 'lg'}-block */}
                    {
                        (this.props.left) ?
                        <LeftSection {...this.props}/> :
                        <img src={this.props.img_src} 
                             className={`${(this.props.header_text === 'Tic Tac Toe') ? 'w-100' : 'w-100 pl-4 '} 
                                        d-none d-${(this.props.header_text === 'Tic Tac Toe') ? 'lg': 'lg'}-block 
                                        h-auto align-self-center`} 
                             alt='Image not available' id = {this.props.header_text.replace(/\s+/g, '-')}/>
                    }
                </div> 
                {/* pl-1 or pl-0 in the 2nd tic-tac-toe conditional pl-md-2 pl-lg-3 pl-xl-4 */}
                <div className={`col-12 col-${(this.props.header_text === 'Tic Tac Toe') ? 'lg' : 'lg'}-6 d-flex 
                                ${(this.props.left) ? 
                                  `justify-content-end py-1 px-3 px-sm-4 pl-lg-3 pl-xl-4 ` :
                                  'flex-column justify-content-between py-1 px-3 px-sm-4 pl-lg-3 pl-xl-4' }`}>
                    {
                        (this.props.left) ?
                        <img src={this.props.img_src}  // mw-100
                            //  className={`w-100 d-none d-lg-block h-auto align-self-center`} 
                            className={`${(this.props.header_text === 'Tic Tac Toe') ? 'w-100' : 'w-100'} 
                                        d-none d-${(this.props.header_text === 'Tic Tac Toe') ? 'lg': 'lg'}-block 
                                        h-auto align-self-center`}
                             alt='Image not available' id = {this.props.header_text.replace(/\s+/g, '-')}/> :
                        <LeftSection {...this.props}/>
                    }
                </div>
            </div>
        )
    }
}

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

class ThirdPage extends Component {
    render() {
        return (
            <div className='w-100 dark light-after light-before pt-1 pb-3 pb-md-4 pb-lg-5 mb-1 container-fluid' id='third_page'>
                <Header />
                <ProjectSection last_card={true} />
            </div>
        )
    }
}

export { ThirdPage };
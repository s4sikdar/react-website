import React, { Component } from 'react';
import './Navbar.css';
import './Text Formatting and Styling.css';
import './Second Page.css';
import { ChartComponent } from './ChartComponent.js';
import { TextSection, SectionHeader } from './CommonUtilities.js';
import { SagaComponent, SectionProps, FunnyText } from './SagaComponent.js';


/*
Each accordion section uses a CardHeader Component and a CardBody Component. An accordion is made
up of multiple cards, each with a card header and a body (where the text lies). See here for example:
https://getbootstrap.com/docs/4.3/components/collapse/#accordion-example
It's intuitive to break up the header and the body into their own components - the "CardHeader"
and "CardBody" components respectively. These combine to create a "Card" component, and there are
multiple "Card" components in the Accordion, which make up the Accordion component. This is used
in the "SecondPage" component for the second page. This may be subject to refactoring in the future.

The props are set as follows below. 
1) title - heading of the section
2) text_lines - the lines of the text used in the "TextSection" component. The text lines are exchanged
with an item from the array represented by the "links" property.
3) links - these represent inline tags used in the paragraph tag. Each object literal makes up the
properties for one inline tag. The properties are as follows:
    a) text - the text to fill the tag
    b) class - the class used in the class attribute
    c) last - if true, then add a br tag before the next set of span and text tags
    d) link - if specified, render a link tag and this is where it goes
4) expanded - if true, then this section will be expanded.
5) chart - if true, then this is where you render the chart component
6) saga - if true, then this is where you render the saga component
*/
const AccordionProps = [
    {
        title: 'About Me',
        text_lines: [
            'Hi, I\'m Sailesh Sikdar, and I\'m a 4th-year University of Waterloo student studying Mathematics. My major is in \
            Mathematics/Business Administration and I\'m doing a minor in Computing (The University of Waterloo\'s equivalent \
            to a minor in Computer Science). I\'ve grown to have an interest in Software Development and have completed an 8-month \
            Software Development internship at Cisco Systems. I\'m hoping to make it a full-time job one day. I\'ve learned a little \
            bit of various aspects of development: front-end, back-end and databases. I could grow to work in front-end development, \
            back-end development, or maybe even Automation Testing. The question is ',
            ' one?',
            ' I\'m a 4th year student at the University of Waterloo, who did a software development internship and is hoping to \
            make it a full-time job.'
        ],
        paragraph_classname: 'mb-0',
        links: [
            {
                text: 'which',
                class_name: 'font-italic'
            },
            {   
                last: true,
                text: 'TL;DR',
                class_name: 'spaced-link header-font font-weight-bold'
            }
        ],
        expanded: false
    },
    {
        title: 'Interests',
        text_lines: [
            'In my spare time, I\'ve had varous interests here and there. For starters, am someone who has an \
            interest in Finance and Investments, it being one of my favoured topics in school. I play/follow \
            basketball as well, and ',
            ' happen to be a Washington Wizards fan. Some of the TV Shows I\'ve seen are \
            The Office, Modern Family and Suits.',
            ' I have an interest in Finance and Investments, I play and follow basketball on my spare time, and I \
            watch too much Netflix.'
        ],
        paragraph_classname: 'mb-0',
        links: [
            {
                text: 'sadly',
                class_name: 'text-decoration-line-through'
            },
            {
                last: true,
                text: 'TL;DR',
                class_name: 'spaced-link header-font font-weight-bold'
            }
        ],
        expanded: false
    },
    {
        title: 'Relative Skills',
        expanded: true,
        chart: true
    },
    {
        title: 'The Saga So Far',
        expanded: false,
        saga: true
    }
];


/*
Why is the "CardHeader" component a class component?

When I was designing this site in plain HTML, CSS and JavaScript (https://s4sikdar.github.io/new_old_website/index.html)
there was an issue with the accordion. I designed it a little differently so as to have a heading on the left and
a button on the right. There would be a couple of elements on the UI that would change when the accordion opens
and closes (the button and the border property on the bottom of the card header). The problem here is that you
can't use click event listeners for this alone. This is because if someone double clicks, then changes that should
be done once when a section opens or closes can be done twice. So if you have a plus sign to open the accordion
section when it's closed, and a minus sign for when the section is open and you want to close it, then double-clicking
the button could leave you with a plus sign when the accordion section is open and you want to close it, and a minus
sign for when the accordion section is closed and you want to open it.

What should happen normally:
 ---------------------------
| Heading                 + |
 ---------------------------

 ---------------------------
| Heading                 - |
 ---------------------------
| blah blah ............... |
 ---------------------------

What happens if you double click:
 ---------------------------
| Heading                 - |
 ---------------------------

 ---------------------------
| Heading                 + |
 ---------------------------
| blah blah ............... |
 ---------------------------

So to solve this problem what you want to do is find some attribute that only changes when the accordion
section opens or closes, and "listen" to the change of this attribute. Accordingly adjust the state, and thus
adjust the UI elements that should change. This attribute in my case is the "aria-expanded" attribute. I use
the mutation observer API to listen to the change of this attribute, and accordingly change the state. Details
on the mutation observer api are found here: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
*/
class CardHeader extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded,
        };
        this.observerCallback = this.observerCallback.bind(this);
        this.observer_options = {
            attributes: true,
            attributeFilter: ['aria-expanded'],
            attributeOldValue: true
        };
        this.observer = new MutationObserver(this.observerCallback);
        this.header_ref = React.createRef();
    }

    observerCallback(entries, observer) {
        this.setState((state, props) => ({expanded: !state.expanded}));
    }

    componentDidMount() {
        try {
            this.observer.observe(this.header_ref.current.querySelector('button'), this.observer_options);
        } catch (err) {
            console.log(this.header_ref.current);
        }
    }

    render() {
        return (
            <div 
                ref={this.header_ref}
                className={`card-header light align-items-center px-sm-3 pb-sm-2 border-bottom-${(this.state.expanded) ? 'on' : '0'}`}
                id={this.props.controller_id}>
                <h2 className="d-flex align-items-center justify-content-between mb-0 ml-1 mr-2 card-headings">
                    {this.props.title}
                    <button
                        type="button" id={this.props.button_id}
                        className={`btn light p-0 float-right button d-flex align-self-center\ 
                        rotate-${(this.state.expanded) ? 'up' : 'down'}`}
                        data-toggle="collapse"
                        data-target={'#' + this.props.target_id} 
                        aria-expanded={this.props.expanded ? 'true' : 'false'}
                        aria-controls={this.props.target_id}
                        >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" 
                            fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </button>
                </h2>
            </div>
        );
    }
}


/*
The CardBody referred to in the above comment. This component doesn't require state, thus is
functional.
*/
const CardBody = props => {
    return (
        <div 
            className={`light collapse ${props.expanded ? 'show' : ''}
                        ${props.saga ? 'px-xs-0 px-sm-1 px-xl-0': ''}`}
            id = {props.target_id} aria-labelledby={props.controller_id}
            data-parent={`#${props.parent_id}`}>
            <div className={`card-body light ${(props.chart) ? 'container-fluid pt-0' : ''} 
                            ${props.saga ? 'pb-0' : ''} about-paragraph`}
                id={props.saga ? 'saga-container' : null}>
                {
                    (props.chart) ? 
                    <ChartComponent /> :
                    <TextSection {...props} />
                }
            </div>
        </div>
    )
}


/*
This represents one section on the accordion.
*/
const Card = props => {
    return(
        <div className={`card w-100 dark-after dark-before ${(props.last_card) ? 'last-card' : ''} border-0`}>
            <CardHeader {...props}/>
            {
                (props.saga) ? 
                <SagaComponent {...props}/> :
                <CardBody {...props}/>
            }
        </div>
    )
}


/*
Refer to the comments above for context on this component and the next one.
*/
const Accordion = props => {
    return (
            <div className='d-block col-11 col-sm-10 col-lg-9 mx-auto pb-2 pb-lg-1' id = 'Accordion'>
                {
                    AccordionProps.map((prop, index) => {
                        return (
                            <Card {...prop}
                                key = {`card_${(index + 1)}`}
                                controller_id = {`heading_${(index + 1)}`}
                                target_id={`collapse_${(index + 1)}`}
                                last_card = {((index + 1) == AccordionProps.length)}
                                button_id={`button_${index + 1}`}
                                parent_id='Accordion'/>
                        );
                    })
                }
            </div>
    );
}


const SecondPage = props => {
    return(
        <div className="w-100 d-block light m-0 pt-1 pb-lg-5 pb-4" id = "second_page">
            <SectionHeader class_name='mt-2 mb-sm-2 mb-md-3 mb-xl-4'>
                Background
            </SectionHeader>
            <div className="container-fluid w-100 px-0">
                <div className="row p-0 m-0">
                    <Accordion {...AccordionProps} />
                </div>
            </div>
        </div>
    );
}


export { SecondPage, AccordionProps, ChartComponent };

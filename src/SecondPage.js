import React, { Component } from 'react';
import './Navbar.css';
import './Text Formatting and Styling.css';
import './Second Page.css';
// import { SkillsChart } from './SkillsChart.js';
// import { GoogleChart } from './GoogleChart.js';
import { ChartComponent } from './ChartComponent.js';
import { SagaComponent, SectionProps, FunnyText, TextSection } from './SagaComponent.js';

// google.charts.load('current', {packages: ['corechart']});

const AccordionProps = [
    {
        title: 'About Me',
        parent_id: 'Accordion',
        text_lines: [
            'Hi, I\'m Sailesh Sikdar, and I\'m a University of Waterloo student going into my fourth year studying Math and \
            Business Administration. Though not mainly in my major, I\'ve grown to have an interest in Software Development \
            and am currently doing a Back-End Software Development internship at Cisco Systems. I\'m hoping to make it a \
            full-time job one day. On the side, I\'ve taken some time to learn front-end facing languages and technologies, \
            and could grow to work in Front-End, Back-End, or even Automation Testing. The question is ',
            ' one?',
            ' I\'m an incoming 4th year student at the University of Waterloo, currently working a Back-End software development \
            internship and hoping to make it a full time job.'
        ],
        paragraph_classname: 'mb-0',
        links: [
            {
                text: 'which',
                class: 'font-italic'
            },
            {   
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        expanded: false
    },
    {
        title: 'Interests',
        parent_id: 'Accordion',
        text_lines: [
            'In my spare time, I\'ve had varous interests here and there. For starters, am someone who has an \
            interest in Finance and Investments, it being one of my favourite topics in school. I play/follow \
            basketball as well (in a Covid-free world I\'d be on the court), and ', 
            ' happen to be a Washington \
            Wizards fan. I also spend too much time on TV shows. If it helps, I\'ve gone through \
            The Office, Modern Family and Suits.',
            ' I have an interest in Finance and Investments, I play and follow basketball on my spare time, and I \
            watch too much Netflix.'
        ],
        paragraph_classname: 'mb-0',
        links: [
            {
                text: 'sadly',
                class: 'text-decoration-line-through'
            },
            {
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        expanded: false
    },
    {
        title: 'Skills',
        parent_id: 'Accordion',
        expanded: true,
        chart: true
        // googleChart: true
    },
    {
        title: 'The Saga So Far',
        parent_id: 'Accordion',
        expanded: false,
        saga: true
    }
];

class CardHeader extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded,
        };
        // this.clickHandler = this.clickHandler.bind(this);
        this.observerCallback = this.observerCallback.bind(this);
        // this.dblClickHanler = this.dblClickHanler.bind(this);
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

class CardBody extends Component {
    constructor(props) {
        super(props);
        this.observerCallback = this.observerCallback.bind(this);
        this.div_ref = React.createRef();
        this.observer_options = {
            attributes: true,
            attributeFilter: ['class'],
        };
        this.observer = new MutationObserver(this.observerCallback);
    }

    observerCallback(entries, observer) {
        let target = entries[0].target;
        if (target.className.includes('collapsing')) {
            this.div_ref.current.previousElementSibling.querySelector('button').disabled = true;
        } else if (target.className.includes('collapse')) {
            this.div_ref.current.previousElementSibling.querySelector('button').disabled = false;
        }
    }

    componentDidMount() {
        try {
            this.observer.observe(this.div_ref.current, this.observer_options);
        } catch(err) {
            console.log(this.div_ref.current);
        }
        
    }

    render() {
        return (
            <div
                ref = {this.div_ref}
                className={`light collapse ${this.props.expanded ? 'show' : ''}
                ${this.props.saga ? 'px-xs-0 px-sm-1 px-xl-0': ''}`}
                id = {this.props.target_id} aria-labelledby={this.props.controller_id}
                data-parent={`#${this.props.parent_id}`}
                >
                <div className={`card-body light ${(this.props.chart) ? 'container-fluid pt-0' : ''} 
                ${this.props.saga ? 'pb-0' : ''} about-paragraph`}
                id={this.props.saga ? 'saga-container' : null}>
                    {
                        (this.props.chart) ? 
                        <ChartComponent observer_options={this.observer_options} /> :
                        <TextSection {...this.props} />
                    }
                </div>
            </div>
        );
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`card w-100 dark-after dark-before ${(this.props.last_card) ? 'last-card' : ''} border-0`}>
                <CardHeader {...this.props}/>
                {
                    (this.props.saga) ? 
                    <SagaComponent {...this.props}/> :
                    <CardBody {...this.props}/>
                }
            </div>
        );
    }
}

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
                                button_id={`button_${index + 1}`}/>
                        );
                    })
                }
            </div>
    );
}

class SecondPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-100 d-block light m-0 pt-1 pb-lg-5 pb-4" id = "second_page">
                <h1 className = "text-center w-100 p-0 page-headers mt-2 mb-sm-2 mb-md-3 mb-xl-4 header-font font-weight-bold">
                    Background
                </h1>
                <div className="container-fluid w-100 px-0">
                    <div className="row p-0 m-0">
                        <Accordion {...AccordionProps} />
                    </div>
                </div>
            </div>
        );
    }
}

export { SecondPage, AccordionProps, ChartComponent };

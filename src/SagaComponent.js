import React, { Component } from 'react';
import './Text Formatting and Styling.css';
import './Second Page.css';
import {TextSection} from './CommonUtilities.js'; 
require('intersection-observer');

const SectionProps = [
    {
        month: 'January',
        header: 'January 2020',
        text_lines: [
            'At the advice of a friend of mine, Hamza Rashid, I decided ' +
            'to try being a software developer. Using a language I was ' +
            'familiar with from school coursework, Python, I created my ' +
            'first side project - single and multiplayer Tic Tac Toe.',
            ' I decided I want to try becoming a Software Developer and created my first side-project.'
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        funny_text_classes: ['font-weight-bold'],
        paragraph_classname: 'opaque'
    },
    {
        month: 'March',
        header: 'March 2020',
        text_lines: [
            'I made a couple more Python projects, but in hindsight they were \
            very beginner-level/unprofessional projects. I had python code on 3 measly .txt\
            files, and realized what a long way I had to go when I checked the job postings on\
            Indeed/Glassdoor. I applied anyway and inevitably got back about 100 rejections.', 
            ' - I decided I want to try becoming a Software Developer and created my first side-project.'
        ],
        links: [
            {
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'May',
        header: 'May 2020',
        text_lines: [
            'After talking to a couple of friends for advice, one of them named Saad Taj gives me an avenue for exploration. \
            He recommends learning Web Development basics (HTML, CSS, JavaScript). I worked on it through the month of April \
            and came out with my first first-ever portfolio website at this time. I also revamped my Tic-Tac-Toe project to be \
            Object-Oriented in design. It wouldn\'t cut it just yet.',
            ' - I picked up web-development basics at the advice of a friend.'
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'July',
        header: 'July 2020',
        text_lines: [
            'I\'d been talking with another friend of mine in UWaterloo C.S. who I\'d known for a year or two. I showed him \
            some of my projects, asking him for feedback. He bluntly told me that my projects need a lot more work, and that \
            at the current rate I\'m looking at about 100 more rejections. He gives me some pointers as to where to start \
            and I get to work on improving them.',
            ' - a friend pointed out that my projects need a lot of work.'
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'August',
        header: 'August 2020',
        text_lines: [
            'Over the spring term, I took a course in relational databases, where I learned how to write SQL statements using \
            the SQLite3 Database Management System. I use this to revamp my original Tic-Tac-Toe game, storing user-profiles \
            via the SQLite3 DBMS. I also created a Database using SQL statements for a final project in that class that I later \
            put on Github as a side project - titled ',
            '.',
            ' - I learned SQL via SQLite3, created a side project in it, and used it to add to an old project of mine.'
        ],
        links: [
            {
                text: 'CS 338 Final Project',
                class: 'spaced-link header-font font-weight-normal'
            },
            { 
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'September',
        header: 'September 2020',
        text_lines: [
            'Over the last couple months, I\'d been diving into JavaScript, and wanted to be comfortable enough in it before \
            transitioning to REACTjs. To get my hands dirty with it, I created a replica of the Google Chrome dinosaur game. \
            To find the original game, go to Chrome and type ',
            ' as the address, and press the space bar once the dinosaur pops up. After working in GIMP to add color to the \
            image sprites and writing about 1300 lines of JavaScript, I created a colored variant of the original game, \
            though more simple.',
            ' - I created a colored variant of the Chrome Dino Game, to "get my hands dirty" with JavaScript.'
        ],
        links: [
            {
                text: 'chrome://dino',
                class: 'spaced-link header-font font-weight-normal'
            },
            { 
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'October',
        header: 'October 2020',
        text_lines: [
            'My old website from back in May was still up, and I focused on revamping it. I showed the revamped \
            template to the friend mentioned in the July section. He gives me some areas to work on, and I get to \
            it. In the meantime I put this template up, as it was a surefire upgrade to my old website that I first \
            created. During this time, I also managed to land my first-ever interview for an Automation-Testing \
            internship. It was an eye-opening experience.',
            ' - I focused on revamping my website, and landed my first ever interview.'
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'December',
        header: 'December 2020',
        text_lines: [
            'Just as I was unsure whether a career in the tech industry would pan out, a software manager from Cisco \
            called me at the eleventh hour and asked to interview me for a position on Cisco\'s Git Migration team. \
            I managed to pass the interview and landed my first ever internship. Huge thanks to everyone who helped \
            me along the way. Meanwhile, over the last couple of months I\'ve been learning Bootstrap to make my \
            website responsive, as well as revamp parts of it.',
            ' - I landed my first ever internship in Software Development, and started learning Bootstrap.'
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'January',
        header: 'January 2021',
        text_lines: [
            'After about 2 to 3 months of work, I finally finished the website you\'re reading now. It\'s my best \
            work yet. Over the holidays I covered ES6, and I started learning some basics in REACTjs. In anticipation \
            for my internship, I set aside some of this time to start learning some bare basics of Flask. I ended up not \
            needing it, but ended up learning some basics of how things work with Django (i.e. what views are, the idea \
            of what url mappings are).',
            ' - I finished my Portfolio Website, and started learning REACTjs and Flask over the break.'
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'March',
        header: 'March 2021',
        text_lines: [
            "I decided to try rebuilding my portfolio website but in REACTjs instead of plain HTML, CSS, JavaScript and Bootstrap.\
            Though not as impressive as creating a new website from scratch, I mainly consider this to be an exercise in learning \
            REACT. Down the road, you could possibly At work I was lucky enough to get an extension of my internshp into the \
            spring term, which I of course took. Though I never needed to learn Flask, I've still learned a lot about how \
            things are done in the industry vs. a side-project of mine.",
            " - I started recreating my website in REACTjs, and got an extension on my internship."
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    }
];

const OpaqueHeader = props => <h5 className='opaque'>{props.header}</h5>


class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div 
                className = {`inner_divs px-0
                ${(this.props.left_side) ? 
                    'col-6 left_side d-none d-xl-block pr-2' : 
                    (this.props.odd) ? 'right_side d-block d-xl-none' : 'right_side'}`} 
                id = {`${this.props.month}_${(this.props.left) ? 1 : 2}`}>
                <OpaqueHeader header={this.props.header} />
                <TextSection {...this.props} />
            </div>
        );
    }
}

class Row extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='row w-100 mx-0' >
                {
                    (this.props.odd) ?
                    <Section {...this.props} left_side={true} /> :
                    <div className="col-6 left d-none d-xl-block" />
                }
                <div className="col-12 col-xl-6 right position-relative">
                    <Section {...this.props} left_side={false}/>
                </div>
            </div>
        );
    }
}


class Saga extends Component {
    constructor(props) {
        super(props);
        this.intersection_observer_options = {
            threshold: 0.5
        };
        this.mutation_observer_options = {
            attributeFilter: ['class']
        }
    }

    render() {
        return(
            <React.Fragment>
                {
                    SectionProps.map((section, index) => <Row {...section} odd = {(index % 2) === 1} key={`Row_${index + 1}`}/>)
                }
            </React.Fragment>
        )
    }
}

class SagaComponent extends Component {
    constructor(props) {
        super(props);
        this.observerCallback = this.observerCallback.bind(this);
        this.inside_intersection = this.inside_intersection.bind(this);
        this.saga_observer_callback = this.saga_observer_callback.bind(this);
        this.div_ref = React.createRef();
        this.observer_options = {
            attributes: true,
            attributeFilter: ['class'],
        };
        this.saga_observer_options = {
            attributes: true,
            attributeFilter: ['aria-expanded'],
            attributeOldValue: true
        };
        this.intersection_observer_options = {
            threshold: 0.5
        };
        this.observer = new MutationObserver(this.observerCallback);
        this.timeline_observer = new IntersectionObserver(this.inside_intersection,
                                                          this.intersection_observer_options);
        this.saga_observer = new MutationObserver(this.saga_observer_callback);
    }

    observerCallback(entries, observer) {
        let target = entries[0].target;
        if (target.className.includes('collapsing')) {
            this.div_ref.current.previousElementSibling.querySelector('button').disabled = true;
        } else if (target.className.includes('collapse')) {
            this.div_ref.current.previousElementSibling.querySelector('button').disabled = false;
        }
    }

    inside_intersection(entries, observer) {
        entries.forEach(entry => {
            let target = entry.target;
            let target_class = target.className;
            let header_class = target.children[0].className;

            if (entry.isIntersecting) {
                if ((entry.intersectionRatio >= 0.5) && (header_class === 'opaque')) {
                    let right_side = target_class.includes('right_side');
                    target.children[0].className = `${right_side ? 'slide_left' : 'slide_right'} font-weight-bold saga-header`;
                    target.children[1].className = `${right_side ? 'slide_left' : 'slide_right'} saga-paragraph`;
                    // If the entry is intersecting, then toggle the right class on and
                    // unobserve the entry
                    observer.unobserve(target);
                }
            }
        });
    }

    saga_observer_callback(entries, observer) {
        let target = entries[0].target;
        let animate_divs = this.div_ref.current.querySelectorAll(".inner_divs");
        let internet_explorer = Boolean(document.documentMode);
        if (entries[0].oldValue === 'true') {
            animate_divs.forEach(element => {
                element.children[0].setAttribute('class', 'opaque');
                element.children[1].setAttribute('class', 'opaque');
                this.timeline_observer.unobserve(element);
            });
        } else {
            animate_divs.forEach(element => {
                element.children[0].setAttribute('class', 'opaque');
                element.children[1].setAttribute('class', 'opaque');
                this.timeline_observer.observe(element);
            });
        }
    }

    componentDidMount() {
        this.observer.observe(this.div_ref.current, this.observer_options);
        let button = this.div_ref.current.previousElementSibling.querySelector('button');
        this.saga_observer.observe(button, this.saga_observer_options);
    }

    render() {
        return(
            <div
                ref = {this.div_ref}
                className={`light collapse ${this.props.expanded ? 'show' : ''}
                ${this.props.saga ? 'px-xs-0 px-sm-1 px-xl-0': ''}`}
                id = {this.props.target_id} aria-labelledby={this.props.controller_id}
                data-parent={`#${this.props.parent_id}`}
                >
                <div className={`card-body light ${(this.props.chart) ? 'container-fluid pt-0' : ''} 
                ${this.props.saga ? 'pb-0' : ''}`}
                id={this.props.saga ? 'saga-container' : null}>
                    <Saga />
                </div>
            </div>
        );
    }
}

export { SagaComponent, SectionProps };

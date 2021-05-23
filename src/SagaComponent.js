import React, { Component } from 'react';
import './Text Formatting and Styling.css';
import './Second Page.css';

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
    }
];

const FunnyText = props => 
                <span className = {` ${(props.class) ? props.class : ''}`}>
                    {
                        props.text
                    }
                </span>

const Description = props => {
    return(
        <p className={`${(props.paragraph_classname) ? props.paragraph_classname : '' }`}>
            {
                props.text_lines.map((line, index) => {
                    return(
                        <React.Fragment key={`Line_${index + 1}`}>
                            {line}
                            {
                                (index < (props.text_lines.length - 1)) ?
                                (props.links[index].last) ? 
                                <React.Fragment>
                                    <br />
                                    <FunnyText {...props.links[index]}/>
                                </React.Fragment> :
                                <FunnyText {...props.links[index]}/> :
                                null
                            }
                        </React.Fragment>
                    )
                })
            }
        </p>
    );
}

const Header = props => <h5 className='opaque'>{props.header}</h5>


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
                <Header header={this.props.header} />
                <Description {...this.props} />
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
        // this.inside_intersection = this.inside_intersection.bind(this);
        // this.saga_mutation_callback = this.saga_mutation_callback.bind(this);
    }

    // saga_mutation_callback(entries, observer) {
    //     var target_elem = entries[0].target;
    //     var animate_divs = target_elem.querySelectorAll(".inner_divs");
    //     // If the target element is the last section of the accordion
    //     if (target_elem.id == "collapseTHREE") {
    //         // Then check the classname, and accordingly observe all the tags with the
    //         // class inner_divs.
    //         if (target_elem.className.includes("show")) {
    //             for (var index = 0; index < animate_divs.length; index++) {
    //                 timeline_observer.observe(animate_divs[index]);
    //             }
    //         } else {
    //             // Some bugs stem in terms of what gets slid in first the next time around
    //             // if we don't unobserve when this section slides back up.
    //             for (var index = 0; index < animate_divs.length; index++) {
    //                 timeline_observer.unobserve(animate_divs[index]);
    //             }
    //         }
    //     } else {
    //         // If the button being pressed opens that section of the accordion instead of
    //         // closing it, set the elements with class "inner_divs" to be opaque.
    //         if (target_elem.className.includes("show")) {
    //             // Bugs happen when we don't unboserve when a new accordion box is opened.
    //             for (var index = 0; index < animate_divs.length; index++) {
    //                 animate_divs[index].children[0].setAttribute("class", "opaque");
    //                 animate_divs[index].children[1].setAttribute("class", "opaque");
    //                 timeline_observer.unobserve(animate_divs[index]);
    //             }
    //         }
    //     }
    // }

    // componentDidMount() {
        // console.log(this.current.parentNode);
        // console.log('Saga component mounted');
    // }

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
            attributeFilter: ['class'],
        };
        this.saga_observer_options = {
            attributeFilter: ['aria-expanded'],
            attributeOldValue: true
        };
        this.intersection_observer_options = {
            threshold: 0.5
        };
        this.observer = new MutationObserver(this.observerCallback);
        // this.saga_component_ref = React.createRef();
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

        // // If the target element is the last section of the accordion
        // if (target.id === 'collapse_5') {
        //     // Then check the classname, and accordingly observe all the tags with the
        //     // class inner_divs.
        //     if (target.className.includes("show")) {
        //         animate_divs.forEach(element => {
        //             this.timeline_observer.observe(element);
        //         });
        //     } else {
        //         // Some bugs stem in terms of what gets slid in first the next time around
        //         // if we don't unobserve when this section slides back up.
        //         animate_divs.forEach(element => {
        //             this.timeline_observer.unobserve(element);
        //         });
        //     }
        // } else {
        //     // If the button being pressed opens that section of the accordion instead of
        //     // closing it, set the elements with class "inner_divs" to be opaque.
        //     if (target_elem.className.includes("show")) {
        //         // Bugs happen when we don't unboserve when a new accordion box is opened.
        //         animate_divs.forEach(element => {
        //             element.children[0].className = 'opaque';
        //             element.children[1].className = 'opaque';
        //             this.timeline_observer.unobserve(element);
        //         });
        //     }
        // }
    }

    inside_intersection(entries, observer) {
        // for (var i = 0; i < (entries.length); i++) {
        //     let target_class = entries[i].target.getAttribute("class");
        //     let header_class = entries[i].target.children[0].getAttribute("class");

        //     if (entries[i].isIntersecting) {
        //         if ((entries[i].intersectionRatio >= 0.5) && (header_class == "opaque")) {
        //             if (target_class.includes("right_side")) {
        //                 entries[i].target.children[0].setAttribute("class", "slide_left");
        //                 entries[i].target.children[1].setAttribute("class", "slide_left");
        //             } else {
        //                 entries[i].target.children[0].setAttribute("class", "slide_right");
        //                 entries[i].target.children[1].setAttribute("class", "slide_right");
        //             }
        //             // If the entry is intersecting, then toggle the right class on and
        //             // unobserve the entry
        //             observer.unobserve(entries[i].target);
        //         }
        //     }
        // }
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
        // console.log(target);
        // console.log(typeof(entries[0].oldValue), entries[0].oldValue);
        // console.log(animate_divs[0].childNodes);
        if (entries[0].oldValue === 'true') {
            animate_divs.forEach(element => {
                if (!internet_explorer) {
                    element.children[0].setAttribute('class', 'opaque');
                    element.children[1].setAttribute('class', 'opaque');
                }
                this.timeline_observer.unobserve(element);
            });
        } else {
            animate_divs.forEach(element => {
                if (!internet_explorer) {
                    element.children[0].setAttribute('class', 'opaque');
                    element.children[1].setAttribute('class', 'opaque');
                }
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

export { SagaComponent, SectionProps, Description, FunnyText };
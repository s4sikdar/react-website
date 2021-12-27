/**
 * Used for any logic used for the "The Saga So Far" section.
 */
import React, { Component } from 'react';
import './Text Formatting and Styling.css';
import './Second Page.css';
import {TextSection} from './CommonUtilities.js'; 
require('intersection-observer');


/**
 * Used for the properties used for each text section. Properties are as follows
 * month - used in the id attribute for each div that wraps the contents in the
 * Section component
 * 1) header - the header text of an individual text section
 * 2) text_lines - used in tandem with the links property in the TextSection component.
 * See CommonUtilities.js for information on the InlineTag and TextSection components,
 * for further information.
 * 3) links - see the text_lines property above for where it is used. The properties for
 * the inline tags based on the object literal are as follows:
 *  a) text - the text that is rendered in the tag
 *  b) class - the class that is used in the the <span> or <a> tags
 *  c) last - if true, then insert a br tag and then the InlineTag component and the text
 *  after it.
 */
const SectionProps = [
    {
        month: 'January',
        header: 'January 2020',
        text_lines: [
            'At the advice of a friend of mine, Hamza Rashid, I decided ' +
            'to try being a software developer. Using Python, a language I was ' +
            'familiar with from school coursework, I created my ' +
            'first side project - single and multiplayer Tic Tac Toe.',
            ' I decided I want to try becoming a Software Developer and created my first side-project.'
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class_name: 'spaced-link header-font font-weight-bold'
            }
        ],
        // funny_text_classes: ['font-weight-bold'],
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
                class_name: 'spaced-link header-font font-weight-bold'
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
                class_name: 'spaced-link header-font font-weight-bold'
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
                class_name: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'August',
        header: 'August 2020',
        text_lines: [
            'Over the spring term, I took a course in relational databases (CS 338), where I learned how to write SQL statements using \
            the SQLite3 Database Management System. I use this to revamp my original Tic-Tac-Toe game, storing user-profiles \
            via SQLite3. I also created a Database using SQL statements for a final project in that class that I later \
            put on Github as a side project - titled ',
            '.',
            ' - I learned SQL using SQLite3, created a side project in it, and used it to add to an old project of mine.'
        ],
        links: [
            {
                text: 'CS 338 Final Project',
                class_name: 'spaced-link header-font font-weight-normal'
            },
            { 
                last: true,
                text: 'TL;DR',
                class_name: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'September',
        header: 'September 2020',
        text_lines: [
            'Over the summer term, I\'d been diving further into JavaScript, and wanted to be comfortable enough in it before \
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
                class_name: 'spaced-link header-font font-weight-normal'
            },
            { 
                last: true,
                text: 'TL;DR',
                class_name: 'spaced-link header-font font-weight-bold'
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
            it. In the meantime I put that template up, as it was a surefire upgrade to my old website that I first \
            created. During this time, I also managed to land my first-ever interview for an Automation-Testing \
            internship. It was an eye-opening experience.',
            ' - I focused on revamping my website, and landed my first ever interview.'
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class_name: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'December',
        header: 'December 2020',
        text_lines: [
            'Just as I was unsure whether a career in the tech industry would pan out, a software manager from Cisco \
            called and asked to interview me for a position on Cisco\'s Git Migration team. \
            I managed to pass the interview and landed my first ever internship. Huge thanks to everyone who helped \
            me along the way. Meanwhile, over the last couple of months I\'ve been learning Bootstrap to make my \
            website responsive, as well as revamp parts of it.',
            ' - I landed my first ever internship in Software Development, and started learning Bootstrap.'
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class_name: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'January',
        header: 'January 2021',
        text_lines: [
            'After about 2 to 3 months of work, I finally finished my revamped website, found ', 
            '. It\'s my best \
            work yet. Over the holidays I covered a little ES6, and I started learning some basics in REACTjs. In anticipation \
            for my internship, I set aside some of this time to start learning some bare basics of Flask. I ended up not \
            needing it, but came to find out it would carry over for learning Django.',
            ' - I finished my Portfolio Website, and started learning REACTjs and Flask over the break.'
        ],
        links: [
            {
                text: 'here',
                link: 'https://s4sikdar.github.io/new_old_website/index.html',
                target: '_blank',
                class_name: 'link font-weight-bold light'
            },
            { 
                last: true,
                text: 'TL;DR',
                class_name: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'March',
        header: 'March 2021',
        text_lines: [
            "I decided to try rebuilding my portfolio website but using REACTjs. Though not as impressive as creating a new website \
            from scratch, I mainly consider this to be an exercise in learning REACT. Down the road, you could possibly see a \
            revamp. At work I was lucky enough to land an extension into a spring term. I've learned a lot about how things are done \
            in the industry vs. just a side-project of mine.",
            " - I started recreating my website in REACTjs, and got an extension on my internship."
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class_name: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    },
    {
        month: 'August',
        header: 'August 2021',
        text_lines: [
            "I successfully completed an 8-month internship at Cisco Systems. It was an eye-opening experience, and I learned a \
            ton. I'm not just talking about the technical side of things when I say that. I'm also talking about how the software \
            development process works in the industry.",
            " - I finished an 8-month software development internship at Cisco."
        ],
        links: [
            { 
                last: true,
                text: 'TL;DR',
                class_name: 'spaced-link header-font font-weight-bold'
            }
        ],
        paragraph_classname: 'opaque'
    }
];


/**
 * Header used for each text section that slides in. It is opaque by default, as we want it
 * to slide in.
 */
const MonthHeader = props => <h5 className='opaque'>{props.header}</h5>


/**
 * Each text section has the header and the text involved. Based on if it's on the
 * left side or the right side, different classes are added. This is what is observed
 * by the intersection observer and slid in when half the text here shows up on
 * screen.
 */
const Section = props => {
    return(
        <div 
            className = {`inner_divs px-0
            ${(props.left_side) ? 
                'col-6 left_side d-none d-xl-block pr-2' : 
                (props.odd) ? 'right_side d-block d-xl-none' : 'right_side'}`} 
            id = {`${props.month}_${(props.left) ? 1 : 2}`}>
            <MonthHeader header={props.header} />
            <TextSection {...props} />
        </div>
    )
}


/**
 * We add sections on both sides if we are on an odd section. An odd section would be every other section.
 * So if January 2020 is the first one, March 2020 is odd. This will slide in text from the left side on larger
 * devices. By default we show text on the right side.
 */
const Row = props => {
    return(
        <div className='row w-100 mx-0' >
            {
                (props.odd) ?
                <Section {...props} left_side={true} /> :
                <div className="col-6 left d-none d-xl-block" />
            }
            <div className="col-12 col-xl-6 right position-relative">
                <Section {...props} left_side={false}/>
            </div>
        </div>
    );
}


/**
 * Return all the rows with text sections inside.
 */
const Saga = props => {
    return(
        <React.Fragment>
            {
                SectionProps.map((section, index) => <Row {...section} odd = {(index % 2) === 1} key={`Row_${index + 1}`}/>)
            }
        </React.Fragment>
    )
}


/**
 * This component holds all logic responsible for sliding in text based on whether the window
 * has scrolled that place into view (the place where it's supposed to slide in). One approach
 * would be to have a scroll handler function that checks this and slides the text in, however,
 * this would flood the event queue with scroll handler functions. This would lead to some lag
 * when other events are fired, and overall poor performance. The intersection observer is an
 * alternative that is supposed to be better for performance. When a window scrolls an element
 * being observed into view by a certain threshold, fire a callback function only then. This is
 * used in my case to slide text in when the window scrolls the div into view by 50% (50% of
 * the div is showing).
 */
class SagaComponent extends Component {
    constructor(props) {
        super(props);
        this.inside_intersection = this.inside_intersection.bind(this);
        this.saga_observer_callback = this.saga_observer_callback.bind(this);
        this.div_ref = React.createRef();
        // We listen to the aria-expanded button for the corresponding header for this section.
        // Only based on this changing, we set the text to be opaque, and accordingly observe
        // or unobserve it.
        this.saga_observer_options = {
            attributes: true,
            attributeFilter: ['aria-expanded'],
            attributeOldValue: true
        };
        // When half of the text shows on screen, slide the text in.
        this.intersection_observer_options = {
            threshold: 0.5
        };
        // This is used to observe each section of text that slides in.
        this.timeline_observer = new IntersectionObserver(this.inside_intersection,
                                                          this.intersection_observer_options);
        // Used to observe the "aria-expanded" attribute on the button of the heading
        // of this section.
        this.saga_observer = new MutationObserver(this.saga_observer_callback);
    }

    /**
     * The callback for when the intersection observer fires. Basically, for each text 
     * section, check if it's intersecting by enough and if the class is opaque. Then it
     * means we found a new text section that hasn't been shown yet. Slide it in, and 
     * unobserve this section of text.
     */
    inside_intersection(entries, observer) {
        entries.forEach(entry => {
            let target = entry.target;
            let target_class = target.className;
            let header_class = target.children[0].className;

            if (entry.isIntersecting) {
                if ((entry.intersectionRatio >= 0.5) && (header_class === 'opaque')) {
                    let right_side = target_class.includes('right_side');
                    target.children[0].className = `${right_side ? 'slide_left' : 'slide_right'} font-weight-bold saga-header`;
                    target.children[1].className = `${right_side ? 'slide_left' : 'slide_right'} saga-paragraphs`;
                    // If the entry is intersecting, then add the according classes and unobserve the entry
                    observer.unobserve(target);
                }
            }
        });
    }

    /**
     * The entries refer to the aria-expanded property for the button corresponding to
     * this section in the accordion that opens and closes this section. If the old property
     * of aria-expanded was true, then that means it's now false, and vice versa. So if
     * the section is now closing/closed, set all the text to be opaque, and unobserve
     * each section of text. Otherwise, you still set the text all to be opaque, but you
     * observe the element.
     */
    saga_observer_callback(entries, observer) {
        let animate_divs = this.div_ref.current.querySelectorAll(".inner_divs");
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

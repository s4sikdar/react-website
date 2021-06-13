import React, { Component } from 'react';
import './Navbar.css';
import "./FrontPage.css";
import './Text Formatting and Styling.css';
require('intersection-observer');

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            href: `#${this.props.link}`,
            height: null
        }
        this.scroll = this.scroll.bind(this);
        this.current_ref = React.createRef();
    }

    scroll(event) {
        event.preventDefault();
        if (this.state.href.length > 1) {
            try {
                window.scrollTo({
                    top: (document.querySelector(this.state.href).offsetTop - this.current_ref.current.parentNode.offsetHeight),
                    behavior: 'smooth'
                });
            } catch(err) {
                console.log(err);
                window.scrollTo(0, (document.querySelector(this.state.href).offsetTop - this.current_ref.current.parentNode.offsetHeight));
            }
        }
    }

    // componentDidUpdate() {
    //     this.current_ref.current.addEventListener("click", this.scroll);
    // }
// document.documentMode ? null : 
    render() {
        return(
            <li className = "nav-item">
                <a className = {this.props.class} href = {this.state.href} 
                    ref = {this.current_ref} onClick = {document.documentMode ? null :  this.scroll}>
                    {this.props.value}
                </a>
            </li>
        );
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            at_roof: (window.pageYOffset < 2),
            options: {
                rootMargin: `${(-1) * window.innerHeight + 2}px 0px 0px 0px`
            }
        };
        // this.ul_ref = React.createRef();
        this.child_ref = React.createRef();
        this.scrollHandler = this.scrollHandler.bind(this);
        // window.addEventListener('scroll', this.scrollHandler);
        this.new_observer = new IntersectionObserver(this.scrollHandler, this.state.options);
        // new_observer.observe(document.querySelector('#container_fluid'));
    }

    scrollHandler(entries) {
        console.log('This worked'); 
        entries.map(entry => (entry.isIntersecting) ? this.setState({at_roof: true}) : this.setState({at_roof: false}));
    }

    componentDidMount() {
        this.new_observer.observe(document.body);
        (window.pageYOffset < 2) ? this.setState({at_roof: true}) : this.setState({at_roof: false});
    }

    render() {
        return (
            <React.Fragment>
                <nav className = "navbar navbar-expand d-none d-lg-flex">
                    <ul role = 'navigation'
                    className = {`navbar-nav fixed-top 
                                ${(this.state.at_roof && !(document.documentMode)) ? 'transparent pr-3' : 'light shadow-sm'}\
                                justify-content-end d-none d-lg-flex upper-nav`}>
                        {this.props.values.map((value, index) => {
                            return (
                                (index === 0) ?
                                <ListItem key = {`${value}_${index}`} 
                                class = {
                                `${(this.state.at_roof && !(document.documentMode)) ? 
                                 'transparent-item mr-1 light-after' : 'nav-list-item light dark-after'}\
                                p-2 position-relative text-decoration-none nav-link`} value = {value} link = 'root' /> :
                                <ListItem key = {`${value}_${index}`} 
                                class = {
                                `${(this.state.at_roof && !(document.documentMode)) ? 
                                   `transparent-item ${(index === (this.props.values.length - 1)) ? 'mr-4' : 'mr-1'} light-after` :
                                   'nav-list-item light mr-1 dark-after'}
                                p-2 position-relative text-decoration-none nav-link`} value = {value}  
                                link = {`page_${(index + 1)}`} ref = {this.child_ref}/>
                            );
                        })}
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}

export { ListItem, Navbar };


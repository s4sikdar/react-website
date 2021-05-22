import { MainPage } from "./MainSection.js";
import { Navbar } from './Navbar.js';
// import $ from 'jquery';
import React, { Component } from 'react'
import { MobileNavbar } from "./MobileNavbar.js";
// import { SecondPage } from "./SecondPage.js";

const text_content = ['Home', 'About', 'Projects'];

class Website extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
        this.elementRef = React.createRef();
        this.state = {
            rootMargin: `${(-1) * window.innerHeight + 2}px 0px 0px 0px`
        }
        this.toggleClass = this.toggleClass.bind(this);
        // this.new_observer = new IntersectionObserver(this.toggleClass, this.state);
    }

    toggleClass(entries) {
        this.componentRef.current.scrollHandler(entries);
    }

    // componentDidMount() {
        // this.new_observer.observe(document.querySelector('#root'));
        // $('[data-toggle="tooltip"]').tooltip();
    // }

    render() {
        return (
            <div className="p-0 m-0 w-100 h-100">
                <div className = "w-100 h-100 background-charcoal" id = "container_fluid" ref = {this.elementRef}>
                    <div className = "container-fluid p-0">
                        <Navbar values = {text_content} ref = {this.componentRef}/>
                        <MobileNavbar/>
                    </div>
                    {/* <FourthComponent values = {text_content}/> */}
                    <MainPage name = {this.props.name}/>
                </div>
            </div>
        )
    }
}

export { Website };
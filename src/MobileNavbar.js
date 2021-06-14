import './Navbar.css';
import "./FrontPage.css";
import './Text Formatting and Styling.css';
import React, { Component } from 'react'
// import { Nav } from 'reactstrap';
// mobile-list-item
const Links = [
    {
        name : 'Home',
        class_inner: 'nav-link text-dark pb-1 mb-1 mx-2 position-relative ' +
                     'dark-after mobile-list-item',
        href: '#root'
    }, 
    {
        name: 'About',
        class_inner: 'nav-link text-dark pt-0 pb-1 mt-0 mb-1 mx-2 ' + 
                     'position-relative dark-after mobile-list-item',
        href: '#page_2'
    },
    {
        name: 'Projects',
        class_inner: 'nav-link text-dark pt-0 pb-1 mt-0 mb-1 mx-2 ' + 
                     'position-relative dark-after mobile-list-item',
        href: '#page_3'
    },
    {
        name: 'Contact',
        class_inner: 'nav-link text-dark pt-0 pb-1 mt-0 mb-1 mx-2 ' + 
                     'position-relative dark-after mobile-list-item ' + 
                     'd-block d-sm-none',
        href: '#page_4'
    }
];


class NavItem extends Component {
    constructor(props) {
        super(props);
        // This is attacted to the li tag, so we can access the li element
        this.link_ref = React.createRef();
        // Bind the event handlers so that they work
        this.click_handler = this.click_handler.bind(this);
        this.state = {
            href: this.props.href 
        };
    }

    click_handler(event) {
        event.preventDefault();
        // Access the nav tag
        const nav = this.link_ref.current.parentNode.parentNode.previousSibling;
        // Scroll to the section, but offset it so that when the menu slides back up, you've
        // scrolled to the section minus the height of the navbar. If we're in I.E., then just
        // use scroll without object literal of options (it's supported in I.E.)
        try {
            window.scrollTo({
                top: (document.querySelector(this.state.href).offsetTop - nav.offsetHeight),
                behavior: 'smooth'
            });
        } catch(err) {
            console.log(err);
            window.scrollTo(0, (document.querySelector(this.state.href).offsetTop - nav.offsetHeight));
        }
        // console.log(this.link_ref.current.parentNode);
    }
    // ${(this.props.name === 'Home') ? 'pt-1': ''}
    render() {
        return (
            <li className={`nav-item `} ref = {this.link_ref}>
                <a className = {this.props.class_inner}
                    href= {this.props.href} onClick = {Boolean(document.documentMode) ? null : this.click_handler}>
                    {this.props.name}
                </a>
            </li>
        );
    }
}


const NavButton  = props => {
    return (
        <button className="navbar-toggler custom-toggler dark mr-3" type="button"
                data-toggle="collapse"
                data-target= {`#${props.id}`} aria-controls={`${props.id}`}
                aria-expanded="false" aria-label="Toggle navigation"
                id = "button">
            <i className="fas fa-bars"></i>
        </button>
    );
}


class MobileNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = 'w-100 p-0 m-0'>
                {/* 
                Normally the second div element below would be inside the nav element. Except that
                I was going for the navbar to look to be above the dropdown menu, and have a shadow
                effect to show it. This shadow effect wasn't being seen when the div was inside the
                nav tag. So instead I had the nav tag have a higher z-index while the div tag had a
                lower z-index, and then applied the shadow class. That worked.
                */}
                <nav className={"navbar position-fixed w-100" +
                                " shadow-sm navbar-expand-lg light" +
                                " d-flex d-lg-none justify-content-end upper-nav px-0"}>
                    <NavButton id = 'navbarNavAltMarkup' />
                </nav>

                <div className="collapse position-fixed w-100 shadow-sm
                                navbar-collapse navbar-expand-lg justify-content-start 
                                light collapsing upper-nav-menu d-lg-none offset-top"
                    id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        {
                            Links.map((link_props, index)=> {
                                return <NavItem {...link_props} key = {`${link_props.name}_${index}`}/>
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }
}

export { MobileNavbar };

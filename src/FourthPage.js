import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import gmailIcon from '@iconify-icons/mdi/gmail';
import './Text Formatting and Styling.css';
import './Third Page.css';
import { IconTag } from './CommonUtilities.js';

const Text = {
    header: 'Contact',
    text: 'Thanks for stopping by! Contact me via any of the following - my email is saileshsikdar1@gmail.com'
}

const Links = [
    {
        italic_tag: {
            class_name: 'mr-5'
        },
        link_tag: {
            id: 'mobile_linkedin',
            link: 'https://ca.linkedin.com/in/sailesh-sikdar-96277a17a',
            class_name: 'd-inline-block',
        },
        inner_class: 'fab fa-linkedin fa-sm icons'
    },
    {
        italic_tag: {
        },
        link_tag: {
            id: 'mobile_gmail',
            link: 'mailto:saileshsikdar1@gmail.com',
            class_name: 'd-inline-block',
        },
        inner_class: 'icons iconify icon:mdi-gmail icon-inline:false'
    }
]

const ContactHeader = props => <h1 className='text-center w-100 p-0 page-headers pb-0 pt-3 mb-0 header-font font-weight-bold'>{props.header}</h1>
const ContactText = props => <p className='px-4 text-center my-0 w-100 card-body pb-0 pt-1'>{props.text}</p>

const Link = props => {
    return(
        // <i className = {`${(props.id.includes('linkedin')) ? 'mr-5' : ''}`}>
        //     <a 
        //         target='_blank'
        //         id={props.id}
        //         className={props.class}
        //         href={props.link}>
        <IconTag {...props} target='_blank'>
            {
                props['link_tag'].id.includes('linkedin') ?
                <i className={props.inner_class}></i> :
                <Icon icon={gmailIcon} />
            }
        </IconTag>
        //     </a>
        // </i>
    )
}

const IconMenu = props => {
    return(
        <div className='d-flex d-md-none justify-content-center align-items-center mx-auto mh-25'>
            {
                Links.map(prop => <Link {...prop} key={`${prop['link_tag'].id}_key`}/>)
            }
        </div>
    )
}

class FourthPage extends Component {
    render() {
        return (
            <div className = 'd-block d-sm-none p-0 light'>
                <ContactHeader {...Text} />
                <ContactText {...Text} />
                <IconMenu />
            </div>
        )
    }
}

export { FourthPage };

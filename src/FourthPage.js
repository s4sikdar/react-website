import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import gmailIcon from '@iconify-icons/mdi/gmail';
import './Text Formatting and Styling.css';

const Text = {
    header: 'Contact',
    text: 'Thanks for stopping by! Contact me via any of the following - my email is saileshsikdar1@gmail.com'
}

const Links = [
    {
        id: 'mobile_linkedin',
        link: 'https://ca.linkedin.com/in/sailesh-sikdar-96277a17a',
        class: 'd-inline-block',
        inner_class: 'icons fab fa-linkedin fa-sm'
    },
    {
        id: 'mobile_gmail',
        link: 'mailto:saileshsikdar1@gmail.com',
        class: 'align-bottom',
        inner_class: 'icons iconify icon:mdi-gmail icon-inline:false'
    }
]

const ContactHeader = props => <h1 className='text-center w-100 p-0 page-headers pb-0 pt-3 mb-0 header-font font-weight-bold'>{props.header}</h1>
const ContactText = props => <p className='px-4 text-center my-0 w-100 card-body pb-2 pt-1'>{props.text}</p>

const Link = props => {
    return(
        <i className = {`${(props.id.includes('linkedin')) ? 'mr-5' : ''}`}>
            <a 
                target='_blank'
                id={props.id}
                className={props.class}
                href={props.link}>
                {
                    props.id.includes('linkedin') ?
                    <i className={props.inner_class}></i> :
                    <Icon icon={gmailIcon} />
                }
            </a>
        </i>
    )
}

const IconMenu = props => {
    return(
        <div className='d-flex d-md-none justify-content-center align-items-center mx-auto mh-25 pt-1'>
            {
                Links.map(prop => <Link {...prop} key={`${prop.id}_key`}/>)
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

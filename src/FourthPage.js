/**
 * This is code for the fourth page that is only on mobile.
 */
import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import gmailIcon from '@iconify-icons/mdi/gmail';
import './Text Formatting and Styling.css';
import './Third Page.css';
import { IconTag, SectionHeader } from './CommonUtilities.js';


// Properties that go on the icon tags at the bottom
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


/**
 * Used for the text shown on the fourth page under the header.
 */
const ContactText = props => 
                    <p className='px-4 text-center my-0 w-100 card-body pb-0 pt-1 about-paragraph'>
                        {props.children}
                    </p>


/**
 * Used for the icons.
 */
const Link = props => {
    return(
        <IconTag {...props} target='_blank'>
            {
                props['link_tag'].id.includes('linkedin') ?
                <i className={props.inner_class}></i> :
                <Icon icon={gmailIcon} />
            }
        </IconTag>
    )
}


/**
 * We use this div as a flexbox container for the links (the link component above), so we 
 * get vertically and horizontally centered icons. This puts them in the center, and you 
 * can space them further apart using margin clases, which I did. The icons don't line up
 * perfectly still vertically, so I have to apply some custom styling using their ids
 * attributes.
 */
const IconMenu = props => {
    return(
        <div className='d-flex d-md-none justify-content-center align-items-center mx-auto mh-25'>
            {
                Links.map(prop => <Link {...prop} key={`${prop['link_tag'].id}_key`}/>)
            }
        </div>
    )
}


/**
 * What we render in the end to an html div using React's render method
 */
class FourthPage extends Component {
    render() {
        return (
            <div className = 'd-block d-sm-none p-0 light'>
                <SectionHeader class_name='pb-0 pt-3 mb-0'>
                    Contact
                </SectionHeader>
                <ContactText>
                    Thanks for stopping by! Contact me via any of the following - my email is saileshsikdar1@gmail.com.
                </ContactText>
                <IconMenu />
            </div>
        )
    }
}


export { FourthPage };

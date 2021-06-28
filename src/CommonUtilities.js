/*
This module will serve as Utilities that are used throughout the project.
*/
import React, { Component } from 'react';


/*
Docs on following 2 components:
Based on the object literal passed in, pass in a link tag or a span tag. This is used in
the TextSecton component to allow for paragraph tages with span or link tags within them.
The reason this component exists is because throughout the site, you will see that you'll
have a paragraph with text bits inside the paragraph that are either a link to somewhere
else, or they are styled differently. This makes it a component that is a common utility
to be copied and used elsewhere. 

Basically you will have an array of strings as text, and an array of object literals that
store the properties used in the InlineTag component. You go through and add one string
from the text array, then add one inline tag component according to the object literal.
Once all the object literals have passed, then you just render a line of string, and then
null.
*/
const InlineTag = props => 
                props.link ? 
                <a href={props.link} target={props.target || null} className = {` ${(props.class_name) ? props.class_name : ''}`}>
                    {
                        props.text
                    }
                </a> :
                <span className = {` ${(props.class_name) ? props.class_name : ''}`}>
                    {
                        props.text
                    }
                </span>


const TextSection = props => {
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
                                    <InlineTag {...props.links[index]}/>
                                </React.Fragment> :
                                <InlineTag {...props.links[index]}/> :
                                null
                            }
                        </React.Fragment>
                    )
                })
            }
        </p>
    );
}


/*
Used as the heading for the instructions for the chart component 
("Click on a section for more info ...")
*/
const H4Tag = props => <h4 className={props.class_name}>{props.text}</h4>


/*
This tag is used for the icons that show up on the main page. The icons also
show up on the contact section (the fourth page), which shows up on mobile
devices (width <= 576px). Since both sets of icons have a common html format
- an <a> tag nested inside an <i> tag - that wraps what's inside, I decided
to make it a component in the Utilities file.  
*/
const IconTag = props => 
    <i 
        className={props['italic_tag'].class_name || undefined} 
        id={props['italic_tag'].id || undefined}>
        <a
            target = {props['link_tag'].target || props.target || undefined}
            rel={props['link_tag'].rel || props.rel || undefined}
            id = {props['link_tag'].id || undefined}
            className = {props['link_tag'].class_name || undefined}
            href = {props['link_tag'].link || undefined}>
                {props.children}
        </a>
    </i>


/**
 * This is the header that shows up at the start of every section (About Me, Projects, Contact).
 * There are common classes that are used in it, and this header is used repeatedly, so I decided
 * to put it here in the Utilities file.
 */
const SectionHeader = props => 
    <h1 className={`text-center w-100 p-0 page-headers header-font font-weight-bold ${props.class_name}`}>
       {props.children} 
    </h1>


export { TextSection, H4Tag, IconTag, SectionHeader };

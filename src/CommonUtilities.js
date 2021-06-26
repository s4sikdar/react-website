/*
This module will serve as sort of "utilities" that are used throughout the project.
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
*/
const InlineTag = props => 
                props.link ? 
                <a href={props.link} target={props.target || null} className = {` ${(props.class) ? props.class : ''}`}>
                    {
                        props.text
                    }
                </a> :
                <span className = {` ${(props.class) ? props.class : ''}`}>
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

const H4Tag = props => <h4 className={props.class}>{props.text}</h4>

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

export { TextSection, H4Tag, IconTag };

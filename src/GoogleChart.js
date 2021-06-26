import React, { Component } from 'react';
import './Second Page.css';
import { TextSection, H4Tag } from './CommonUtilities.js';
import {disclaimer_text} from './SkillsChart.js';

// The configuration options for the h4 tag that tells you how to use the chart
const Instructions = {
    class: 'text-center pt-3 my-0 chart-heading',
    text: 'Click a section for more info, click it again for less.'
}

class GoogleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: Math.round(Math.min(((window.innerWidth * 0.8)),((window.innerHeight * 0.8))))
        }
        this.bottom = this.bottom.bind(this);
        // this.optimal_chart_area = this.optimal_chart_area.bind(this);
        // this.chart_div_ref = React.createRef();
        // this.resizeHandler = this.resizeHandler.bind(this);
        this.load_google_charts_api = this.load_google_charts_api.bind(this);
    }

    bottom() {
        return  ((window.innerWidth < 900) ? 40 :
                 (window.innerWidth < 1000) ? 45 : 
                 (window.innerWidth < 1100) ? 50 : 55);
    }

    // optimal_chart_area() {
    //     var chart_area = {
    //         top: this.bottom(),
    //         bottom: Math.round(window.innerHeight * ((window.innerWidth < 1000) ? 0.0075 : 0.015)),
    //     };
      
    //     return chart_area;
    // }

    // resizeHandler() {
    //     this.setState(state => {{
    //             height: Math.round(Math.min(((window.innerWidth * 0.8)),((window.innerHeight * 0.8))))
    //     }});
    // }

    /*
    Load the js file responsible for setting up/loading the GoogleCharts API and then drawing
    the chart. The Google Charts API requires that you have an empty div with an id specified
    so that the API can target it. So we render the div with id="chart_div" first, and once
    that is loaded, you can load the JS file that loads and uses the API to draw the chart. 
    */
    load_google_charts_api() {
        let script_tag = document.createElement('script');
        script_tag.type = "text/javascript";
        script_tag.id = 'google_chart_logic_file';
        script_tag.src = "./ChartRenderingLogic.js";
        document.body.appendChild(script_tag);
    }

    componentDidMount() {
        this.load_google_charts_api();
    }

    render() {
        return (
            <div className = 'w-100 h-100 m-0 p-0 d-none d-md-block'>
                <H4Tag {...Instructions} />
                <TextSection {...disclaimer_text} />
                <div id = "chart_div" className = 'w-100 m-0 p-0 GoogleCharts'>
                </div>
            </div>
        );
    }
}

export { GoogleChart };

import React, { Component } from 'react';
import './Text Formatting and Styling.css';

// const loadScript = (src, id) => {
//     return new Promise((resolve, reject) => {
//         let new_script = document.createElement('script');
//         new_script.src = src;
//         new_script.id = id;
//         new_script.type = "text/javascript";
//         document.body.appendChild(new_script);
//         new_script.onload = () => {
//             resolve();
//         }
//         new_script.onerror = () => {
//             reject();
//         }
//     });
// }

class GoogleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: Math.round(Math.min(((window.innerWidth * 0.8)),((window.innerHeight * 0.8))))
        }
        this.bottom = this.bottom.bind(this);
        this.optimal_chart_area = this.optimal_chart_area.bind(this);
        this.chart_div_ref = React.createRef();
        this.resizeHandler = this.resizeHandler.bind(this);
    }

    bottom() {
        return  ((window.innerWidth < 900) ? 40 :
                 (window.innerWidth < 1000) ? 45 : 
                 (window.innerWidth < 1100) ? 50 : 55);
    }

    optimal_chart_area() {
        var chart_area = {
            top: this.bottom(),
            bottom: Math.round(window.innerHeight * ((window.innerWidth < 1000) ? 0.0075 : 0.015)),
        };
      
        return chart_area;
    }

    resizeHandler() {
        this.setState(state => {
            console.log(window.innerWidth * 0.8, window.innerHeight * 0.8);
            return {
                height: Math.round(Math.min(((window.innerWidth * 0.8)),((window.innerHeight * 0.8))))
            }
        });
    }

    componentDidMount() {
        let script_tag = document.createElement('script');
        script_tag.type = "text/javascript";
        script_tag.id = 'google_chart_logic_file';
        script_tag.src = "./ChartRenderingLogic.js";
        document.body.appendChild(script_tag);
    }

    render() {
        return (
            <div className = 'w-100 h-100 m-0 p-0 d-none d-md-block'>
                <h4 className="text-center pt-3 my-0 chart-heading">
                    Click a section for more info, click it again for less.
                </h4>
                <div id = "chart_div" className = 'w-100 m-0 p-0 GoogleCharts'>
                </div>
            </div>
        );
    }
}

export { GoogleChart };

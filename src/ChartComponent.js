import React, { Component } from 'react';
import { SkillsChart } from './SkillsChart.js';
import { GoogleChart } from './GoogleChart.js';
import { MobileSkillsMenu, MobileSkillsProps } from './MobileSkillsMenu.js';

class ChartComponent extends Component {
    constructor(props) {
        super(props);
        let internet_explorer = Boolean(document.documentMode);
        // let internet_explorer = true;
        this.state = {
            chartJS: !internet_explorer,
            googleChart: internet_explorer
        };
        this.chartObserverCallback = this.chartObserverCallback.bind(this);
        // this.chart_observer = new MutationObserver(this.chartObserverCallback);
        this.observer_options = this.props.observer_options;
        this.chart_ref = React.createRef();

    }

    chartObserverCallback(entries, observer) {
        if (entries[0].className.includes('ChartJsError')) {
            this.setState({
                chartJS: false,
                googleChart: true
            });
        }
        observer.disconnect();
    }

    // componentDidMount() {
        // if (this.state.chartJS) {
        //     this.chart_observer.observe(this.chart_ref.current, this.observer_options);
        // }
        // console.log(this.chart_ref.current)
        // console.log('Chart component mounted');
    // }

    // componentDidUpdate() {
    //     let script_tag = document.createElement('script');
    //     script_tag.type = "text/javascript";
    //     script_tag.id = 'google_chart_logic_file';
    //     script_tag.src = "./ChartRenderingLogic.js";
    //     document.body.appendChild(script_tag);
    //     script_tag.onload = () => {
    //         console.log('script tag loaded')
    //     }
    // }

    render() {
        return (
            <div className = {`${(this.state.chartJS) ? 'pt-2' : 'pt-0'} px-0 m-0`}>
                {
                    (this.state.chartJS) ?
                    <SkillsChart ref_prop={this.chart_ref} /> :
                    <GoogleChart />
                }
                <MobileSkillsMenu />
            </div>
        );
    }
}

export { ChartComponent };
import Chart from 'chart.js';
import React, { Component } from 'react'
import './Second Page.css';
import { TextSection, H4Tag } from './CommonUtilities.js';

/*
The classes responsible for the disclaimer text that you see under the chart.
*/
const disclaimer_text = {
    paragraph_classname: 'text-center my-1 pb-0 d-none d-md-block',
    links: [
        {
            text: '*',
            class: 'font-weight-bold'
        },
        {
            text: 'Disclaimer: ',
            class: 'font-weight-bold'
        },
        {
            text: '*',
            class: 'font-weight-bold'
        }
    ],
    text_lines: [
        '',
        '',
        'skills are rated relative to each other.',
        ''
    ]
}

/*
The configuration options required for the Chart created by ChartJS. Since the Google Charts API
is known not to work on laptops that use HiDPI screens, you need to have a chart that works there.
So I use ChartJS as a default, and on I.E. 11 I use the GoogleCharts API.
*/
const ConfigurationOptions = {
    type: 'pie',
    data: {
        labels: ['Python', 'HTML, CSS, JavaScript', 'REACTjs', 'SQL/SQLite3', 'Git/GitHub', 'Bootstrap', 'Django'],
        datasets: [{
            data: [10, 8, 3, 2, 2, 3, 3],
            backgroundColor: ['#ffe4c4', '#e9d4b7', '#dfc197', '#d8b27e', '#d0a465', '#c69146', '#AD7C59']
        }]
    },
    options: {
        responsive: true,
        aspectRatio: 2,
        maintainAspectRatio: false,
        tooltips: {
            position: 'nearest',
            displayColors: false,
            callbacks: {
                label: (tooltipItem, data) => {
                    let skill_label = data.labels[tooltipItem.index];
                    switch (skill_label)  {
                        case 'Python':
                            return [
                                'Python - my \"mother tongue\" of programming',
                                'languages. It was the first practical language I', 
                                'learned to code in, the one I made my first', 
                                'project in, and the one I\'d answer technical',
                                'interviews with. It\'s the main language I use',
                                'at work.'
                            ]
                        case 'HTML, CSS, JavaScript': 
                            return [
                                'At the advice of a friend, I started learning',
                                'the basics of web development around last April ',
                                '2020. I\'d say I\'ve gotten to be passable in it,',
                                'and jave gone on to learn REACTjs over the past',
                                'winter.'
                            ]
                        case 'REACTjs':
                            return [
                                'I\'ve been learning the basics of REACTjs ',
                                'over the last couple of months, starting around ',
                                'the end of December/start of January. I\'m ',
                                'familiar with the basics of components, and I ',
                                'understand a little about state and the component ',
                                'lifecycle as well (not much though). I recreated',
                                'this site in REACTjs mainly as an exercise.'
                            ]
                        case 'SQL/SQLite3':
                            return [
                                'I started learning this as part of a school',
                                'course I took in relational databases - google ',
                                '"CS 338 UWaterloo". I learned the basics of SQL ',
                                'queries using the SQLite3 DBMS. I covered some ',
                                'basics on normal forms, relational models, and ',
                                'the E.R. model - but this was back in the ',
                                'summer of 2020. I\'ve since used it for one of ',
                                'my projects. I\'ve also been using the MySQL ',
                                'command line a little at work, mainly doing ',
                                'basic C.R.U.D. statements to check that my ',
                                'server-side code works correctly.'
                            ]
                        case 'Git/GitHub':
                            return [
                                'I learned Git at the advice of a friend, starting ',
                                'out by tracking my projects with it to save myself ',
                                'from having 10 copies of the same code in different ',
                                'file directories. I use Git and GitHub extensively ',
                                'at work.'
                            ]
                        case 'Bootstrap':
                            return [
                                'A friend gave me the advice of learning and using ',
                                'Bootstrap last fall, and its classes and accordion ',
                                'components have made this project (and web ',
                                'development) a lot easier.'
                            ]
                        case 'Django':
                            return [
                                'One of the applications that I\'ve been working on ',
                                'at my internship is a Django applicaton, I\'ve done ',
                                'a little of various things in Django - from ',
                                'templating, to model querying, to view handling ',
                                'functions.'
                            ]
                    }
                }
            }
        }
    }
};

const Instructions = {
    class: 'text-center pt-0 pb-1 my-0 chart-heading',
    text: 'Hover over/touch a section for more info, touch off it for less.'
}

class SkillsChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chart_width_and_height: 575
        };
    }

    componentDidMount() {
        // What we need to do to actually render the Chart.
        const PieChart = document.querySelector('#myChart');
        this.SkillsPieChart = new Chart(PieChart.getContext('2d'), ConfigurationOptions);
    }

    render() {
        return (
            <div className='d-none d-md-block'>
                <H4Tag {...Instructions}/>
                <TextSection {...disclaimer_text} />
                {/* 
                The ChartJS library requires you use a div with a canvas element. This is why I
                use the Google Charts API in I.E. 11 (I.E. doesn't like canvas).
                */}
                <div ref = {this.props.ref_prop} id='chart_div' className='position-relative'>
                    <canvas 
                        id='myChart' 
                        width={`${this.state.chart_width_and_height}`} 
                        height={`${this.state.chart_width_and_height}`}>
                    </canvas>
                </div>
            </div>
        )
    }
}

export { SkillsChart, disclaimer_text };

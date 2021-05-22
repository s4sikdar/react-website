import Chart from 'chart.js';
import React, { Component } from 'react'
import './Second Page.css';
// import 

const ConfigurationOptions = {
    type: 'pie',
    data: {
        labels: ['Python', 'HTML, CSS, JavaScript', 'REACTjs', 'SQL/SQLite3', 'Git/GitHub', 'Bootstrap'],
        datasets: [{
            data: [10, 8, 3, 2, 2, 3],
            backgroundColor: ['#ffe4c4', '#e9d4b7', '#dfc197', '#d8b27e', '#d0a465', '#c69146']
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
                                'HTML, CSS and JavaScript around last April',
                                '2020. I\'d say I\'ve gotten to be passable in it,',
                                'and I\'m familiar with ES6 as well. Recently I',
                                'was working on the front-end for a project at',
                                'work, and designed part of the UI in HTML,',
                                'CSS, and Vanilla JavaScript, along with',
                                'Bootstrap.'
                            ]
                        case 'REACTjs':
                            return [
                                'I started reading about REACTjs around',
                                'the end of December. I\'m familiar with the',
                                'basics of class components and functional',
                                'components, state, and am somewhat',
                                'familiar with the component lifecycle.'
                            ]
                        case 'SQL/SQLite3':
                            return [
                                'I started learning this as part of a school',
                                'course I took in relational databases; CS',
                                '338. I made a final project in that class',
                                'which is one of my side projects in GitHub.',
                                'I also used it to add to my Tic Tac Toe',
                                'game (also on my GitHub).'
                            ]
                        case 'Git/GitHub':
                            return [
                                'I started learning this roughly last spring.',
                                'I\'ve mostly used it to keep track of my',
                                'files on my local repositories. I use Git',
                                'and GitHub extensively at work.'
                            ]
                        case 'Bootstrap':
                            return [
                                'I learned this last fall at the advice of a friend',
                                'who I go to for advice on my projects. He gave',
                                'me the advice of learning and using Bootstrap,',
                                'and its classes and accordion components',
                                'make my life easier. I recently used it to',
                                'develop the front-end of a project at work.'
                            ]
                    }
                    // return skill_label + ': I learned this skill'
                }
            }
        }
    }
};

class SkillsChart extends Component {
    constructor(props) {
        super(props);
        // this.myRef = React.createRef();
        // this.resizeHandler = this.resizeHandler.bind(this);
        this.state = {
            previous_width: 575
            // new_width: null
        };
        // this.state
    }

    componentDidMount() {
        // console.log('In script tag rendering google chart js logic file')
        // let script_tag = document.createElement('script');
        // script_tag.type = "text/javascript";
        // script_tag.id = 'google_chart_logic_file';
        // script_tag.src = "./ChartRenderingLogic.js";
        // document.body.appendChild(script_tag);
        // script_tag.onload = () => {
        const PieChart = document.querySelector('#myChart');
        // try {
        //     throw new Error('Pie Chart did not work');
        this.SkillsPieChart = new Chart(PieChart.getContext('2d'), ConfigurationOptions);
        // } catch (err) {
        //     console.log('In error:', err);
        //     document.querySelector('#chart_div').setAttribute('class', 'position-relative ChartJsError');
        // }
        // }
        // PieChart.parentNode.style.width = '800px';
        // PieChart.parentNode.style.height = '800px';
        // console.log(PieChart.width, PieChart.height);
        
        // document.querySelector('.chart-header').innerHTML=SkillsPieChart.generateLegend();
    }
    // w-75
    render() {//w-75 h-50 onResize={this.resizeHandler}
        return (
            <div className='d-none d-md-block'>
                {/* <div className='chart-header w-100'></div> */}
                <h4 className="text-center pt-0 pb-1 my-0 chart-heading">
                    Hover over/touch a section for more info, touch off it for less.
                </h4>
                <div ref = {this.props.ref_prop} id='chart_div' className='position-relative'>
                    <canvas id='myChart' width={`${this.state.previous_width}`} height={`${this.state.previous_width}`}>
                    </canvas>
                </div>
            </div>
        )
        // 
    }
}

export { SkillsChart };

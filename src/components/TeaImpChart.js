import React from "react"
import Chart from 'react-apexcharts'

class TeaImpChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: {
                chart: {
                    background: "lightgray",
                    foreColor: "black"
                },
                xaxis: {
                    categories: [
                        'Pakistan',
                        'Russia',
                        'United States',
                        'United Kingdom',
                        'United Arab Emirates',
                        'Egypt',
                        'Iran',
                        'Afghanistan',
                        'Saudi Arabia',
                        'Germany',
                        'Morocco',
                        'Vietnam',
                        'Japan',
                        'France',
                        'China'
                    ]
                },
                fill: {
                    colors: ['#113762']
                },
                title: {
                    text: 'Countries with the greatest tea exports by USD spent'
                }
            },
            series: [{
                name: "USD in millions",
                data: [
                    571.3,
                    497,
                    487.3,
                    396.3,
                    323.2,
                    318.1,
                    292.4,
                    292.2,
                    252.5,
                    229.8,
                    220.6,
                    182.4,
                    182.1,
                    180.8,
                    177.8
                ]
            }]
        }
    }
    render() {
        return (
            <div>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="500px"
                    width="96%"
                    align="center"
                />
            </div>
        )
    }
}

export default TeaImpChart
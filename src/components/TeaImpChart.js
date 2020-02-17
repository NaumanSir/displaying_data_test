import React from "react"
import Chart from 'react-apexcharts'

class TeaImpChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: {
                chart: {
                    background: "lightgreen",
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
                }
            },
            series: [{
                name: "USD worth of tea bought",
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
                    width="90%"
                />
            </div>
        )
    }
}

export default TeaImpChart
import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import { Zoom } from 'react-reveal'

class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        categories: ["Balcony", 'Medium', 'Star'],
        desc: [
            "ex consectetur nam, minus minima laboriosam optio molestias voluptate in, porro incidunt voluptatum at praesentium",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nulla eaque dolore dolorem unde",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur corrupti consequuntur in rerum porro "
        ],
        linkTo: ["https://sales.b", "https://sales.m", "https://sales.s"],
        delay: [400, 0, 400],
        duration: [400, 600, 400]

    }


    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom
                key={i}
                delay={this.state.delay[i]}
                duration={this.state.duration[i]}
            >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.categories[i]}</span>
                        </div>

                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                link={this.state.linkTo[i]}
                                bck_clr="orangered"
                                color="white"
                                text=" Purchase Tickets" />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section ">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }

}

export default Pricing
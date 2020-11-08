import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal'
import MyButton from '../utils/MyButton';


class Discount extends Component {

    state = {
        discountStarts: 0,
        discountEnds: 40
    }

    percentage = () => {
        this.state.discountStarts < this.state.discountEnds
            ? this.setState(
                {
                    ...this.state,
                    discountStarts: this.state.discountStarts + 1,
                }
            )
            : this.setState(
                { ...this.state }
            )
    }

    componentDidUpdate() {
        setTimeout(() => { this.percentage() }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={this.percentage}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStarts}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>


                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets before 30<sup>th</sup> August</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis id quo placeat ab. Dicta voluptas accusantium harum natus dignissimos eaque officia ipsam! Accusantium harum aspernatur soluta numquam consequatur possimus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odit obcaecati expedita officiis accusantium voluptatem esse mollitia non, consectetur vero. Odio quisquam autem alias inventore minima quibusdam! Possimus, accusantium commodi.
                        </p>

                            <MyButton
                                link="www.google.com"
                                bck_clr="orangered"
                                color="white"
                                text="Purchase Tickets" />
                        </div>
                    </Slide>



                </div>

            </div>
        )
    }
}

export default Discount;

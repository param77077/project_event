import React from "react"
import Carrousal from "./Carrousal"
import Counter from "./Counter"

const Featured = () => {
    return (
        <div style={{ position: "relative" }}>
            <Carrousal />

            <div className="artist_name">
                <div className="wrapper">

                    Ariana Grande
                </div>
            </div>
            <Counter />
        </div>
    )
}

export default Featured


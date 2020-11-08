import React from 'react'
import {
    Drawer, List, ListItem, ListItemText
} from '@material-ui/core'
import { v4 as uuid } from "uuid"
import { scroller } from 'react-scroll'


const SideDrawer = (props) => {

    const drawerList = [
        "Event Starts in",
        "Venue Info",
        "Highlights",
        "Pricing",
        "Location"
    ]

    const scrollElements = [
        "featured",
        "venueinfo",
        "highlights",
        "pricing",
        "location"
    ]

    const scrollToElement = (element) => {

        scroller.scrollTo(element,
            {
                duration: 1500,
                delay: 100,
                smooth: true,
                offset: -120
            })
        props.onClose(false)
    }

    return (

        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose()}
        >
            {drawerList.map((item, i) => {
                return (<List component='nav' key={uuid()}>
                    <ListItem button
                        onClick={() => scrollToElement(scrollElements[i])}
                        // onClick={() => console.log(item, scrollElements[i])}
                        selected={true}
                    >
                        <ListItemText primary={item} />
                    </ListItem>
                </List>)
            })}
        </Drawer>

    )
}

export default SideDrawer;
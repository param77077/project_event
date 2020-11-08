import React from 'react'
import { Button } from '@material-ui/core'
import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {

    const { link, bck_clr, color, text } = props;
    return (
        <Button
            variant="contained"
            size='small'
            href={link}
            style={{
                background: bck_clr,
                color: color
            }}
        >
            <img src={TicketIcon}
                className="iconImage"
            />
            {text}
        </Button>
    )
}

export default MyButton;
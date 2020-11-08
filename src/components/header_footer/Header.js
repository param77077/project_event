import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import SideDrawer from './SideDrawer';

class Header extends Component {

    state = {
        drawerOpen: false,
        showHeader: false
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY === 0) {
            this.setState({
                ...this.state,
                showHeader: false

            })

        } else {
            this.setState({
                ...this.state,
                showHeader: true
            })
        }
    }

    render() {
        const headerStyles = {
            color: this.state.showHeader ? "white" : "black"
        }

        return (
            <div>
                <AppBar position="fixed"
                    style={{
                        background: this.state.showHeader ? "#2f2f2f" : "transparent",
                        boxShadow: "none",
                        padding: "10px 0px"
                    }}>

                    <Toolbar>
                        <div className="header_logo" style={headerStyles}>
                            <div className="font_righteous header_logo_venue"

                            >The Venue</div>
                            <div className="header_logo_title">Musical Events</div>
                        </div>

                        <IconButton
                            aria-label="Menu"
                            // style={{ color: "inherit" }}
                            // color="inherit"
                            style={headerStyles}
                            onClick={() => this.toggleDrawer(true)}
                        >
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <SideDrawer
                            open={this.state.drawerOpen}
                            onClose={value => this.toggleDrawer(value)}
                        />

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;
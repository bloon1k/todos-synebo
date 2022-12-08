import React from 'react'
import './MobileFooter-styles.scss'
// router
import { NavLink } from 'react-router-dom'
// model
import { useMobileFooterControls } from '../model/useMobileFooterControls'

const MobileFooter = () => {
    const { linkStyle } = useMobileFooterControls()

    return (
        <footer className={'mobile-footer'}>
            <NavLink
                to={'/'}
                className={'mobile-footer__link'}
                style={linkStyle}
            >
                All
            </NavLink>
            <NavLink
                to={'active'}
                className={'mobile-footer__link'}
                style={linkStyle}
            >
                Active
            </NavLink>
            <NavLink
                to={'completed'}
                className={'mobile-footer__link'}
                style={linkStyle}
            >
                Completed
            </NavLink>
        </footer>
    )
}

export { MobileFooter }

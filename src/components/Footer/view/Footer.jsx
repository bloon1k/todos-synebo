import React from 'react'
import './Footer-styles.scss'
// router
import { NavLink } from 'react-router-dom'
// model
import { useFooterControls } from '../model/useFooterControls'

const Footer = () => {
    const { todosList, handleClearCompleted, linkStyle } = useFooterControls()

    return (
        <footer className={'footer'}>
            <p className={'footer__counter'}>{todosList.length} items left</p>
            <ul className="footer__filters">
                <li>
                    <NavLink
                        to={'/'}
                        className={'footer__link'}
                        style={linkStyle}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'active'}
                        className={'footer__link'}
                        style={linkStyle}
                    >
                        Active
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'completed'}
                        className={'footer__link'}
                        style={linkStyle}
                    >
                        Completed
                    </NavLink>
                </li>
            </ul>
            <button
                className={'button footer__clear'}
                onClick={handleClearCompleted}
            >
                Clear Completed
            </button>
        </footer>
    )
}

export { Footer }

import React from 'react'
import './Header-styles.scss'
// Assets
import moon from '../../../images/icon-moon.svg'

const Header = () => {
    return (
        <section className={'header'}>
            <h2 className={'header__title'}>TODO</h2>
            <img src={moon} alt="moon" className={'header__icon'} />
        </section>
    )
}

export { Header }

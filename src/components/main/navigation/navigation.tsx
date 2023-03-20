import React, { useState } from 'react';
import { LogoProps } from '../../../types';
import BurgerLines from './burger';
import Menu from './menu';

const Logo = ({ src, alt }: LogoProps) => {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src={src} alt={alt}></img>
        </div>
    );
};

const Navigation = () => {
    const [menuActive, setMenuActive] = useState<boolean>(false);

    return (
        <nav className="main__nav nav">
            <Logo src="img/logo.png" alt="logo" />
            <div
                className="nav__burger burger"
                onClick={() => setMenuActive(!menuActive)}
            >
                <BurgerLines menuActive={menuActive} />
                <BurgerLines menuActive={menuActive} />
                <BurgerLines menuActive={menuActive} />
            </div>
            <Menu menuActive={menuActive} />
        </nav>
    );
};
export default Navigation;

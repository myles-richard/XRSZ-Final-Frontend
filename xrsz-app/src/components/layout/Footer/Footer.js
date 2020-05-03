import React from 'react';
import './_Footer.scss';
import { Grid, Icon } from 'semantic-ui-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer__logo-box'>
                <img src={require('../../../images/xrszbluelogo.png')} alt="full logo" className="footer__logo" />
            </div>
            <Grid>
            <Grid.Row className="row" columns="2">
                <Grid.Column floated='left' width={6}>
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="https://www.facebook.com/myles.richard.3" className="footer__link"><Icon name='facebook' size='big'/></a></li>
                            <li className="footer__item"><a href="https://www.instagram.com/mylesrich/?hl=en" className="footer__link"><Icon name='instagram' size='big' /></a></li>
                            <li className="footer__item"><a href="https://www.linkedin.com/in/myles-richard/" className="footer__link"><Icon name='linkedin' size='big'/></a></li>
                            <li className="footer__item"><a href="https://github.com/myles-richard" className="footer__link"><Icon name='github square' size='big'/></a></li>
                        </ul>
                    </div>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                    <p className="footer__copyright">
                        Built by <a href="https://www.linkedin.com/in/myles-richard/" className="footer__link">Myles Richard</a> for the final project of my Software Engineering Immersive course at <a href="https://generalassemb.ly/" className="footer__link">General Assembly</a>
                    </p>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </footer>
    )
}

export default Footer;

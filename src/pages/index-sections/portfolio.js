import React from 'react';
import PortfolioCard from 'components/Card/Card';
import styled from 'styled-components';

const Styles = styled.div`
    h2 {
        font-weight: lighter;
        font-size: 60px;
        text-align: center;
    }

    div.styles {
        border-style: groove;
        width: 100%;
    }

    .portfolio-card {
        text-align: center;
        float: right;
    }
`;


const Portfolio = () => (
    <Styles>
        <div>
            <h2>Previous Projects</h2>
            <div className="styles"></div>
            <br />
            <br />
            <PortfolioCard className="portfolio-card"/>
        </div>
    </Styles>
)

export default Portfolio;
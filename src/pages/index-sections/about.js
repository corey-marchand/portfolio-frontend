import React from 'react';
import styled from 'styled-components';
// import Icon from '../assets/developer-icon.png';

const Styles = styled.div`
h2 {
    font-size: 300px;
    color: #20B2AA;
    position: fixed;
    margin-top: 375px;
    font-family: 'Open Sans', sans-serif;
    margin-right: 400px;
    margin-left: auto;
}
`;


const About = () => (
    <Styles>
            <h2 className="mr-1 ml-5">About Me</h2>
    </Styles>
)

export default About;
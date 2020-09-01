import React from 'react';
import ContactForm from 'components/Form/Form';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const Styles = styled.div`
    h2 {
        font-weight: lighter;
        font-size: 60px;
        text-align: center;
    }

    div.styles {
        content-align: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        border-color: #1A2126;
        border: double #1A2126;
    }

    p {
        text-align: center;
    }
`;

const Contact = () => (
    <Styles>
        <Container>
        <div id="contact">
            <h2>Contact Me!</h2>
            <br />
            <div className="styles"></div> 
            <br />  
            <ContactForm />
        </div>
        <br />
        </Container>
    </Styles>
)

export default Contact;
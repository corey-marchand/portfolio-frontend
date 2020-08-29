import React from 'react';
import ContactForm from 'components/Form/Form';
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

    p {
        text-align: center;
    }
`;

const Contact = () => (
    <Styles>
        <div>
            <h2>Contact Me!</h2>
            <div className="styles"></div>   
            <ContactForm />
        </div>
    </Styles>
)

export default Contact;
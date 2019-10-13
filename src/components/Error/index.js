import React from 'react';
import styled from "styled-components";

function Error({error}) {
    return (
        <div>
            <DivWithErrorHandling>
                <h3>Oops! Something went wrong...</h3>
                <p>{error.message}</p>
            </DivWithErrorHandling>
        </div>
    );
}

const DivWithErrorHandling = styled.div`
    background-color: #f06d06;
    color: white;
    padding: 0.2em;
    text-align: center;
`;

Error.propTypes = {};

export default Error;

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Img = styled.img`
    border-radius: 15px;
    width: 30%;
`

function Picture(props) {
    return (
        <Img src={props.cat} alt={"cat"}/>
    )
}

export default connect((state) => {
    return {
        cat: state.cat
    }
})(Picture);
import styled from 'styled-components';

const NavWrapp = styled.div`
    position: fixed;
    bottom: 20px;
    z-index: 99;
    right: 60px;
    display: flex;
    flex-direction: row;
    .ion-activatable{
        margin-left: 10px;
    }
`;

// eslint-disable-next-line import/prefer-default-export
export { NavWrapp };

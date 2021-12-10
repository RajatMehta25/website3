import styled from 'styled-components'

export const Fitems5=styled.div`

font-size: 13px;
font: normal normal normal 13px/22px Lato;
letter-spacing: 0px;
color: #8F8F8F;
opacity: 1;
align-self: flex-start;
padding-left: 60px;

@media screen and (max-width:768px){
align-self: center;
padding:0;
}

`;

export const Fitems6=styled.div`
width: 100%;
display: flex;
/* text-align: center; */

color: #8F8F8F;
font-size: 15px;
justify-content:space-around;
&>span>a{
    text-decoration: none;
    color:#E32279;
    cursor: pointer;
}
`;
import styled from "styled-components";


export const Container=styled.div`
background: url("https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg");
width: 100vw;
height: 100vh;
`;

export const Inner=styled.div`
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: white;
/* margin-left:20px; */
margin-right: 150px;
display: flex;
border-radius:8px;
box-shadow: rgba(0,0,0,0.7) 5px 10px 15px;
justify-content: center;


@media screen and (max-width:768px){
 flex-direction   :column ;
 width: 100vw;
 
 top:0;
 left:0;
 transform:none;

}

`;
export const InnerLeft=styled.div`
background: url("https://www.india.com/wp-content/uploads/2021/11/Cristiano-Ronaldo.jpg") ;
/* background-position: center; */
  background-repeat: no-repeat;
  background-size: 100% 100%;
object-fit: cover;
height: 650px;
width: 50%;
border-radius:8px 0 0 8px;

/* border-radius:8px; */
@media screen and (max-width:768px){
 width: 100%;
 min-height: 650px;
 border-radius: 0px;

}
`;
export const InnerRight=styled.div`
/* background:purple; */
width: 50%;
height: 650px;
border-radius:8px;

@media screen and (max-width:768px){
 width: 100%;
 
}

`;
export const FormItems=styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
gap: 20px;
justify-content:center;
align-items: center;
`;
export const Fitems1=styled.div`

align-self: flex-start;
font-size: 30px;
padding: 15px;
margin-left: 40px;
font-weight: bolder;

@media screen and (max-width:768px){
 align-self: center;
 margin: 0;
 
}

`;
export const InputContainer=styled.div`
/* flex:1; */
text-align: center;
overflow-y:scroll;
width: 100%;
height: 60%;
align-content: center;
justify-content: center;
&::-webkit-scrollbar {display:none;}

`;
export const Fitems2=styled.div`
padding-bottom: 15px;
padding-top: 10px;
/* width: 80%; */


&>p{
  color: red;
}
`;
export const Fitems3=styled.div`
width: 100%;
padding-top: 10px;
justify-content: center;
align-items: center;
text-align: center;
&>button{
    width: 60%;
    height: 40px;
    border-radius: 20px;
    border:none;
    cursor: pointer;
    background: linear-gradient(to right, #E42279 , #6C1D63);
    color: white;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 5px;
    padding: 5px;
}


`;

export const Fitems4=styled.div`

width: 100%;
text-align: center;
padding-top: 10px;
font-size: 15px;
&>span>a{
    text-decoration: none;
    color:#E32279;
}
`;
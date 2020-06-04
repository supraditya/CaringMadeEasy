import React from 'react';
// import Image1 from '../../assets/Image1.jpg';
import Card from '../Card/Card';
import classes from './Categories.module.css';
const Categories=()=>{
    return(
        <div className={classes.Categories}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Card imagePath="https://cdn.aarp.net/content/dam/aarp/aarp_foundation/2017/09/1140-hurricane-irma-international.web.png" title="Disaster Relief" 
            contentPath="Foundations that work extensively for survivors of natural disasters, children with special medical needs, and the homeless." 
            buttonPath=""/>
            <Card imagePath="https://securityintelligence.com/wp-content/uploads/2019/11/external_the-potential-and-perils-of-the-iot-in-healthcare.jpg" title="Healthcare" 
            contentPath="Organisations dedicated to fight for easily affordable and available healthcare regardless of income background." 
            buttonPath=""/>
            <Card imagePath="https://monomousumi.com/wp-content/uploads/images-1-1.jpg" title="Rural Development" 
            contentPath="Improving the quality of life and economic well-being of people living in rural areas, often relatively isolated and sparsely populated areas." 
            buttonPath=""/>
            <Card imagePath="https://www.arcgis.com/sharing/rest/content/items/6c036c09c490450db100cbf867c7688a/resources/1571940616424.png?w=3340" title="Education" 
            contentPath="Education charities serve students from every age group, pre-school to graduate school and beyond." 
            buttonPath=""/>
            <Card imagePath="https://www.indiaeasytrip.com/extra-images/art-and-culture-of-india.jpg" title="Art and Culture" 
            contentPath="To identify, preserve and cultivate the creative spirit in each and every one of us." 
            buttonPath=""/>
            <Card imagePath="https://opiniojuris.org/wp-content/uploads/Environment.jpg" title="Environment" 
            contentPath="To take care of the only home we have." 
            buttonPath=""/>
            <Card imagePath="https://media-exp1.licdn.com/dms/image/C4E1BAQEt1SKgHBjfcA/company-background_10000/0?e=2159024400&v=beta&t=7ZMp8h6Lw12iCERsL11OWb2a5s96-wjXDCIl0QGS68E" title="Animal Welfare" 
            contentPath="Identifying species in crisis and to work for their betterment." 
            buttonPath=""/>
            <Card imagePath="https://lh3.googleusercontent.com/proxy/Cr5K8khSv0Qt7KMCegYvtrbPhz1ertzEyCe0bfIUNp1AtJvRqPXB53BJdaCgwbsvsQvlzQpl27yKbWXyT9Lns4KnaebWumh2A-X1LT3cPOq4p8pkeVW2oAH-bOfl6P4rutTdIoBkn8S9UCPnJywJzgIkZ-obCW3AOTLpZu4" title="Child Welfare" 
            contentPath="To ensure that the future of our race reaches their fullest potential." 
            buttonPath=""/>
            <Card imagePath="https://m.economictimes.com/thumb/msid-70927588,width-1200,height-900,resizemode-4,imgsize-557494/13.jpg" title="Scientific Research" 
            contentPath="To aid the communities at the forefront of thinking and innovation." 
            buttonPath=""/>
        </div>
    );
}
export default Categories;
import React from 'react';
import Image1 from '../../assets/Image1.jpg';
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
            <Card imagePath={Image1} title="Disaster Relief" 
            contentPath="Foundations that work extensively for survivors of natural disasters, children with special medical needs, and the homeless." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Healthcare" 
            contentPath="Organisations dedicated to fight for easily affordable and available healthcare regardless of income background." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Rural Development" 
            contentPath="Improving the quality of life and economic well-being of people living in rural areas, often relatively isolated and sparsely populated areas." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Education" 
            contentPath="Education charities serve students from every age group, pre-school to graduate school and beyond." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Art and Culture" 
            contentPath="To identify, preserve and cultivate the creative spirit in each and every one of us." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Environment" 
            contentPath="To take care of the only home we have." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Animal Welfare" 
            contentPath="Identifying species in crisis and to work for their betterment." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Child Welfare" 
            contentPath="To ensure that the future of our race reaches their fullest potential." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Scientific Research" 
            contentPath="To aid the communities at the forefront of thinking and innovation." 
            buttonPath=""/>
        </div>
    );
}
export default Categories;
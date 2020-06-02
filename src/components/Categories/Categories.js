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
            <Card imagePath={Image1} title="Category Title" 
            contentPath="Description for mentioned Charity Category." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Category Title" 
            contentPath="Description for mentioned Charity Category." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Category Title" 
            contentPath="Description for mentioned Charity Category." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Category Title" 
            contentPath="Description for mentioned Charity Category." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Category Title" 
            contentPath="Description for mentioned Charity Category." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Category Title" 
            contentPath="Description for mentioned Charity Category." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Category Title" 
            contentPath="Description for mentioned Charity Category." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Category Title" 
            contentPath="Description for mentioned Charity Category." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Category Title" 
            contentPath="Description for mentioned Charity Category." 
            buttonPath=""/>
            <Card imagePath={Image1} title="Category Title" 
            contentPath="Description for mentioned Charity Category." 
            buttonPath=""/>
        </div>
    );
}
export default Categories;
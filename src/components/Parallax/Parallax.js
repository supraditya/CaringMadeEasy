import React, {Component} from 'react';
import classes from './Parallax.module.css';
const style={
    fontSize: '24px',
    textAlign:'left',
    padding: '10px 25px 10px 10px'
}
const h1Style={
    fontSize: '36px',
    textAlign: 'left',
    padding: '10px 25px',
    margin: '4px'
}
const h6Style={
    fontSize: '18px',
    textAlign:'left',
    padding: '10px 28px',
    margin: '4px',
    opacity: '0.8'
}

class Parallax extends Component{
    btnClick() {
        window.open("https://www.udayfoundation.org/coronavirus-disease-covid-19/");
    }
    render()
    {
        return(
            <div className={classes.ParallaxContainer}>
                <h1 style={h1Style}>{this.props.title}</h1>
                <h6 style={h6Style}>By: {this.props.author}</h6>
                <div className={classes.Parallax} style={{ backgroundImage: `url(${this.props.url})`}}></div>
                <p style={style}>{this.props.content}</p>
                <button className={classes.buttonStyle} onClick={this.btnClick}>READ MORE</button>
                <hr className={classes.solid}></hr>
            </div>
        );
    }
}
export default Parallax;


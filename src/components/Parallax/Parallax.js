import React from 'react';
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

const Parallax=(props)=>{
    return(
        <div className={classes.ParallaxContainer}>
            <h1 style={h1Style}>Article Title</h1>
            <div className={classes.Parallax} style={{ backgroundImage: `url(${props.url})`}}></div>
            <p style={style}>Consectetur ex ad in laboris ea nulla eiusmod id magna elit mollit id non occaecat. Laborum sunt consectetur elit ex officia velit aliqua consectetur dolore sit mollit dolore consectetur culpa. Non esse excepteur magna nulla officia dolore occaecat veniam velit mollit. Proident culpa aute pariatur fugiat aliquip quis reprehenderit non quis minim. Lorem sunt nulla cupidatat officia irure nostrud nisi.

Adipisicing excepteur aliquip magna dolore occaecat aliquip culpa nulla cillum cillum ullamco ut. Adipisicing aliqua consectetur cillum non exercitation anim dolore ipsum. Proident excepteur ea ullamco in et nulla exercitation magna ex eu duis voluptate do. Eiusmod excepteur non id sint nisi anim aliqua esse eu adipisicing. Ut sint aliquip sint cillum cillum ipsum.

Reprehenderit occaecat aliquip ea aute aute velit id commodo minim pariatur. Dolore incididunt labore labore velit reprehenderit ipsum esse enim ullamco cupidatat aliquip aliquip eiusmod Lorem. Ut voluptate ullamco deserunt laboris aute esse amet quis. Voluptate ad duis cupidatat eiusmod Lorem veniam laboris.</p>
        </div>
    );
}
export default Parallax;
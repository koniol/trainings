
import React from 'react';
const { Pool, Client } = require('pg');

// const pool = new Pool({
//   user: 'koniol',
//   host: 'localhost',
//   database: 'trainings',
//   password: 'test123',
//   port: 5432,
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })


const TrainingsList = (props) => {
    
    // var elements = <li>asdasd</li>;
// console.log(props);
    var elements = props.list.map( (element) => {
        
         return (
            <li key={element.id} className={'training-item col-md-4'}>
                <h2>{element.title}</h2>
                    <p>
                    <img className={'img-thumbnail'} height="120" width="120" src={element.src} alt="" />
                        {element.text}
                    </p>
                <button className={'btn btn-success active'} onClick={event => props.send(event)}>Show more</button>
            </li>
         );}
    );

    return (
        <ul className={'training'}>{elements}</ul>
    );
}


export default TrainingsList;
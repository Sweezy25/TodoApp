import React from 'react';
import './style.css';
import Base from '../../components/Base';
import {Link} from 'react-router-dom';

const Display =({items,itemdelete}) => (
            <div>
                <ul className="ul_section">
                    {items.map(todo => (
                    (todo.deleted === false) ?
                        <div className="container div_section">
                            <li key={todo.id} className="row text-center">
                                <div className="col-8 text_box">{todo.text}</div>
                                <div className="col-1">
                                    <button type="submit" onClick={() =>itemdelete(todo.id)} className="btn ml-1 btn-danger" style={{left: "10px",width:"180px"}}>DELETE</button> 
                                </div>
                            </li>
                        </div>
                        :
                        <div></div>
                    ))}
                </ul>
                <div className="text-center">
                    <Link to={'/completed'}><Base bgcolor="success" text="COMPLETED TASKS" /></Link>
                </div>
            </div>
)
export default Display;
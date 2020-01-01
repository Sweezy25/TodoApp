import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Base from '../../components/Base';
import {Link} from 'react-router-dom';

const DisplayCompleted =({items}) => (
            <div>
                <Header/>
                <ul className="ul_section">
                    {items.map(todo => (
                    (todo.deleted === true) ?
                        <div className="container div_section">
                            <li key={todo.id} className="li text-center">
                                <div className="text_box">{todo.text}</div>
                            </li>
                        </div>
                        :
                        <div></div>
                    ))}
                </ul>
                <div className="text-center">
                    <Link to={'/'}><Base bgcolor="success" text="BACK"/></Link>
                </div>
            </div>
)
export default DisplayCompleted;
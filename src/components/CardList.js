import React from 'react';
import Card from './Card';
import '../style/cardlist.css';


const CardList = (props) => {

const cardComponent = props.robots.map((user, i) => {
  return <Card key = {i} id = {user.id} name = {user.name} email = {user.email}/>
});

return (
  <div className = "main"> {cardComponent} </div>
 
);

}

export default CardList;
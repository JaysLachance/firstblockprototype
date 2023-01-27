import React from 'react';
import styled from 'styled-components';

const ListItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListItem = styled.div`
  width: 20%;
  box-sizing: border-box;
  padding: 8px;
`;

const YourComponent = () => {
  const items = [
    {id: 1, title: 'item1', description: 'desc1', img: 'img1'},
    {id: 2, title: 'item2', description: 'desc2', img: 'img2'},
    {id: 3, title: 'item3', description: 'desc3', img: 'img3'},
    {id: 4, title: 'item4', description: 'desc4', img: 'img4'},
    {id: 5, title: 'item5', description: 'desc5', img: 'img5'},
  ]
  return (
    <ListItemWrapper>
      {items.map(item => (
        <ListItem key={item.id}>
          <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <img src={item.img} alt={item.title} />
          </div>
        </ListItem>
      ))}
    </ListItemWrapper>
  )
}

export default YourComponent;
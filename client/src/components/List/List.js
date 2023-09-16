import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const List = ({ elements }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', border: '5px solid pink', margin: '10px' }}>
      {elements.map((element) => (
        <Card key={element.id} style={{ width: '18rem', height: '16%', border: '3px dotted red', borderRadius: '10px', margin: '10px', padding: '10px' }}>
          <Card.Img variant="top" src={element.imgUrl} style={{ width: '200px', height: '300px', border: '2px solid black', borderRadius: '5px' }} />
          <Card.Body>
            <Card.Title>{element.name}</Card.Title>
            <p style={{ margin: '0px' }}>
              {elements.imdblink}
            </p>
            <Button style={{ backgroundColor: 'pink', borderRadius: '10px' }}>Click here to Watch</Button>
            <br />
            <Button style={{ backgroundColor: 'pink', borderRadius: '10px' }}>Add to Queue</Button>
            <Button style={{ backgroundColor: 'pink', borderRadius: '10px' }}>
              <a href={element.imdblink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                IMDb Link
              </a>
            </Button>

          </Card.Body>
        </Card>
      ))}
    </div>
  );
};


export default List;

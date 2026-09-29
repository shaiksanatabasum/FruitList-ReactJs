import React from 'react'; function FruitsList() 
{ 
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']; 
return ( 
<div style={{ textAlign: 'center', marginTop: '50px' }}> 
<h2>Fruit List</h2> 
<ul style={{ listStyle: 'none', padding: 0 }}> 
{fruits.map((fruit, index) => ( 
<li key={index} style={{ margin: '5px 0' }}> 
• {fruit} 
</li> 
))} 
</ul> 
</div> 
); 
} 
export default FruitsList;
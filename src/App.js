const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
function App() {
   const listItems= products.map((product)=>{
     return <li key={product.id} style={{color:product.isFruit?'red':'blue'}}>{product.title}</li>
    })
  return (
    <div>
     <ul> {listItems}</ul>
    </div>
  );
}

export default App;

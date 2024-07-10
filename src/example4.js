const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

  export default function List(){
    const listItems=people.filter((person)=>{
        
    });
    return (
        <>
        <ul>{listItems}</ul>
        </>
    );
  }
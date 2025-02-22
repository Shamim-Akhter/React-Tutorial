const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];

  function getImageUrl(person){
    return (
        'https://i.imgur.com/' + person.imageId + 's.jpg'
    )
  }

  export default function List(){
    const listItems=people.map((person)=>{
       return ( <li key={person.id}>
         <img src={getImageUrl(person)} alt={person.name}/>
         <p><b>{person.name}:</b>
            {' '+person.profession} known for {person.accomplishment}
        </p>
        </li>
       )
    })

    return (
        <>
        <h1>Amazing Scientist's</h1>
        <ul>{listItems}</ul>
        </>
    );
  }
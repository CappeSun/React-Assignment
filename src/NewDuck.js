import './NewDuck.css';
import {useState, useEffect} from 'react';

function NewDuck({handleAdd}){
	const [newDuck, setNewDuck] = useState('');

	const handleNewDuck = async () =>{
	    let response = await fetch('https://sputnik.zone/school/temp/react/duckCORS.php');
	    let duck = await response.json();
	    setNewDuck(duck.url);
	}

	useEffect(() =>{
		handleNewDuck();
	}, []);

	return (
		<div className="newDuck">
			<img src={newDuck} alt={newDuck}/>
			<div className="btnDiv">
				<button onClick={() => handleAdd(newDuck)}>Pick Duck</button>
				<button onClick={() => handleNewDuck()}>Another Duck</button>
			</div>
		</div>
	);
}

export default NewDuck;

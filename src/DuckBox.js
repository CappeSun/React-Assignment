import './DuckBox.css';
import {useState} from 'react';
import Duck from './Duck.js';
import NewDuck from './NewDuck.js';

function DuckBox(){
	const [ducks, setDucks] = useState([]);

	const handleAdd = (duck) =>{
		if (ducks.includes(duck)) return;
		let newDucks = [...ducks];
		newDucks.push(duck)
		setDucks(newDucks);
	}

	const handleDelete = (duck) =>{
		setDucks(ducks.filter((item) => item !== duck));
	}

	return (
		<div className="duckBox">
			<div className="newDuckCont">
				<NewDuck handleAdd={(duck) => handleAdd(duck)}/>
			</div>
			<div className="ducksCont">
				{ducks.map((duck) =>(
					<div className="duckCont" key={duck}>
						<Duck url={duck}/>
						<button className="removeBtn" onClick={() => handleDelete(duck)}>Remove</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default DuckBox;

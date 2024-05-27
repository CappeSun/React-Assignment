import './Duck.css';

function Duck({url}){
	return (
		<a className="duck" href={url} target="_blank" rel="noreferrer">
			<img src={url} alt={url}/>
		</a>
	);
}

export default Duck;

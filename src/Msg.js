import './Msg.css';
import Emote from './Emote.js';

function Msg({user, content, emoteList}){
	let parsedContent = [];
	content.split(' ').map((word) =>{
		switch (word[0]){
			case ('\\'):
				parsedContent.push(<span>{word.substring(1)}</span>);
				break;
			case (':'):
				parsedContent.push(<Emote className="emote" name={word.substring(1)} emoteList={emoteList}/>);
				break;
			case ('/'):
				parsedContent.push(<span>{'<used '+word+'>'}</span>);
				break;
			case ('!'):
				parsedContent.push(<span>{'<used '+word+'>'}</span>);
				break;
			case ('?'):
				parsedContent.push(<span>{'<used '+word+'>'}</span>);
				break;
			default:
				parsedContent.push(<span>{word}</span>);
		}
		parsedContent.push(<span> </span>);
	})

	return (
		<div className="msg">{user}: {parsedContent}</div>
	);
}

export default Msg;

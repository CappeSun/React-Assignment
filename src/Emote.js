import './Emote.css';

function Emote({className, name, emoteList}){
	if (emoteList.includes(name))
		return (
			<img className={className} src={'https://sputnik.zone/sputnik/school/temp/react/emotes/'+name+'.png'}/>
		);
	else
		return (
			<span>:{name}</span>
		);
}

export default Emote;

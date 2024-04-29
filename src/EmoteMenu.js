import './EmoteMenu.css';
import Emote from './Emote.js';

function EmoteMenu({className, addEmote, emoteList}){
	return (
		<div className={className}>
			{emoteList.map((name) =>(
				<button className="emoteBtn" onClick={() => addEmote(name)} key={name}>
					<Emote className="emoteImg" name={name} emoteList={emoteList}/>
				</button>
			))}
		</div>
	);
}

export default EmoteMenu;

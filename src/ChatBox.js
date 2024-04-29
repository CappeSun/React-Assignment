import './ChatBox.css';
import {useState, useEffect} from 'react';
import Msg from './Msg.js';
import EmoteMenu from './EmoteMenu.js';

function ChatBox(){
	const [messages, setMessages] = useState([]);
	const [messageText, setMessageText] = useState('');
	const [messageId, setMessageId] = useState(1);
	const [emoteList, setEmoteList] = useState([]);

	useEffect(() => {
		async function fetchEmoteList(){
		    let response = await fetch('https://sputnik.zone/sputnik/school/temp/react/emoteList.php');
		    let emoteList = await response.json();
		    setEmoteList(emoteList);
		}
		fetchEmoteList();
	}, []);

	const handleSend = (e) =>{
		e.preventDefault();
		if (messageText == '') return;
		let newMessages = messages;
		newMessages.push({id: messageId, user: 'You', content: messageText, deleted: false});
		setMessages(newMessages);
		setMessageText('');
		setMessageId(messageId+1);
	}

	function handleDelete(id){
		const newMessages = messages.map((msg) => msg.id == id ? {...msg, deleted: true} : msg);
		setMessages(newMessages);
	}

	const addEmote = (name) =>{
		const newMessageText = messageText+':'+name;
		setMessageText(newMessageText);
	}

	const writeMessage = (e) =>{
		setMessageText(e.target.value);
	}

	return (
		<div className="chatBox">
			<div className="chat">
				{messages.map((msg) =>(
					<div>
						<button className="deleteBtn" onClick={() => handleDelete(msg.id)}>Delete</button>
						<Msg user={msg.user} content={msg.deleted ? '<deleted>' : msg.content} emoteList={emoteList}></Msg>
					</div>
				))}
			</div>
			<div className="sendAreaCont">
				<form className="sendArea" onSubmit={handleSend}>
					<textarea className="textArea" name="msg" value={messageText} onChange={writeMessage}></textarea>
					<button className="sendBtn" type="submit">Send!</button>
				</form>
				<EmoteMenu className="emoteMenu" addEmote={addEmote} emoteList={emoteList}></EmoteMenu>
			</div>
		</div>
	);
}

export default ChatBox;

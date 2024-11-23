import { useState } from "react";

export default function Player({ initialName, sympol , isActive ,onNameChange }) {
	const [playerName, setPlayerName] = useState(initialName);

	const [isEditing, setIsEditing] = useState(false);
	let btnName = "Edit";
	if (isEditing) {
		btnName = "save";
	}
	function handleClick() {
		setIsEditing((editing) => !editing);
		if(isEditing){
			onNameChange(sympol , playerName)
		}
	}
    function handleChange(event) {
        setPlayerName(event.target.value);
    }
	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{isEditing === true && (
					<input
						type="text"
						value={playerName}
                        required
                        onChange={handleChange}
						className="player-name"
					/>
				)}
				{isEditing === false && <span className="player-name">{playerName}</span>}
				<span className="player-symbol">{sympol}</span>
			</span>
			<button onClick={handleClick}>{btnName}</button>
		</li>
	);
}
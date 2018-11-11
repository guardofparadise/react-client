import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeline = props => {
	const { profileImageUrl, username } = props
	return (
		<div className="row">
			<UserAside 
				profileImageUrl={profileImageUrl}
				username={username}
			/>
			<MessageList />
		</div>
	)
}

export default MessageTimeline;
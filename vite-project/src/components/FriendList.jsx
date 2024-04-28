// import friendListData from "./friendListData.json";
import FriendListItem from "./FriendListItem";


export default function FriendList({friend}) {
  return (
    <div>
      {friend.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </div>
  );
}

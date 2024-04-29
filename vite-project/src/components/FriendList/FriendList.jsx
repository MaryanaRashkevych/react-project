// import friendListData from "./friendListData.json";
import FriendListItem from "./FriendListItem";


export default function FriendList({friend}) {
  return (
    <div>
      {friend.map((friendData) => (
        <FriendListItem key={friendData.id} friend={friendData} />
      ))}
    </div>
  );
}
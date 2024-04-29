import UserProfile from './UserProfile/UserProfile.jsx';
import userdata from './UserProfile/userData.json'
import friendListData from "./FriendList/friendListData.json";
 import FriendList from './FriendList/FriendList.jsx';
 import TransactionItem from "./TransactionData/TransactionItem.jsx";
 import data from './TransactionData/transactions.json';


export default function App() {
  return (
    <div>
    <UserProfile userdata={userdata}/>
    <FriendList friend={friendListData}/>
    <TransactionItem items={data}/>
    </div>
);
}

 
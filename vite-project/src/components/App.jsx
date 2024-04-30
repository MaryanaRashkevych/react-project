import UserProfile from './UserProfile/UserProfile.jsx';
import userdata from './UserProfile/userData.json'
import friendListData from "./FriendList/friendListData.json";
 import FriendList from './FriendList/FriendList.jsx';
//  import TransactionItem from "./TransactionData/TransactionItem.jsx";
import TransactionHistory from './TransactionData/TransactionHistory.jsx';
 import data from './TransactionData/transactions.json';
import css from "./App.module.css"

export default function App() {
  return (
    <div>
    <UserProfile userdata={userdata}/>
    <div className={css.containerFriend}> <FriendList friend={friendListData}/></div>
    <TransactionHistory items={data}/>
    </div>
);
}

 
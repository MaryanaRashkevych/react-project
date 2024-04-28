import UserProfile from './UserProfile';
import userdata from './userData.json'
import friendListData from "./friendListData.json";
 import FriendList from './FriendList.jsx';
 import TransactionItem from "./TransactionItem";
 import data from './transactions.json';


export default function App() {
  return (
    <div>
    <UserProfile userdata={userdata}/>
    <FriendList friend={friendListData}/>
    <TransactionItem items={data}/>
    </div>
);
}

 
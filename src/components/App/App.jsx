import './App.css'
import Profile from "../Profile/Profile.jsx";
import userData from "../../userData.json";
import friends from "../../friends.json";
import FriendList from "../FriendList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../userTransactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      
      <hr />

      <FriendList friends={friends} />

      <hr />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
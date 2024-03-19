import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const onlineStatus = isOnline ? styles.isOnline : styles.isOffline;

  return (
    <div>
      <img className={styles.avatarImage} src={avatar} alt="Avatar" width="48" />
      <p className={styles.friendName}>{name}</p>
      <p className={onlineStatus}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;

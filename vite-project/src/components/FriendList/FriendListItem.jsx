import css from "./FriendList.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend:{avatar, name, isOnline} }){  
  return (
   
      <div className={css.container}>
      <div className={css.imgContainer}><img className={css.img} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(
        css.text,
        isOnline ? css.online : css.offline)}>
          {isOnline ? "Online" : "Offline"}</p>
      </div>
    </div> 
  );
}
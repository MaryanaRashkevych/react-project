import css from "./UserProfile.module.css";
export default function UserProfile({userdata:{ username, tag, location, avatar, stats:
  { followers, views, likes } }}) {
  
  return (
    <div className ={css.container}> 
  <div className={css.imgcontainer}>
    <img className={css.img}
      src={avatar}
      alt="User avatar"
    />
    <p className={css.username}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span className={css.span1}>Followers</span>
      <span className={css.spanBottom}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.span1}>Views</span>
      <span className={css.spanBottom}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.span1}>Likes</span>
      <span className={css.spanBottom}>{likes}</span>
    </li>
  </ul>
</div>);
}
  

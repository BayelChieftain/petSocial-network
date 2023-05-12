import React from "react";
import userPhoto from '../../assts/img/interact.png';
import styles from './Users.module.css';
import { NavLink } from "react-router-dom";
import {  userAPI } from "../../API/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) 
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {pages.push(i)}

    return <div>
    {pages.map( p => {
       return <span className={props.currentPages === p && styles.selectedPage} onClick={ (e) => {props.onPageChanged(p)}}>{p}</span>
    })}
    
{
    props.users.map( (u) => 
        <div key={u.id} >
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ?  u.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    
                    { u.followed 
                    ? <button disabled={props.followingProgres.some( id => id === u.id)} onClick={ () => {
                       props.setIsFollowingProgres(true, u.id)
           userAPI.followDelete(u.id).then( data => {
               if (data.resultCode === 0) {
                props.unfollow(u.id); 
               }
               props.setIsFollowingProgres(false, u.id)
            });
                       
                        }} >Unfollow</button> 
                    
                    : <button disabled={props.followingProgres.some( id => id === u.id)}  onClick={ () => { 
                        props.setIsFollowingProgres(true, u.id)
                        userAPI.followPost(u.id).then( data => {
               if (data.resultCode === 0) {
                props.follow(u.id); 
               }
               props.setIsFollowingProgres(false, u.id)
            });
                       
                        
                        }}>follow</button>}
                </div>
            </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div> {"u.location.city"} </div>
                        <div> {"u.location.city"} </div>
                        
                    </span>
                </span>
        </div> 
    )
}
</div>

    
};

export default Users;
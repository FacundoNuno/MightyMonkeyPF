"use client";
import React from "react";
import MyProfile from "../../components/profile/Profile";
import style from "./page.module.css";
import { History } from "../../components/history/History";
import useSWR from "swr";
import { fetcher } from "../../pages/api/fetcher";
import { Unauthorized } from "../../components/unauthorized/page";
import loading from "../../assets/images/giphy.gif";
import Image from "next/image";
import EditProfile from "../../components/editProfile/EditProfile";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import logoContact from '../../assets/images/monocon.png'

const Profile = () => {
  const { data } = useSWR("api/user", fetcher);

  // console.log(data)

  const [editing, setEditing] = useState(false);

  const changeComponent = (value) => {
    setEditing(value);
  };

  // false: profile true: editprofile

  return (
    <>
      <div className={style.profileContainer}>
        <Image className={style.logo} src={logoContact} alt="#"/>
        {data ? (
          data.isLoggedIn ? (
            <div className={style.container}>
              <h1 className={style.titleContainer}>
               My <span>PROFILE</span> 
              </h1>
              {editing ? (
                <EditProfile changeComponent={changeComponent} data={data} />
              ) : (
                <MyProfile changeComponent={changeComponent} />
              )}
              <History />
            </div>
          ) : (
            <Unauthorized />
          )
        ) : (
          <div className={style.loadingMonkeyContainer}>
            <Image className={style.loading} src={loading} alt="gif" />
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;

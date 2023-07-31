import React, { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import useSWR from "swr";
import { useRouter } from "next/navigation";


const logout = async () => {
  const data = await fetch("http://localhost:3000/api/logout", {
    method: "GET",
  });
  const res = await data.json();
  return res;
};

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};


export const Navbar = () => {

  const { data, error } = useSWR("api/user", fetcher);

  const router = useRouter();

  const obj = [
    { label: "Home", route: "/home" },
    { label: "About", route: "/aboutUs" },
    { label: "Contact", route: "/contact" },
    { label: "Profile", route: "/profile" },
    { label: "Join!", route: "/join" },
  ];

  // ------------------------- Log out -------------------------
  const logoutHandler = async () => {
    const res = await logout();
    window.location.reload();
  };

  const logInHandler = () => {
    router.push("/");
  };

  return (
      // <div className={style.navContainer}>
        <div className={style.barContainer}>
          <div className={style.imageAndNav}>
            <Image className={style.logo} src={logo} alt="#" />
            <div className={style.options}>
              <ul className={style.ul}>
                {obj.map(({ label, route }) => {
                  return (
                    <Link className={style.link} key={route} href={route}>
                      <li>{label}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={style.adminBar}>
          {data ? (
        <>
          {data.isAdmin ? (
            <Link className={style.link} key="admin" href="dashboard">
              <li>Admin</li>
            </Link>
          ) : null}
          |
          {data.isLoggedIn ? (
            <li onClick={logoutHandler}>Log out</li>
          ) : (
            <li onClick={logInHandler}>Log In</li>
          )}
        </>
      ) : null}
          </div>
        </div>
      // </div>
  );
};

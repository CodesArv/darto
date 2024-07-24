import React from 'react';
import { useSelector } from 'react-redux';
import './SideDrawer.css';

const SideDrawer = (props) => {
  const { isAuthenticated } = useSelector((state) => state.login.authData);

  let drawerClasses = ['side-drawer'];

  if (props.show) {
    drawerClasses = ['side-drawer', 'open'];
  }

  const closeDrawer = () => {
    props.closeSideDrawer();
  };

  return (
    <>
      <nav className={drawerClasses.join(' ')}>
        <button className="toggle-button mt-2 ml-3" onClick={() => closeDrawer()}>
          <div className="toggle-button-line cross button-line-1" />
          <div className="toggle-button-line cross button-line-2" />
          <div className="toggle-button-line cross button-line-3" />
        </button>
        <ul>
          <li>{isAuthenticated ? <a href="/profile">My Profile</a> : <a href="/">Home</a>}</li>
          <li>
            <a href="/">Shops</a>
          </li>
          <li>
            <a href="/">FAQS</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default SideDrawer;

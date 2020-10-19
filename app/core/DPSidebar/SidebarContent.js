import React, {useEffect} from "react";
import {Menu} from "antd";
import Link from "next/link";

import {useRouter} from 'next/router'
import CustomScrollbars from "../../../util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../../constants/ThemeSetting";
import IntlMessages from "../../../util/IntlMessages";
import {useDispatch, useSelector} from "react-redux";
import {setPathName} from "../../../redux/actions";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = () => {

  const dispatch = useDispatch();
  const router = useRouter()
  let {navStyle, themeType, pathname} = useSelector(({settings}) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  useEffect(() => {
    dispatch(setPathName(router.pathname))
  }, [router.pathname]);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline"
            selectedKeys='main'
            >
            <Menu.Item key="main">
              <Link href="/main/dashboard/dp">
                <a><i className="icon icon-dasbhoard" />
                  <span>Dashboard</span>
                </a></Link>
            </Menu.Item>
            <Menu.Item key="main/campus">
              <Link href="/main/">
                <a><i className="icon icon-dasbhoard" />
                  <span>Campus</span>
                </a></Link>
            </Menu.Item>
            <Menu.Item key="main/admission">
              <Link href="/main/admission">
                <a><i className="icon icon-dasbhoard" />
                  <span>Admission</span>
                </a></Link>
            </Menu.Item>
            <Menu.Item key="main/academics">
              <Link href="/main/academics">
                <a><i className="icon icon-dasbhoard" />
                  <span>Academics</span>
                </a></Link>
            </Menu.Item>
            <Menu.Item key="main/fee">
              <Link href="/main/fee">
                <a><i className="icon icon-dasbhoard" />
                  <span>Fee</span>
                </a></Link>
            </Menu.Item>
            <Menu.Item key="main/student">
              <Link href="/main/student">
                <a><i className="icon icon-dasbhoard" />
                  <span>Student</span>
                </a></Link>
            </Menu.Item>
            <Menu.Item key="main/teacher">
              <Link href="/main/teacher">
                <a><i className="icon icon-dasbhoard" />
                  <span>Teacher</span>
                </a></Link>
            </Menu.Item>
            <Menu.Item key="main/staff">
              <Link href="/main/staff">
                <a><i className="icon icon-dasbhoard" />
                  <span>Staff</span>
                </a></Link>
            </Menu.Item>
            <Menu.Item key="main/parent">
              <Link href="/main/parent">
                <a><i className="icon icon-dasbhoard" />
                  <span>Parent</span>
                </a></Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;


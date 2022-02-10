import React from 'react';
import { Menu, Grid, Button } from 'antd';


const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
       <Button type="primary" danger>Sign In</Button>
      </Menu.Item>
      <Menu.Item key="app" >
      <Button type="primary" >Sign Up</Button>
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;

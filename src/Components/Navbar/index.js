import React from 'react';
import RightMenu from './RightMenu'

export default function Navbar() {
	
  return (
	<nav className="menuBar">
	<div className="logo">
		<a href="#top">logo</a>
	</div>
	<div className="menuCon">
		
		<div className="rightMenu">
			<RightMenu />
		</div>
		
		

	</div>
</nav>
  );
}


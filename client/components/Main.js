import React from 'react';
// Routing links
import {Link} from 'react-router';


// This is always the parent component. The children are the Photogrid and Single pages. Switching out is done by React Router.
// this.props.children will be populated by Router. 
// you have to use cloneElement because props cant be passed down this way. this.props.children will be <Single> and this.props would be connected to it (i think?)
// this.props.children would just give you the component to render without the props (i think)

class Main extends React.Component {
   
    render() {
        return (
        	<div>
        		<h1>
        		<Link to="/">InstaKitty</Link>
        		</h1>
        		{React.cloneElement(this.props.children, this.props)}
        	</div>
        )
    }
}

export default Main;

import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';
 
const RouteWrapper = ({isPrivate : boolena, component : Component , ...rest}) => {
    const isSignedIn = true;
    if(isPrivate && !isSignedIn){
        return <Redirect to="/" />
    }

    if(!isPrivate && isSignedIn){
        return <Redirect to="/dashboard" />
    }

    return <Route {...rest} component={Component}/>
}

RouteWrapper.protoTypes = {
    isPrivate : PropTypes.bool,
    component : PropTypes.oneOfType([PropTypes.element , PropTypes.func ]).isRequired
}

RouteWrapper.defaultProps = { isPrivate : false }

export default RouteWrapper;
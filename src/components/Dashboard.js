import React, {Component} from 'react';
import {connect} from 'react-redux'

class Dashboard extends Component {
    render(){
        console.log('from dashboard now: ', this.props)
        return (
            <div>This is the Dashboard Component</div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Dashboard);
import React, {Component} from "react";
import Login from './Login';
import UserList from "./UserList";
import '../styles/index.css';

class App extends Component {
  
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {/* <h2>Login</h2> */}
            <Login/>
            <UserList/>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     promo: state.movies.promo
//     };
// };

// export default connect(mapStateToProps, null)(withRouter(App));
export default App;

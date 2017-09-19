import React from 'react';
import Header from './Components/Header';
import Sidemenu from './Components/Sidemenu';
import Content from './Components/Content';
import ReactDOM from 'react-dom';
import './index.css';


class Index extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <Header />
        <Content />
      </div>
    )
  }
}


ReactDOM.render(<Index />, document.getElementById('root'));

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import addFav from './Assets/Images/addFav.png';
import removeFav from './Assets/Images/removeFav.png';
import comments from './Assets/Images/comments.png';
import isclose from './Assets/Images/isclose.png';
import isopen from './Assets/Images/isopen.png';
import gitlogo from './Assets/Images/logo.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      issues: [
        {
          title: "What is Virtual DOM?",
          comments: 5,
          isOpen: true,
          isFaviorite: false,
          date: "22-09-2018"
        },
        {
          title: "What is difference between localStorage and localForage?",
          comments: 12,
          isOpen: false,
          isFaviorite: true,
          date: "16-07-2018"
        },
        {
          title: "How to render Array of Object in React Using map()?",
          comments: 120,
          isOpen: true,
          isFaviorite: true,
          date: "12-05-2018"
        },
        {
          title: "What is Lifecycle Hooks?",
          comments: 1012,
          isOpen: false,
          isFaviorite: false,
          date: "17-05-2018"
        },
        {
          title: "What is console.assert()?",
          comments: 12500,
          isOpen: false,
          isFaviorite: true,
          date: "17-01-2018"
        },
        {
          title: "how to create components in react?",
          comments: 1,
          isOpen: true,
          isFaviorite: false,
          date: "10-02-2014"
        }
      ],
      result: ""
    })
    this.searching = this.searching.bind(this);
  }

  addToFav(ind) {
    const { issues } = this.state;
    const issue = issues[ind].isFaviorite ? issues[ind].isFaviorite = false : issues[ind].isFaviorite = true;
    this.setState({
      issues
    })
  }

  searching(e) {
    const { issues, result } = this.state;
    this.setState({
      result: e.target.value
    })
  }

  render() {
    const { issues, result } = this.state;
    if (result == "is:open") {
      return (
        <div className="App">
          <nav class="navbar bg-dark">
            <img src={gitlogo} className="logo float-left" />
          </nav>
          <div className="container">
            <input type='text' placeholder='is:close / is:open' onChange={this.searching} className="form-control col-md-12 mt-5" />
          </div>
          {
            issues.map((value, index) => {
              if (value.isOpen) {
                return <table className="container" >
                  <tr>
                    <td className="float-left">{value.isOpen ? <img src={isopen} className="eyes-icon" /> : <img src={isclose} className="eyes-icon2" />}</td>
                    <td className="float-left"><h5>{value.title}</h5></td>
                    <td className="float-right"><img src={comments} className="comments-icon" />{value.comments}</td>
                  </tr>

                  <tr>
                    <td className="float-left"><p className="date">Date : {value.date}</p></td>
                  </tr>

                  <tr>
                    <td className="float-right">{value.isFaviorite ? <img src={addFav} className="faviorites-icon" onClick={this.addToFav.bind(this, index)} /> : <img src={removeFav} className="faviorites-icon" onClick={this.addToFav.bind(this, index)} />}</td>
                  </tr>

                  <hr />
                </table>
              }
            })
          }

        </div>
      );
    }

    else if (result == "is:close") {
      return (
        <div className="App">
          <nav class="navbar bg-dark">
            <img src={gitlogo} className="logo float-left" />
          </nav>
          <div className="container">
            <input type='text' placeholder='is:close / is:open' onChange={this.searching} className="form-control col-md-12 mt-5" />
          </div>
          {
            issues.map((value, index) => {
              if (!value.isOpen) {
                return <table className="container" >
                  <tr>
                    <td className="float-left">{value.isOpen ? <img src={isopen} className="eyes-icon" /> : <img src={isclose} className="eyes-icon2" />}</td>
                    <td className="float-left"><h5>{value.title}</h5></td>
                    <td className="float-right"><img src={comments} className="comments-icon" />{value.comments}</td>
                  </tr>

                  <tr>
                    <td className="float-left"><p className="date">Date : {value.date}</p></td>
                  </tr>

                  <tr>
                    <td className="float-right">{value.isFaviorite ? <img src={addFav} className="faviorites-icon" onClick={this.addToFav.bind(this, index)} /> : <img src={removeFav} className="faviorites-icon" onClick={this.addToFav.bind(this, index)} />}</td>
                  </tr>

                  <hr />
                </table>
              }
            })
          }
        </div>
      );
    }

    else {
      return (
        <div className="App">
          <nav class="navbar bg-dark">
            <img src={gitlogo} className="logo float-left" />
          </nav>
          <div className="container">
            <input type='text' placeholder='is:close / is:open' onChange={this.searching} className="form-control col-md-12 mt-5" />
          </div>
          <br />
          <div className="container">
            <hr />
          </div>
          {
            issues.map((value, index) => {
              return <table className="container" >
                <tr>
                  <td className="float-left">{value.isOpen ? <img src={isopen} className="eyes-icon" /> : <img src={isclose} className="eyes-icon2" />}</td>
                  <td className="float-left"><h5>{value.title}</h5></td>
                  <td className="float-right"><img src={comments} className="comments-icon" />{value.comments}</td>
                </tr>

                <tr>
                  <td className="float-left"><p className="date">Date : {value.date}</p></td>
                </tr>

                <tr>
                  <td className="float-right">{value.isFaviorite ? <img src={addFav} className="faviorites-icon" onClick={this.addToFav.bind(this, index)} /> : <img src={removeFav} className="faviorites-icon" onClick={this.addToFav.bind(this, index)} />}</td>
                </tr>

                <hr />
              </table>
            })
          }
        </div>
      );
    }
  }
}

export default App;

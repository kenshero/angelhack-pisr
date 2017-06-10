import React from 'react'
import Link from 'next/link'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Collapse, Button, CardBlock, Card } from 'reactstrap'

export default class MatchPage extends React.Component {
  static async getInitialProps ({ req }) {
    return {
    }
  }

  constructor() {
    super();
    this.onChangeTab = this.onChangeTab.bind(this);
    this.state = { choiceTab: 1 };
  }


  onChangeTab(tabIndex) {
    const nextState = {
      choiceTab: tabIndex
    }
    this.updateState(nextState)
  }

  updateState(nextState) {
    this.setState( () => nextState)
    console.log(this.state);
  }

  render () {
    return (
      <div>
        <Header/>
        <Navbar/>
        <div className="container m-l-t">
          <div className="tabs is-boxed is-medium m-l-t">
            <ul>
              <li className={ this.state.choiceTab == 1 ? 'is-active' : '' } >
                <a onClick={(e) => this.onChangeTab(1)} >
                  <span>For Sale </span>
                </a>
              </li>
              <li className={ this.state.choiceTab == 2 ? 'is-active' : '' }>
                <a onClick={(e) => this.onChangeTab(2)}>
                  <span>For Corporate </span>
                </a>
              </li>
            </ul>
          </div>
          { this.state.choiceTab == 1 &&
            <div>
              <div className="field">
                <label className="label">Name</label>
                <p className="control">
                  <input className="input" type="text" placeholder="Text input" />
                </p>
              </div>

              <div className="field">
                <label className="label">Address</label>
                <p className="control">
                  <textarea className="textarea" placeholder="Address"></textarea>
                </p>
              </div>

              <div className="field">
                <p className="control">
                  <label className="radio">
                    <input type="radio" name="male" />
                    Male
                  </label>
                  <label className="radio">
                    <input type="radio" name="female" />
                    No
                  </label>
                </p>
              </div>

              <div className="field is-grouped">
                <p className="control">
                  <Link href="/match">
                    <a className="button is-primary">Submit</a>
                  </Link>
                </p>
              </div>
            </div>
          }
          { this.state.choiceTab == 2 &&
            <div>
              <div className="field">
                <label className="label">Name Cop</label>
                <p className="control">
                  <input className="input" type="text" placeholder="Text input" />
                </p>
              </div>

              <div className="field">
                <label className="label">Address</label>
                <p className="control">
                  <textarea className="textarea" placeholder="Address"></textarea>
                </p>
              </div>

              <div className="field is-grouped">
                <p className="control">
                  <Link href="/match">
                    <a className="button is-primary">Submit</a>
                  </Link>
                </p>
              </div>
            </div>
          }
          </div>
      <style jsx>{`
          .m-l-t {
            margin-top: 24px !important;
          }
          .m-l-l {
            margin-bottom: 18px;
          }
      `}
      </style>
    </div>
    )
  }
}

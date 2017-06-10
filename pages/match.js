import React from 'react'
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
    this.toggleCop = this.toggleCop.bind(this);
    this.toggleSale = this.toggleSale.bind(this);
    this.state = {
      choiceTab: 1,
      copPosts: [{
        id: 1,
        title: "สินค้า; ไหมเย็บแผล, synthetic mesh, biosurgical adhesive ",
        hospital: " ลูกค้าเป้าหมาย รพ. จุฬา, รพ. ตำรวจ, รพ. กรุงเทพ",
        description: "oooooooooooooooooooooo",
        toggle: false
      },{
        id: 2,
        title: "XXXXXXXXXXXXXXXXXXXXXXXXX",
        hospital: "รพ. จุฬา, รพ. ตำรวจ, รพ. กรุงเทพ",
        description: "oooooooooooooooooooooo",
        toggle: false
      },{
        id: 3,
        title: "XXXXXXXXXXXXXXXXXXXXXXXXX",
        hospital: "รพ. จุฬา, รพ. ตำรวจ, รพ. กรุงเทพ",
        description: "oooooooooooooooooooooo",
        toggle: false
      },{
        id: 4,
        title: "XXXXXXXXXXXXXXXXXXXXXXXXX",
        hospital: "รพ. จุฬา, รพ. ตำรวจ, รพ. กรุงเทพ",
        description: "oooooooooooooooooooooo",
        toggle: false
      }],
      salePosts: [{
        id: 1,
        title: "ZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
        hospital: "รพ. จุฬา, รพ. ตำรวจ, รพ. กรุงเทพ",
        description: "oooooooooooooooooooooo",
        toggle: false
      },{
        id: 2,
        title: "ZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
        hospital: "รพ. จุฬา, รพ. ตำรวจ, รพ. กรุงเทพ",
        description: "oooooooooooooooooooooo",
        toggle: false
      },{
        id: 3,
        title: "ZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
        hospital: "รพ. จุฬา, รพ. ตำรวจ, รพ. กรุงเทพ",
        description: "oooooooooooooooooooooo",
        toggle: false
      },{
        id: 4,
        title: "ZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
        hospital: "รพ. จุฬา, รพ. ตำรวจ, รพ. กรุงเทพ",
        description: "oooooooooooooooooooooo",
        toggle: false
      }]
    };
  }

  toggleCop(postID) {
    const newCopost = this.state.copPosts.map((post, index) => {
      if (post.id == postID) {
        post.toggle = !post.toggle
      }
      return post
    })
    const nextState = {
      copPosts: newCopost
    }
    console.log(nextState);
    this.updateState(nextState)
  }

  toggleSale(postID) {
    const newCopost = this.state.salePosts.map((post, index) => {
      if (post.id == postID) {
        post.toggle = !post.toggle
      }
      return post
    })
    const nextState = {
      salePosts: newCopost
    }
    this.updateState(nextState)
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
        <Header isMatching="true"/>
        <Navbar/>
        <div className="container">
          <div className="tabs is-boxed is-medium m-l-t">
            <ul>
              <li className={ this.state.choiceTab == 1 ? 'is-active' : '' } >
                <a onClick={(e) => this.onChangeTab(1)} >
                  <span>Saleหางาน </span>
                </a>
              </li>
              <li className={ this.state.choiceTab == 2 ? 'is-active' : '' }>
                <a onClick={(e) => this.onChangeTab(2)}>
                  <span>บริษัทหาคน </span>
                </a>
              </li>
            </ul>
          </div>
          { this.state.choiceTab == 1 &&
            this.state.copPosts.map((post, index) => (
              <div key={index}>
                <div className="media-box" onClick={ (e) => this.toggleCop(post.id)}>
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h4 className="sub-title">{post.title}<small>({post.hospital})</small></h4>
                      </div>
                    </div>
                  </article>
                </div>
                <Collapse isOpen={post.toggle}>
                  <Card>
                    <CardBlock>
                      <table className="table">
                        <thead>
                          <tr>
                            <th>จ้าง</th>
                            <th>เงื่อนไข</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>xxxxxxxxxxxxxxxxxxxxx</th>
                            <td>xxxxxxxxxxxxxxxxxxxxx</td>
                           </tr>
                          <tr>
                            <th>xxxxxxxxxxxxxxxxxxxxx</th>
                            <td>xxxxxxxxxxxxxxxxxxxxx</td>
                            </tr>
                          <tr>
                            <th>xxxxxxxxxxxxxxxxxxxxx</th>
                            <td>xxxxxxxxxxxxxxxxxxxxx</td>
                            </tr>
                        </tbody>
                      </table>
                    </CardBlock>
                  </Card>
                </Collapse>
              </div>
            ))
          }
          { this.state.choiceTab == 2 &&
            this.state.salePosts.map((post, index) => (
              <div key={index}>
                <div className="media-box" onClick={ (e) => this.toggleSale(post.id)}>
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <h4 className="sub-title">SalePage</h4>
                      </div>
                    </div>
                  </article>
                </div>
                <Collapse isOpen={post.toggle}>
                  <Card>
                    <CardBlock>
                    Anim pariatur cliche reprehenderit,
                     enim eiusmod high life accusamus terry richardson ad squid. Nihil
                     anim keffiyeh helvetica, craft beer labore wes anderson cred
                     nesciunt sapiente ea proident.
                    </CardBlock>
                  </Card>
                </Collapse>
              </div>
            ))
          }
        </div>
      <style jsx>{`
        .m-l-t {
          margin-top: 18px;
        }
        .media-box {
          background-color: #f5f5f5;
          border: 1px solid rgba(0,0,0,.125);
          box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
          padding: 20px;
          margin-top: 36px;
          cursor: pointer;
        }
        .sub-title {
          margin: 0px;
        }
      `}
      </style>
    </div>
    )
  }
}

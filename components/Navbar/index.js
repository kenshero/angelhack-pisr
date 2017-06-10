import Link from 'next/link'
import Headroom from 'react-headroom'

const Navbar = () => (
  <div>
    <Headroom>
      <nav className="nav has-shadow kanit-font">
        <div className="container">
          <div className="nav-left">
          <Link href="/">
            <a className="nav-item">
                PISR
            </a>
          </Link>
          <Link href="/match">
            <a className="nav-item is-tab is-hidden-mobile">รวมประกาศ</a>
          </Link>
          </div>
          <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
          </span>
          <div className="nav-right nav-menu">
          <Link href="/newpost">
            <a className="nav-item is-tab"> <i className="fa fa-plus" aria-hidden="true"></i> &nbsp; ลงประกาศ</a>
          </Link>
          </div>
        </div>
      </nav>
    </Headroom>
  </div>
)

export default Navbar
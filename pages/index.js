import Header from '../components/Header'
import Link from 'next/link'

import Navbar from '../components/Navbar'
import Footer from '../components/Contact'

const IndexPage = () => (
  <div>
    <Header/>
    <Navbar/>
      <section className="hero is-fullheight hero-cover kanit-font">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title title-cover">
              บริการจัดหาพนักงานขาย Sale พันธุ์ใหม่
            </h1>
            <h2 className="subtitle">
              <Link href="/match">
                <a className="button is-success btn-prakard">รวมประกาศ</a>
              </Link>
            </h2>
          </div>
        </div>
      </section>
      <div className="why-wrapper kanit-font">
        <div className="row">
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title"> Why </h2>
            </div>
          </div>
        </div>
        <div className="row m-l-t">
          <div className="columns">
            <div className="column has-text-centered ">
              <h1 className="subtitle">จ่ายตามผลงานจริง</h1>
            </div>
            <div className="column has-text-centered">
              <h1 className="subtitle">กำหนดจำนวณวันจ้างได้</h1>
            </div>
            <div className="column has-text-centered">
              <h1 className="subtitle">It is a long established fact that a reader will be distracted by the readable content.</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="service-wrapper kanit-font">
        <div className="row m-l-t">
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title"> Services </h2>
            </div>
          </div>
        </div>
        <div className="row m-l-t">
          <div className="columns">
            <div className="column has-text-centered">
              <figure className="image is-128x128 fix-center">
                <img src="http://bulma.io/images/placeholders/256x256.png" className="img-circle" />
              </figure>
              <h1 className="subtitle m-l-t">
                บริการจับคู่ตามคุณสมบัติ
              </h1>
            </div>
            <div className="column has-text-centered">
              <figure className="image is-128x128 fix-center">
                <img src="http://bulma.io/images/placeholders/256x256.png" className="img-circle" />
              </figure>
              <h1 className="subtitle m-l-t">
                It is a long established fact that a reader will be distracted by the readable content.
              </h1>
            </div>
            <div className="column has-text-centered">
              <figure className="image is-128x128 fix-center">
                <img src="http://bulma.io/images/placeholders/256x256.png" className="img-circle" />
              </figure>
              <h1 className="subtitle m-l-t">
                It is a long established fact that a reader will be distracted by the readable content.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-wrapper kanit-font">
        <div className="row m-l-t">
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title"> How to </h2>
            </div>
          </div>
        </div>
        <div className="row m-l-t">
          <div className="columns">
            <div className="column has-text-centered">
              <i className="fa fa-files-o fa-6 fa-5x" aria-hidden="true"></i>
              <h1 className="subtitle m-l-t">
                พนักงานหรือบริษัทลงทะเบียนกรอกคุณสมบัติ
              </h1>
            </div>
            <div className="column has-text-centered">
              <i className="fa fa-floppy-o fa-5x" aria-hidden="true"></i>
              <h1 className="subtitle m-l-t">
                ระบบืำการบันทึกคุณสมบัติเพื่อนำไปประมวลผล
              </h1>
            </div>
            <div className="column has-text-centered">
              <i className="fa fa-phone-square  fa-5x" aria-hidden="true"></i>
              <h1 className="subtitle m-l-t">
                รอการติดต่อกลับ โดยระบบทำการจับคู่จากคุณสมบัติ
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .hero-cover {
          background: url(/static/images/medical-rep.jpg) no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          opacity: 0.8;
        }
        .m-l-t {
          margin-top: 18px;
        }
        .img-circle {
          border-radius: 50%;
        }
        .fix-center {
          margin: 0 auto;
        }
        .why-wrapper {
          background-color: #f5f5f5;
          padding: 36px 0px 36px 0px;
        }
        .service-wrapper {
          padding: 36px 0px 36px 0px;
        }
        .how-to-wrapper {
          background-color: #90ff75;
          padding: 36px 0px 36px 0px;
        }
        .title-cover {
          color: #fff;
          font-size: 36px;
          font-weight: bold;
        }
        .btn-prakard {
          width: 16rem;
          height: 3rem;
          font-size: 24px;
          font-weight: bold;
          margin-top: 32px;
          padding: 28px;
        }
      `}
      </style>
  </div>
)

IndexPage.getInitialProps = async function() {
  return {
  }
}

export default IndexPage

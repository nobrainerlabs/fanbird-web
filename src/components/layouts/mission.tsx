import Link from 'next/link';

const Layout = ({ children }) => (
  <>
    <div className="body h-screen">
      <div className="main-div pt-24 flex justify-center items-center flex-col">
        <div className="logo text-center mb-4">
          <Link href="/brand">
            <a>
              <img
                className="logo-image rounded-full w-full h-full"
                src="../images/logo.png"
              />
            </a>
          </Link>
        </div>

        <div className="header-and-content text-center mb-4">
          <h3 className="text-3xl font-semibold">Coolhaus</h3>
          <p className="text-base">Awesome Ice Cream</p>
        </div>
      </div>

      <div>{children}</div>
    </div>

    <style jsx global>{`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Exo';
      }

      .body {
        background-color: #ffe6f9;
      }

      .main-div {
        margin: 0 auto;
      }

      .purple-div {
        background-color: #990077;
        height: 86px;
        color: white;
        width: 450px;
      }

      .instagram-div {
        background-color: #ffffff;
        height: 86px;
        width: 450px;
      }

      .logo {
        height: 140px;
        width: 140px;
      }

      .instagram-div-content {
        width: 80%;
      }

      .instagram-main-inner-content {
        height: 86px;
      }

      .instagram-inner-left-content {
        height: 70px;
        width: 70px;
        margin-right: 18px;
      }

      .instagram-inner-right-p {
        font-size: 17px;
        line-height: 1.59;
      }

      .mission-header {
        color: rgba(0, 0, 0, 0.87);
      }

      .instagram-div,
      .purple-div,
      .step-one-div,
      .step-two-div,
      .step-three-div {
        border-radius: 14px;
        width: 450px;
      }

      .step-three-btn {
        background-color: #c9c9c9;
      }
    `}</style>
  </>
);

export default Layout;

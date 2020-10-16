import Link from  "next/link";

const Layout = ({ children }) => (
  <>
      <div className="body h-screen">
            <div className="main-div pt-24 flex justify-center items-center flex-col">
                <div className="logo text-center mb-4">
                  <Link href="/brand">
                    <a><img className="logo-image rounded-full w-full h-full" src="../images/logo.png" /></a>
                  </Link>
                </div>

                <div className="header-and-content text-center mb-4">
                    <h3 className="text-3xl font-semibold">Coolhaus</h3>
                    <p className="text-base">Awesome Ice Cream</p>
                </div>
            </div>

            <div>
              {children}
            </div>

      </div>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}</style>
  </>
);

export default Layout;
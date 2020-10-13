import Layout from '../components/layouts/blank';

const Page = () => (
<Layout>
    <div className="body h-screen">           
            
            <div className="main-div pt-24 flex justify-center items-center flex-col">
                <div className="logo text-center mb-4">
                    <img className="logo-image rounded-full w-full h-full" src="../images/logo.png" />
                </div>

                <div className="header-and-content text-center  mb-4">
                    <h3 className="text-3xl font-semibold">Coolhaus</h3>
                    <p className="text-base">Awesome Ice Cream</p>     
                </div>

                <div className="purple-div flex justify-center items-center rounded-xl w-1/4 tracking-wide m-6 font-semibold">
                    <a href="#">
                        <p className="text-base">You Have 500 pts</p>
                        <p className="text-sm">Click here to redeem</p>
                    </a>
                </div>

                <div className="instagram-div rounded-xl w-1/4 tracking-wide block">
                    <a href="#">
                        <div className="instagram-main-inner-content flex p-7 flex-row items-center justify-start tracking-wide">
                            <div className="instagram-inner-left-content flex items-center flex-row justify-start text-sm rounded p-5 overflow-hidden leading-normal font-black">
                            500 pts
                            </div>

                            <div className="instagram-inner-right-content h-full flex flex-col  pl-4 justify-center">
                                <p className="instagram-inner-right-p font-semibold m-0">Upload a photo to Instagram and tag us @coolhaus and hashtag #icecreamrules</p>
                            </div>  
                        </div>
                    </a>
                </div>

            </div>
        </div>
</Layout>
);

export default Page;

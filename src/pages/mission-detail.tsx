import Layout from '../components/layouts/blank';

const Page = () => (
<Layout>
    <div className="body">           
            
            <div className="main-div pt-24 flex justify-center items-center flex-col">
                <div className="logo text-center mb-4">
                    <img className="logo-image rounded-full w-full h-full" src="../images/logo.png" />
                </div>

                <div className="header-and-content text-center  mb-4">
                    <h3 className="text-3xl font-semibold">Coolhaus</h3>
                    <p className="text-base">Awesome Ice Cream</p>     
                </div>
        

                <h4 className="mission-header text-center pt-12 pb-4 font-black">Your mission</h4>
                <div className="instagram-div rounded-xl w-1/4 tracking-wide block">
                    <a href="#">
                        <div className="instagram-main-inner-content flex p-7 flex-row items-center justify-start tracking-wide">
                            <div className="instagram-inner-left-content flex items-center flex-row justify-start text-sm rounded p-5 overflow-hidden leading-normal font-black">
                            500 pts
                            </div>

                            <div className="instagram-inner-right-content h-full flex flex-col pl-4 justify-center">
                                <p className="instagram-inner-right-p font-semibold m-0">Upload a photo to Instagram and tag us @coolhaus and hashtag #icecreamrules</p>
                            </div>  
                        </div>
                    </a>
                </div>
                
                <h4 className="text-center pt-24 font-black mb-4">Follow the steps</h4>
                <div className="step-one-div rounded-xl block bg-white h-64 w-1/4 rounded-xl flex justify-center items-center text-center">
                    
                    <div className="step-one-inner-content">
                        <h3 className="font-semibold text-xl pb-8 pt-6">Step 1</h3>
                        <p className="text-xl">Connect your instagram</p>
                        <a href="#">
                            <img src="../images/instagram-brand.jpg" className="mb-8" />
                        </a>
                    </div>
                </div>

                <div className="step-two-div text-center text-xl h-48 bg-white rounded-xl mt-8 w-1/4">
                    <h3 className="font-semibold text-xl pb-6 mt-4">Step 2</h3>
                    <p>Post on Instagram</p>
                    <p>Open up your Instagram app and upload a</p>
                    <p>post with a hashtag #coolhaus</p>
                </div>

                <div className="step-three-div text-center text-xl h-40 bg-white rounded-xl mt-8 w-1/4 mb-24">
                    <h3 className="font-semibold text-xl pb-6 mt-4">Step 3</h3>
                    <p>Confirm upload</p>
                    <button className="step-three-btn tracking-wide border px-2 border-solid">Confirm Submission</button>
                </div>


            </div>
        </div>
</Layout>
);

export default Page;

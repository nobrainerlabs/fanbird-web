import Layout from '../components/layouts/mission';
import Link from 'next/link';

const Page = () => (
<Layout>
<div className="main-div pt-10 flex justify-center items-center flex-col">
    <div className="purple-div flex justify-center items-center rounded-xl tracking-wide m-6 font-semibold">
        <a href="#">
            <p className="text-base">You Have 500 pts</p>
            <p className="text-sm">Click here to redeem</p>
        </a>
    </div>

    <div className="instagram-div rounded-xl tracking-wide block">
        <Link href="/mission">
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
        </Link>
    </div>
</div>
</Layout>
);

export default Page;

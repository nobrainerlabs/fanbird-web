import Layout from '../components/layouts/mission';
import InstagramLogin from 'react-instagram-login';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
const responseInstagram = (response) => {
  console.log('get response', response);
};
const Page = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState('');
  const { code } = router.query;

  useEffect(() => { 
    console.log('code', code);
    if (code) {
      console.log('code2', code);




      fetch('http://localhost:3100/auth/instagram/exchange-code', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((res) => res.json())
        .then((res) => console.log('res', res));
    }
  }, [code]);

  return (
    <Layout>
      <div className="body">
        <div className="main-div pt-2 flex justify-center items-center flex-col">
          <h4 className="mission-header text-center pt-12 pb-4 font-black">
            Your mission
          </h4>
          <div className="instagram-div rounded-xl w-1/4 tracking-wide block">
            <a href="#">
              <div className="instagram-main-inner-content flex p-7 flex-row items-center justify-start tracking-wide">
                <div className="instagram-inner-left-content flex items-center flex-row justify-start text-sm rounded p-5 overflow-hidden leading-normal font-black">
                  500 pts
                </div>

                <div className="instagram-inner-right-content h-full flex flex-col pl-4 justify-center">
                  <p className="instagram-inner-right-p font-semibold m-0">
                    Upload a photo to Instagram and tag us @coolhaus and hashtag
                    #icecreamrules
                  </p>
                </div>
              </div>
            </a>
          </div>

          <h4 className="text-center pt-24 font-black mb-4">
            Follow the steps
          </h4>
          <div className="step-one-div rounded-xl block bg-white h-64 rounded-xl flex justify-center items-center text-center">
            <div className="step-one-inner-content">
              <h3 className="font-semibold text-xl pb-8 pt-6">Step 1</h3>
              <p className="text-xl">Connect your instagram</p>

              <Link href="https://www.instagram.com/oauth/authorize/?app_id=257000432316111&redirect_uri=https://ba0fe6473e0a.ngrok.io/mission&scope=user_profile,user_media&response_type=code">
                Instagram Login
              </Link>
            </div>
          </div>

          <div className="step-two-div text-center text-xl h-48 bg-white rounded-xl mt-8">
            <a href="#">
              <h3 className="font-semibold text-xl pb-6 mt-4">Step 2</h3>
              <p>Post on Instagram</p>
              <p>Open up your Instagram app and upload a</p>
              <p>post with a hashtag #coolhaus</p>
            </a>
          </div>

          <div className="step-three-div text-center text-xl h-40 bg-white rounded-xl mt-8 mb-24">
            <a href="#">
              <h3 className="font-semibold text-xl pb-6 mt-4">Step 3</h3>
              <p>Confirm upload</p>
              <button className="step-three-btn tracking-wide border px-2 border-solid">
                Confirm Submission
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

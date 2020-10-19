import Router, { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {  faInstagram, faInstagramSquare , } from '@fortawesome/free-brands-svg-icons';

const Component = ({}) => {
  const { push } = useRouter()

  const ssoTo = (provider) => {
    const url = `${process.env.NEXT_PUBLIC_API_PROXY_URL}/auth/${provider}`;
    push(url);
  };

  return (
    <>
      <div className="mt-1 grid grid-cols-3 gap-3">
        <div>
          <span className="w-full inline-flex rounded-md shadow-sm">
            <button
              onClick={() => ssoTo('instagram')}
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
              aria-label="Sign in with Facebook"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </span>
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
};

export default Component;

import Layout from '../components/layouts/blank';


const Page = () => (
<Layout>
    <div className="soon-body text-center">
        <header className="soon-header flex justify-center items-center mt-10 mb-16">
                <img src="../images/fanbird-logo.png" className="h-13 w-12" />
                <span className="font-bold text-3xl font-inter">FAN</span><span className="text-3xl font-light font-inter">BIRD</span>
        </header>


        <main className="soon-main flex flex-col justify-center items-center font-raleway mt-28">
            <span className="text-2xl tracking-wide font-raleway text-gray-700">- Launching early 2021 -</span>
            <div className="">
            <h3 className="soon-h1 font-extrabold font-inter tracking-wider leading-none">Make customers</h3>
            <h3 className="soon-h1 font-extrabold font-inter tracking-wider leading-none mb-8"> be your greatest fans</h3>
            </div>
            
            <span className="font-raleway text-2xl text-gray-700">Your people out there. Make campaigns, let your people spread your</span>
            <span className="font-raleway text-2xl text-gray-700">brand, and find new fans. Give them points by posting instagram, taking</span>
            <span className="font-raleway text-2xl text-gray-700">surveys, and writing reviews.</span>
        </main>



        <div className="soon-input-area mt-16">
            <h3 className="font-black text-2xl font-raleway">We are currently invite only.</h3>
            <h3 className="font-black text-2xl font-raleway mb-4">Become a beta tester</h3>
            <form>        
                <input className="soon-input border-2 px-2 py-4 border-black w-1/4" type="email" placeholder="Your email address"></input>
                <input className="soon-submit border-2 px-2 py-4 border-black bg-black text-white font-inter text-base font-bold tracking-wider" type="submit" value="Get started"></input>
            </form>
        </div>
    </div>
</Layout>
);

export default Page;

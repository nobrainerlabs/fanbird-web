const Component = ({headerPage = 'Pricing', headerTitle = 'Take control of my team', headerDescription = 'Start building for free, then add a site plan to go live. Higher plans unlock additional features.'}) => (
  <>
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-base leading-6 font-semibold text-indigo-600 tracking-wide uppercase">
            {headerPage}
          </h1>
          <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            {headerTitle}
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-500">
            {headerDescription}
          </p>
        </div>
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

export default Component;

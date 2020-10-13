const Component = ({}) => (
  <>
    <div>
      <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-8 lg:mt-10">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Data to enrich your
            <br />
            <span className="text-indigo-600">online business</span>
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>
      <div className="relative mt-16">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1" />
          <div className="flex-1 w-full bg-gray-800" />
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <img
            className="relative rounded-lg shadow-lg"
            src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.png"
            alt="App screenshot"
          />
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

const Component = ({}) => (
  <>
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
        {/* xs to lg */}
        <div className="max-w-2xl mx-auto lg:hidden">
          <div className="px-4">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Basic
            </h2>
            <p className="mt-4">
              <span className="text-4xl leading-10 font-extrabold text-gray-900">
                $9
              </span>
              <span className="text-base leading-6 font-medium text-gray-500">
                /mo
              </span>
            </p>
            <p className="mt-4 text-sm leading-5 text-gray-500">
              Quis suspendisse ut fermentum neque vivamus non tellus.
            </p>
            <button
              type="button"
              className="mt-6 border border-gray-800 rounded-md bg-gray-800 w-full py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
            >
              Buy Basic
            </button>
          </div>
          <table className="mt-8 w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left">
              Features
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">
                  Feature
                </th>
                <th className="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Molestie lobortis massa.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Urna purus felis.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tellus pulvinar sit dictum.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Convallis.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left">
              Reporting
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">
                  Feature
                </th>
                <th className="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Adipiscing.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Eget risus integer.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Gravida leo urna velit.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Elementum ut dapibus mi feugiat cras nisl.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left">
              Support
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">
                  Feature
                </th>
                <th className="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Sit dignissim.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Congue at nibh et.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Volutpat feugiat mattis.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tristique pellentesque ornare diam sapien.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border-t border-gray-200 px-4 pt-5">
            <button
              type="button"
              className="w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
            >
              Buy Basic
            </button>
          </div>
          <div className="px-4 mt-16">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Essential
            </h2>
            <p className="mt-4">
              <span className="text-4xl leading-10 font-extrabold text-gray-900">
                $29
              </span>
              <span className="text-base leading-6 font-medium text-gray-500">
                /mo
              </span>
            </p>
            <p className="mt-4 text-sm leading-5 text-gray-500">
              Quis eleifend a tincidunt pellentesque. A tempor in sed.
            </p>
            <button
              type="button"
              className="mt-6 border border-gray-800 rounded-md bg-gray-800 w-full py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
            >
              Buy Essential
            </button>
          </div>
          <table className="mt-8 w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left">
              Features
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">
                  Feature
                </th>
                <th className="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Molestie lobortis massa.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Urna purus felis.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tellus pulvinar sit dictum.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Convallis.
                </th>
                <td className="py-5 pr-4">
                  <span className="block text-sm leading-5 text-gray-700 text-right">
                    Up to 20 users
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left">
              Reporting
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">
                  Feature
                </th>
                <th className="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Adipiscing.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Eget risus integer.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Gravida leo urna velit.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Elementum ut dapibus mi feugiat cras nisl.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left">
              Support
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">
                  Feature
                </th>
                <th className="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Sit dignissim.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Congue at nibh et.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Volutpat feugiat mattis.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tristique pellentesque ornare diam sapien.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: minus */}
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border-t border-gray-200 px-4 pt-5">
            <button
              type="button"
              className="w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
            >
              Buy Essential
            </button>
          </div>
          <div className="px-4 mt-16">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Premium
            </h2>
            <p className="mt-4">
              <span className="text-4xl leading-10 font-extrabold text-gray-900">
                $59
              </span>
              <span className="text-base leading-6 font-medium text-gray-500">
                /mo
              </span>
            </p>
            <p className="mt-4 text-sm leading-5 text-gray-500">
              Orci volutpat ut sed sed neque, dui eget. Quis tristique non.
            </p>
            <button
              type="button"
              className="mt-6 border border-gray-800 rounded-md bg-gray-800 w-full py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
            >
              Buy Premium
            </button>
          </div>
          <table className="mt-8 w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left">
              Features
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">
                  Feature
                </th>
                <th className="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Molestie lobortis massa.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Urna purus felis.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tellus pulvinar sit dictum.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Convallis.
                </th>
                <td className="py-5 pr-4">
                  <span className="block text-sm leading-5 text-gray-700 text-right">
                    Up to 50 users
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left">
              Reporting
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">
                  Feature
                </th>
                <th className="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Adipiscing.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Eget risus integer.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Gravida leo urna velit.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Elementum ut dapibus mi feugiat cras nisl.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left">
              Support
            </caption>
            <thead>
              <tr>
                <th className="sr-only" scope="col">
                  Feature
                </th>
                <th className="sr-only" scope="col">
                  Included
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Sit dignissim.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Congue at nibh et.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Volutpat feugiat mattis.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <th
                  className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tristique pellentesque ornare diam sapien.
                </th>
                <td className="py-5 pr-4">
                  {/* Heroicon name: check */}
                  <svg
                    className="ml-auto h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border-t border-gray-200 px-4 pt-5">
            <button
              type="button"
              className="w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
            >
              Buy Premium
            </button>
          </div>
        </div>
        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className="pb-4 px-6 text-sm leading-5 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                <th
                  className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Basic
                </th>
                <th
                  className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Essential
                </th>
                <th
                  className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                  scope="col"
                >
                  Premium
                </th>
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th
                  className="py-8 px-6 text-sm leading-5 font-medium text-gray-900 text-left align-top"
                  scope="row"
                >
                  Pricing
                </th>
                <td className="h-full py-8 px-6 align-top">
                  <div className="relative h-full table">
                    <p>
                      <span className="text-4xl leading-10 font-extrabold text-gray-900">
                        $9
                      </span>
                      <span className="text-base leading-6 font-medium text-gray-500">
                        /mo
                      </span>
                    </p>
                    <p className="mt-4 mb-16 text-sm leading-5 text-gray-500">
                      Quis suspendisse ut fermentum neque vivamus non tellus.
                    </p>
                    <button
                      type="button"
                      className="absolute bottom-0 flex-grow w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
                    >
                      Buy Basic
                    </button>
                  </div>
                </td>
                <td className="h-full py-8 px-6 align-top">
                  <div className="relative h-full table">
                    <p>
                      <span className="text-4xl leading-10 font-extrabold text-gray-900">
                        $29
                      </span>
                      <span className="text-base leading-6 font-medium text-gray-500">
                        /mo
                      </span>
                    </p>
                    <p className="mt-4 mb-16 text-sm leading-5 text-gray-500">
                      Quis eleifend a tincidunt pellentesque. A tempor in sed.
                    </p>
                    <button
                      type="button"
                      className="absolute bottom-0 flex-grow w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
                    >
                      Buy Essential
                    </button>
                  </div>
                </td>
                <td className="h-full py-8 px-6 align-top">
                  <div className="relative h-full table">
                    <p>
                      <span className="text-4xl leading-10 font-extrabold text-gray-900">
                        $59
                      </span>
                      <span className="text-base leading-6 font-medium text-gray-500">
                        /mo
                      </span>
                    </p>
                    <p className="mt-4 mb-16 text-sm leading-5 text-gray-500">
                      Orci volutpat ut sed sed neque, dui eget. Quis tristique
                      non.
                    </p>
                    <button
                      type="button"
                      className="absolute bottom-0 flex-grow w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
                    >
                      Buy Premium
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  className="bg-gray-50 py-3 pl-6 text-sm leading-5 font-medium text-gray-900 text-left"
                  colSpan={4}
                  scope="colgroup"
                >
                  Features
                </th>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Molestie lobortis massa.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Urna purus felis.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tellus pulvinar sit dictum.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Convallis.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  <span className="block text-sm leading-5 text-gray-700">
                    Up to 20 users
                  </span>
                </td>
                <td className="py-5 px-6">
                  <span className="block text-sm leading-5 text-gray-700">
                    Up to 50 users
                  </span>
                </td>
              </tr>
              <tr>
                <th
                  className="bg-gray-50 py-3 pl-6 text-sm leading-5 font-medium text-gray-900 text-left"
                  colSpan={4}
                  scope="colgroup"
                >
                  Reporting
                </th>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Adipiscing.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Eget risus integer.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Gravida leo urna velit.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Elementum ut dapibus mi feugiat cras nisl.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  className="bg-gray-50 py-3 pl-6 text-sm leading-5 font-medium text-gray-900 text-left"
                  colSpan={4}
                  scope="colgroup"
                >
                  Support
                </th>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Sit dignissim.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Congue at nibh et.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Volutpat feugiat mattis.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
              <tr>
                <th
                  className="py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left"
                  scope="row"
                >
                  Tristique pellentesque ornare diam sapien.
                </th>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Basic</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: minus */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Not included in Essential</span>
                </td>
                <td className="py-5 px-6">
                  {/* Heroicon name: check */}
                  <svg
                    className="h-5 w-5 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Included in Premium</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                <td className="pt-5 px-6">
                  <button
                    type="button"
                    className="w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
                  >
                    Buy Basic
                  </button>
                </td>
                <td className="pt-5 px-6">
                  <button
                    type="button"
                    className="w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
                  >
                    Buy Essential
                  </button>
                </td>
                <td className="pt-5 px-6">
                  <button
                    type="button"
                    className="w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
                  >
                    Buy Premium
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
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

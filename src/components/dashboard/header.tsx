export const DashboardHeader = () => (
  <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white">
    <div className="flex items-center px-4">
      <button className="text-gray-500 focus:text-gray-700 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <input
        className="mx-4 w-full rounded-md border px-4 py-2"
        type="text"
        placeholder="Search"
      />
    </div>
    <div className="flex items-center pr-4"></div>
  </div>
);

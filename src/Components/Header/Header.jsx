import Logo from "../../assets/Images/Logo.svg";

function Header() {
  return (
    <div className="flex items-center h-28   w-full">
      <img className="w-32 h-12 mx-4" src={Logo} alt="" />
      <div className="relative w-3/4 ">
        <input
          className=" w-full h-8 rounded-md px-10 text-sm"
          type="text"
          placeholder="Search or type a command"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="gray"
          className="size-4 absolute top-2 mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

      </div>
    </div>
  );
}

export default Header;

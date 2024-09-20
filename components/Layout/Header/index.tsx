import Link from 'next/link';

function Header() {
  return (
    <div
      className={`px-4 fixed top-0 w-full z-30 drop-shadow-md min-h-20 md:min-h-[90px] flex bg-white`}
    >
      <div className={`container mx-auto flex items-center justify-center`}>
        <Link
          className={`text-slate-600  'bg-gray-200 font-semibold' : 'bg-[#F5F7FA]'} hover:brightness-125 leading-6 p-6 md:p-0 border-b-2 md:border-b-0 w-full md:w-auto text-center md:text-start md:bg-transparent transition duration-150 ease-in-out`}
          href="/"
        >
          <span>Main</span>
          <div
            className={`md:bg-slate-600 md:mt-2 md:p-[2px] w-full rounded-full`}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;

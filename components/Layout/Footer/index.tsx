import Image from 'next/image';

function Footer() {
  return (
    <footer className="absolute bottom-0 px-4 w-full md:min-h-[209px] flex flex-col justify-center items-center bg-white py-6 border-[1px] border-t-gray-300 ">
      <div className="container mx-auto flex justify-center">
        <Image
          className="flex"
          src="/next.png"
          alt="image"
          width={100}
          height={50}
          loading="eager"
        />
      </div>
    </footer>
  );
}
export default Footer;

 // @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <p className="text-sm">
            © Developer Portfolio by{""}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/saurabh-kasaudhan-338944276"
              className="text-[#16f2b3]"
            >
              Saurabh Kasaudhan
            </Link>
          </p>
          <p className="text-xs text-gray-400">
            Made with ❤️ using <span className="text-pink-400">Next.js</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

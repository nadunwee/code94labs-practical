import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center content-center">
      <h2 className="mb-2 text-[50px] font-bold leading-none text-black sm:text-[80px] md:text-[100px]">
        404
      </h2>
      <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black">
        Oops! That page can't be found
      </h4>

      <Link href="/">
        <button
          type="button"
          className="inline-block rounded-lg border border-black px-8 py-3 text-center text-base font-semibold text-black transition hover:bg-black hover:text-white"
        >
          Go To Home
        </button>
      </Link>
    </div>
  );
};

export default Error;

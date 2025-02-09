import { Link } from 'react-router-dom';

const First = () => {
  return (
    <div className="flex flex-col justify-center align-middle text-center h-full">
      <div className="flex flex-col justify-center gap-5 align-middle text-center">
        <div className="border-b">
          <div className="mt-4">
            <div className="flex flex-row gap-2 py-3">
              <div className="ring-1 ring-gray-200 rounded-lg p-4 w-full">
                <div className="font-extrabold text-xl" style={{ float: 'left', marginLeft: '10%', marginTop:'3px' }}>2023.11.07</div>
                <div className="font-extrabold text-3xl" style={{ float: 'right', marginRight: '5%', marginBottom:'5px' }}>
                <Link
                to="/Write"
                className="mx-auto w-140 sm:w-96 rounded bg-gray-500 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                >
                수면일기 작성하기
                </Link>
                </div>
              <div style={{ clear: 'both' }}></div>
            </div>
          </div>
        </div>
        </div>
        <img
          src="/images/main.jpg"
          className="mx-auto w-52 sm:w-96 rounded-full"
          alt="main"
        />
        <div className="w-full justify-center flex flex-col gap-2">
          <Link
            to="/login"
            className="mx-auto w-52 sm:w-96 rounded bg-gray-500 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="mx-auto w-52 sm:w-96 rounded bg-gray-500 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;

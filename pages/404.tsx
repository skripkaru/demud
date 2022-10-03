import Button from "../components/UI/Button";
import {useRouter} from "next/router";

const Error = () => {
  const router = useRouter()

  return (
    <div className='h-screen max-h-[1080px]'>
      <div className="h-full container px-4 md:px-8 mx-auto flex flex-col justify-center items-center">
        <p className="text-teal-500 text-6xl font-semibold text-center  uppercase mb-4">404</p>
        <h1 className="text-gray-800 text-2xl font-semibold text-center mb-8">Page not found</h1>
        <Button variant='secondary' onClick={() => router.push('/')}>Go Home</Button>
      </div>
    </div>
  );
};

export default Error;

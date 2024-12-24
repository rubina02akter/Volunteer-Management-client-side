import { Link } from 'react-router-dom';
import errorLogo from '../../src/assets/icons/undraw_page-not-found_6wni.svg';

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-24'>
      <img src={errorLogo} alt="" className='w-96'/>
      <Link to='/' className='btn btn-success text-cyan-50'>Click Here To Go-Back</Link>
    </div>
  );
};

export default Error;
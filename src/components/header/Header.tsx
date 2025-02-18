import { ICurrentHeader } from 'src/api/queries/current/currentTypes';
import { SubmitHandler, useForm} from 'react-hook-form';

type Input = {
  location: string
}

const Header: React.FC<ICurrentHeader> = ({state}) => {
  const {register, handleSubmit, reset} = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => {
    state(data.location);
    reset();
  }
  
  return (
    <header className="fixed items-center flex justify-center w-full top-0 left-0 border-b-[2px] border-b-gray-600 p-3">
      {/* <div className='w-[45%] flex flex-start'> */}
        {/* <img src={logo} className='w-[35px] h-[35px]' alt="Logo" /> */}
      {/* </div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('location')} type="text" className='border-[2px] border-blue-500 rounded-[5px] h-[5svh] w-[40svh] p-2' placeholder='Search location...'/>
      </form>
    </header>
  )
}

export default Header

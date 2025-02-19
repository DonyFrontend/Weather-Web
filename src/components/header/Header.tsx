import { ICurrentHeader } from 'src/api/queries/current/currentTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import logo from 'src/assets/icons/logo.svg';
import { getWeather } from 'src/api/queries/current/current';

type Input = {
  location: string
}

const Header: React.FC<ICurrentHeader> = ({ state }) => {
  const { register, handleSubmit, reset } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    getWeather(data.location)
      .then(data => state(data.data))
      .catch(err => console.log(err));
    reset();
  }

  return (
    <header className="fixed items-center flex justify-start w-full top-0 left-0 border-b-[2px] border-b-gray-600 p-3">
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex justify-center">
        <input {...register('location')} type="text" className='border-[2px] border-blue-500 rounded-[5px] h-[5svh] w-[40svh] p-2' placeholder='Search location...' />
      </form>

      <div className="w-10"></div>
    </header>
  )
}

export default Header

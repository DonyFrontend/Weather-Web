import { ICurrentHeader } from 'src/api/queries/current/currentTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import logo from 'src/assets/icons/logo.svg';
import { getWeather } from 'src/api/queries/current/current';
import { setHistoryItem } from 'src/shared/const/History';

type Input = {
  location: string
}

const Header: React.FC<ICurrentHeader> = ({ state, loading }) => {
  const { register, handleSubmit, reset } = useForm<Input>();
  const time = `${String(new Date().getHours())}:${new Date().getMinutes()}`

  const onSubmit: SubmitHandler<Input> = (data) => {
    loading(true);
    getWeather(data.location)
      .then(res => {
        state(res.data);
        setHistoryItem({
          location: res.data.location.name,
          temperature: res.data.current.temp_c,
          time,
        })
      })
      .catch(err => console.log(err))
      .finally(() => loading(false));
    reset();
  }

  return (
    <header className="fixed items-center backdrop-blur-lg flex justify-start w-full top-0 left-0 border-b-[2px] border-b-gray-600 p-3">
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex justify-center">
        <input {...register('location')} type="text" className='border-[2px] border-blue-500 rounded-[5px] h-[5svh] w-[40svh] p-2' placeholder='Search...' />
      </form>

      <div className="w-10"></div>
    </header>
  )
}

export default Header

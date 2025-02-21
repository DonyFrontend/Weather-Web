import { Spin } from "antd"

const Loading = () => {
  return (
    <div className="w-full h-[100svh] bg-transparent flex justify-center items-center flex-shrink-0">
        <Spin size="large"/>
    </div>
  )
}

export default Loading;
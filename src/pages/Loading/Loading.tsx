import { Spin } from "antd"

const Loading = () => {
  return (
    <div className="w-full h-[100svh] flex justify-center items-center flex-shrink-0">
        <Spin size="large"/>
    </div>
  )
}

export default Loading;
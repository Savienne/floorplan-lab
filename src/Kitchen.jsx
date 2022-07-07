import Oven from "./Oven"
import Sink from "./Sink"


const Kitchen = (props) => {
  return (
    <>
      <div id="kitchen">
        <h3>Kitchen</h3>
        <Oven />
        <Sink />
      </div>
    </>
  )
}

export default Kitchen
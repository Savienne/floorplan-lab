const Bedroom = (props) => {
    return (
      <>
        <div id={`bed-${props.bedNum}`}>
          <h3>Bedroom {props.bedNum}</h3>
        </div>
      </>
    )
  }
  
  export default Bedroom
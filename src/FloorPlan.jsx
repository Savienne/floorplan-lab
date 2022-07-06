function FloorPlan (props) {
    const rooms = ["Kitchen", "LivingRoom", "Bedroom", "Bath"]
    // const listOfRooms = rooms.map(room => <li>{room}</li>)
    return(
        <>
        <h1>Bedroom 1{props.room ? props.room :"room"}</h1>
        <h2> Kitchen </h2>
        <h2>Oven</h2>
        <h3>Sink</h3>
        <ul>{rooms.map(room => <li key={room}>{room}</li>)}</ul>
        </>
  )
}



export default FloorPlan
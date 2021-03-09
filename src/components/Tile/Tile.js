import '../../index.css'

const Tile = (props) => {
    if(props.number % 2 === 0)
        return <div className="black-tiles"></div>
    else
        return <div className="white-tiles"></div>
    
        
}
export default Tile
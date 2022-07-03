import Duration from "./Duration";

const Section = (props) => {
  return(
    <div className="section">
      <p> {props.section.time} </p>
      <img alt="pic" src={props.section.image}/>
      <div> 
        <h2>{props.section.title}</h2>
        <p>{props.section.type}</p>
        <Duration section={props.section}/>
      </div>
    </div>
  )
}

export default Section;
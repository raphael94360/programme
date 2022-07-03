const Duration = (props) => {
  return(
    <div className="duration">
      
      <p>{props.section.duration}</p>
      
      {props.section.isUnseen && (
      <ul>
        <li>Inedit</li>
      </ul>
      )}

      {props.section.direct && (
      <ul>
        <li>Direct</li>
      </ul>
      )}
      
    </div>
  )
}

export default Duration;
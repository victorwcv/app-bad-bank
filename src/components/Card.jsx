
function Card(props) {
  return (
    <div className="container card-styles" >
      <div className="card mb-3 shadow" style={{minWidth:'450px'}}>
        {props.src && (
          <img
            src={props.src}
            className="card-img-top"
            alt="banner"
            max-height="500px"
          />
        )}
        <div className="card-body">
          {props.title && <h5 className="card-title">{props.title}</h5>}
          {props.text && <p className="card-text">{props.text}</p>}
          {props.status && <p className="card-text bold">{props.status}</p>}
          {props.form && <>{props.form}</>}
        </div>
      </div>
    </div>
  );
}

export default Card;

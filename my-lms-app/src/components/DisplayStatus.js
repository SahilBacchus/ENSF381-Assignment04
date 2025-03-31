function DisplayStatus({type, msg}) {
    return (
        <div className="DisplayStatus">
            {type === 'success' ? <p style={{color:"green"}}>{msg}</p> : <p style={{color:"indianred"}}>{msg}</p>}
        </div>
    );
  }
  
  export default DisplayStatus;
function DisplayStatus({type, msg}) {
    return (
        <div className="DisplayStatus">
            {type === 'success' ? <p color='green'>{msg}</p> : <p color='indianred'>{msg}</p>}
        </div>
    );
  }
  
  export default DisplayStatus;
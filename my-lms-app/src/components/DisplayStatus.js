function DisplayStatus(props) {
    return (
        <div className="DisplayStatus">
            props.type ? <p>Login successful! Redirecting...</p> : <p>Invalid username or password!</p>
        </div>
    );
  }
  
  export default DisplayStatus;
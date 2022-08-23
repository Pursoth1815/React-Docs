const App  = () => {
    const name = 'Pursoth';
    const isNameShowing = true;
    return (
      <div className="App">
        <h1> Hey {isNameShowing ? name : 'Unknown'} What's up Buddy </h1>
      </div>
    );
  }
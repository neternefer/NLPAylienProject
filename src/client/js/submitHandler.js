const submitHandler = (e) => {
    e.preventDefault();
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;
    //Determine the type of input
    const dataObject = Client.checkUrl(userInput);
    //Obtain data
    fetch('http://localhost:7000/sentiment', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataObject)
    })
      .then(r => r.json())
      .then(data => {
        //Update UI
        document.getElementById('result').style.visibility = 'visible';
        document.getElementById('form').reset();
        const values = ['polarity', 'subjectivity', 'polarity_confidence', 'subjectivity_confidence'];
        values.forEach((value) => {
          document.getElementById(value).innerHTML = data[value];
        })
      });
  }


export {
  submitHandler
};
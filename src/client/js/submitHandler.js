const submitHandler = (e) => {
    e.preventDefault();
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;
    const dataObject = Client.checkUrl(userInput);
    console.log(dataObject)
    fetch('http://localhost:7000/sentiment', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataObject)
    })
      .then(r => r.text())
      .then((res) => {
        console.log(res)
        JSON.parse(res)
      })
      .then(data => {
        document.getElementById('result').style.visibility = 'visible';
        document.getElementById('form').reset();
        const values = ['polarity', 'subjectivity', 'polarity_confidence', 'subjectivity_confidence'];
        values.forEach((value) => {
          document.getElementById(value).innerHTML = data[value];
        })
      });
  }


      export { submitHandler };
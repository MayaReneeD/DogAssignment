function getDogImages(numInput) {
    if (numInput > 50 || numInput < 1) {
      alert('Please choose a number between 1 and 50');
    }
    else {
      fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
    }
  }
  
  function watchSubmitInput() {
    $('.js-dog-num-form').submit(event => {
      event.preventDefault();
      let userNumInput = $('.js-num-input').val();
    
      getDogImages(userNumInput);
    });
  }
  
  function runApp() {
    console.log("App loaded! Waiting for submit!");
    watchSubmitInput();
  }
  
  $(runApp);
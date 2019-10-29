(() => {
  // get animation DOM node
  const animationNode = document.querySelector('.animation');
  // define animation action
  const animate = e => {
    // get current input (login or password)
    const input = e.target;
    // for every odd character, form an 'o' mouth, otherwise show a smile mouth
    const lengthIsOdd = input.value.length % 2 === 1;
    animationNode.classList[lengthIsOdd ? 'add' : 'remove']('mouth-o');
  };
  // define animate-sunglasses action
  const handlePassword = e => {
    const isFocus = e.type === 'focus';
    animationNode.classList[isFocus ? 'add' : 'remove']('sunglasses');
  };
  // gather all login <input>s
  const allLoginInputs = Array.apply(null, document.querySelectorAll('#login input'));
  // listen to 'input' events
  allLoginInputs.forEach(input => input.addEventListener('input', animate, false));
  // for password field only:
  // listen to focus/blur and put on/remove sunglasses

  const passwordField = document.querySelector('#login input[type="password"]');
  passwordField.addEventListener('focus', handlePassword, false);
  passwordField.addEventListener('blur', handlePassword, false);
})();

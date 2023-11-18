function sendHug() {
    const hugDisplay = document.getElementById('hugDisplay');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    const messageText = document.createTextNode('This Hug is for a beautiful lady that deserve so much!');
    const gifImage = document.createElement('img');
    gifImage.src = '200w.gif';
    gifImage.alt = 'Hug GIF';
    gifImage.classList.add('hug-gif');
  
    messageDiv.appendChild(messageText);
    hugDisplay.innerHTML = '';
    hugDisplay.appendChild(gifImage);
    hugDisplay.appendChild(messageDiv);
  }
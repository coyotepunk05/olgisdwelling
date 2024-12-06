// Function to detect the browser and display a message
function checkBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();
  const browserMessageElement = document.getElementById('browser-message');
  
  if (userAgent.indexOf('firefox') > -1) {
    browserMessageElement.textContent = 'Thanks for using Firefox!';
  } else {
    browserMessageElement.textContent = 'Use Firefox!';
  }
}

// Function to detect the OS and display a message
function checkOS() {
  const platform = navigator.platform.toLowerCase();
  const osMessageElement = document.getElementById('os-message');

  if (platform.indexOf('linux') > -1) {
    osMessageElement.textContent = 'Thanks for using Linux!';
  } else {
    osMessageElement.textContent = 'Use Linux!';
  }
}

// Run the checkBrowser and checkOS functions when the page loads
window.onload = function() {
  checkBrowser();
  checkOS();
  
  document.getElementById('show-gif-button').addEventListener('click', function() {
    const gifImage = document.getElementById('gif-image');
    gifImage.style.display = 'block';
  });
};

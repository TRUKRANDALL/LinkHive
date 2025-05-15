document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('https://your-database-endpoint.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      alert('Thank you for signing up!');
      document.getElementById('signup-form').reset();
    } else {
      alert('There was an error. Please try again later.');
    }
  });

  function openFeedback() {
    document.getElementById('feedback-modal').style.display = 'block';
  }

  function closeFeedback() {
    document.getElementById('feedback-modal').style.display = 'none';
  }

  function showSignup() {
    document.getElementById('signup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  function closeSignup() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }

   let clickCount = 0;
  const logo = document.getElementById('logoImage');
  const originalSrc = 'Logo.png';
  const alternateSrc = 'LOGO.gif'; // this shows after 3 clicks

  logo.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 3) {
      logo.src = alternateSrc;

      setTimeout(() => {
        logo.src = originalSrc;
        clickCount = 0; // reset click count after 5 seconds
      }, 5000);
    }
  });
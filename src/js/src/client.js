export const getAllUsers = () => 
    fetch('/users');

export const getUserByEmail = (email) => 
  fetch(`/email?email=${email}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

    export const getInfo = () => 
    fetch('/info');
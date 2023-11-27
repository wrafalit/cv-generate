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

    export async function updateUserInfo(email, userInfo) {
      try {
        const response = await fetch(`/update/${email}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        });
    
        if (response.ok) {
          const data = await response.json();
          return data; // Opcjonalnie, możesz zwrócić odpowiedź z serwera
        } else {
          throw new Error('Failed to update user');
        }
      } catch (error) {
        throw new Error(`Error updating user: ${error.message}`);
      }
    }
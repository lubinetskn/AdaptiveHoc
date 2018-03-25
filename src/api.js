export function addBook(value) {
  fetch('http://localhost:5000/', {
    method: 'POST',
    body: JSON.stringify(value),
  });
}

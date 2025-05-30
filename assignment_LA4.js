/* Assignment 4 Specifications (in displaying use, console.log, prompt, and alert only):
Create a program simple Queueing System for Customer Service (servicing 5 customers, Elaine, Althea, Angelo, Lito, Engelbert) where:
A Customer can Enter his/her name (to be stored in the customer queue) and is given a corresponding number (index+1 in the queue)
After storing the customer's name, the program must now ask (customer service representative - role) for a Number to be serviced.
Entered number will reveal the name of the customer in queue, then afterwards, removes it in the queue.
For every call of number, the updated Queue must be displayed.
*/

// Initial customer queue
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to display the queue in the console
function displayQueue() {
  console.log("Current Queue:");
  customerQueue.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
  });
}

// Run the queueing system
function runQueueSystem() {
  alert("Welcome to the Customer Service Queue System.");
  displayQueue();

  // Step 1: A customer enters their name
  let newCustomer = prompt("Enter your name to join the queue:");
  if (newCustomer && newCustomer.trim() !== "") {
    customerQueue.push(newCustomer);
    alert(`Thank you, ${newCustomer}. You are number ${customerQueue.length} in the queue.`);
  } else {
    alert("No name entered. Skipping new customer registration.");
  }

  // Step 2: CSR enters a number to service
  displayQueue();
  let numberToService = prompt("CSR: Enter the number of the customer to be serviced:");

  let index = parseInt(numberToService) - 1;
  if (!isNaN(index) && index >= 0 && index < customerQueue.length) {
    let servedCustomer = customerQueue[index];
    alert(`Now serving: ${servedCustomer}`);
    customerQueue.splice(index, 1); // Remove the served customer
  } else {
    alert("Invalid number entered. Cannot service customer.");
    return;
  }

  // Step 3: Display updated queue
  displayQueue();
}

// Call the function to start the system
runQueueSystem();

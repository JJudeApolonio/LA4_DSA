/*Assignment 5 Specifications (in displaying use, console.log, prompt, and alert only):
Create a program simple Queueing System for Customer Service with the use of HASH Function (servicing 5 customers, Elaine, Althea, Angelo, Lito, Engelbert) where:
A Customer can Enter his/her name (to be stored in the customer hashed table - utilise a hash function) and is given a corresponding number (index+1 from the hashed table)
After storing the customer's name, the program must now ask (customer service representative - role) for a Number to be serviced.
Entered number will reveal the name of the customer in hashed table, then afterwards, removes it in the queue.
For every call of number, the updated hashed table must be displayed.
*/

// Simple hash function based on character codes
function simpleHash(name, size) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }
  return hash % size;
}

// Create a hash table with fixed size
const HASH_TABLE_SIZE = 10;
let hashTable = new Array(HASH_TABLE_SIZE).fill(null);

// Initial 5 customers
let initialCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
initialCustomers.forEach((customer) => {
  let index = simpleHash(customer, HASH_TABLE_SIZE);
  while (hashTable[index] !== null) {
    index = (index + 1) % HASH_TABLE_SIZE; // Linear probing
  }
  hashTable[index] = customer;
});

// Display current hash table
function displayHashTable() {
  console.log("Current Hash Table:");
  hashTable.forEach((name, index) => {
    console.log(`${index + 1}: ${name !== null ? name : "[Empty]"}`);
  });
}

// Run the system
function runHashQueueSystem() {
  alert("Welcome to the Customer Service Queue System with Hashing.");
  displayHashTable();

  // Step 1: Add a new customer
  let newCustomer = prompt("Enter new customer name to join the queue:");
  if (newCustomer && newCustomer.trim() !== "") {
    let index = simpleHash(newCustomer, HASH_TABLE_SIZE);
    let start = index;
    while (hashTable[index] !== null) {
      index = (index + 1) % HASH_TABLE_SIZE;
      if (index === start) {
        alert("Queue is full. Cannot add new customer.");
        return;
      }
    }
    hashTable[index] = newCustomer;
    alert(`Thank you, ${newCustomer}. You are assigned to position ${index + 1} in the table.`);
  } else {
    alert("No name entered. Skipping customer registration.");
  }

  // Step 2: CSR services a customer by number
  displayHashTable();
  let numberToService = prompt("CSR: Enter the number of the customer to be serviced:");

  let indexToService = parseInt(numberToService) - 1;
  if (!isNaN(indexToService) && indexToService >= 0 && indexToService < HASH_TABLE_SIZE) {
    let customer = hashTable[indexToService];
    if (customer !== null) {
      alert(`Now serving: ${customer}`);
      hashTable[indexToService] = null;
    } else {
      alert("That position is empty. No customer to service.");
    }
  } else {
    alert("Invalid number entered.");
    return;
  }

  // Step 3: Show updated table
  displayHashTable();
}

// Call the function
runHashQueueSystem();

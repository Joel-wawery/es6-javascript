function shoppingList(groceries) {
    // Use let for the shopping list string
    let shoppingString = "";
  
    // Loop through groceries using arrow function
    groceries.forEach((grocery) => {
      // Use template literals for formatted string
      shoppingString += `${grocery.quantity} ${grocery.item}\n`;
    });
  
    return shoppingString.trim(); // Remove trailing newline
  }
  
  // Example usage
  const groceries = [
    { item: "Bananas", quantity: 3 },
    { item: "Apples", quantity: 2 },
    { item: "Milk", quantity: 1 },
  ];
  
  const shoppingListString = shoppingList(groceries);
  console.log(shoppingListString);
  
// to get references: The document.getElementById calls retrive references to key elements in the HTML, so we can interact with their values dynamically.
const guestsInput = document.getElementById('guests');
const nightsInput = document.getElementById('nights');
const roomSelect = document.getElementById('room');
const totalCostDisplay = document.getElementById('total-cost');

// the function to calculate total cost: I wanted to use arrow function here. The calculateTotalCost function calculates the total price based on user inputs. The "if" will ensure the calculations are only performed when valid values are provided.
const calculateTotalCost = () => {
    const guests = parseInt(guestsInput.value);
    const nights = parseInt(nightsInput.value);
    const roomCostPerNight = parseInt(roomSelect.value);
    // to ensure if the inputs are valid
    if (guests > 0 && nights > 0) {
      const totalCost = guests * nights * roomCostPerNight;
      totalCostDisplay.textContent = totalCost;
    } else {
      totalCostDisplay.textContent = "0";
    }
  };

// attach event listeners: With the help of addEventListener, the application will respond immediately to user input and update the displayed total cost dynamically.
guestsInput.addEventListener('input', calculateTotalCost);
nightsInput.addEventListener('input', calculateTotalCost);
roomSelect.addEventListener('change', calculateTotalCost);


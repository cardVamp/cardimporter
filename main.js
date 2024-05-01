//time greeting

document.addEventListener("DOMContentLoaded", function() {
    var currentTime = new Date().getHours();
    var greeting;

    if (currentTime < 12) {
      greeting = "Good morning";
    } else if (currentTime >= 12 && currentTime < 17) {
      greeting = "Good afternoon";
    } else if (currentTime >= 17 && currentTime < 19) {
      greeting = "Good evening";
    } else {
      greeting = "Greetings";
    }

    // Display the greeting
    var pageTitle = document.querySelector(".ment");
    pageTitle.textContent = greeting;
  });


  //pre-loader
   // JavaScript to hide the pre-loader when the page is fully loaded
   setTimeout(function() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}, 2000);

//atm details

// Function to update the balance
  function updateBalance(amount) {
    // Assuming you have an existing balance element with the id "balanceAmount"
    var balanceElement = document.getElementById('balanceAmount');

    // Assuming you want to add the new amount to the existing balance
    // You can modify this logic based on your actual requirements
    var currentBalance = parseFloat(balanceElement.innerText) || 0;
    var newBalance = currentBalance + parseFloat(amount);

    // Update the balance element
    balanceElement.innerText = newBalance.toFixed(2); // Format the balance with two decimal places
  }

  // Function to submit the ATM form
  function submitForm() {
    // Get form inputs
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;
    var amount = document.getElementById('amount').value;

    // Check if any field is empty
    if (cardNumber === '' || expiryDate === '' || cvv === '' || amount === '') {
      // Display error message
      document.getElementById('errorModal').style.display = 'block';
      return; // Exit the function if any field is empty
    }

    // Hide error message (in case it was displayed previously)
    document.getElementById('errorModal').style.display = 'none';

    // Update the balance
    updateBalance(amount);

    // Display success message
    document.getElementById('successModal').style.display = 'block';

    // Reset form
    document.getElementById('atmForm').reset();

    // Hide success message after 2 seconds
    setTimeout(function() {
      document.getElementById('successModal').style.display = 'none';
    }, 2000);
  }




//transfer
function submittTransfer() {
  var accountNumber = document.getElementById("accountNumber").value;
  var bank = document.getElementById("bank").value;
  var amount = document.getElementById("amount").value;

  // Validate the inputs
  if (!accountNumber || !bank || !amount || isNaN(amount)) {
    displayModal('errorrModal');
  } else {
    // Display success modal
    displayModal('successsModal');

    // Reset the form after success
    document.getElementById('transferForm').reset();
  }
   // Close the modal after 2 seconds
   setTimeout(function () {
    document.getElementById('successsModal').style.display = "none";
    document.getElementById('errorrModal').style.display = 'none';
  }, 2000);
}

function displayModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

//transfer deduction

function submittTransfer() {
  var transferAmount = document.getElementById('amountt').value;
  transferAmount = parseFloat(transferAmount);

  if (!isNaN(transferAmount) && transferAmount > 0) {
    var currentBalance = parseFloat(document.getElementById('balanceAmount').innerText);

    if (currentBalance >= transferAmount) {
      var newBalance = currentBalance - transferAmount;
      document.getElementById('balanceAmount').innerText = newBalance.toFixed(2);

      document.getElementById('successsModal').style.display = 'block';
      document.getElementById('errorrModal').style.display = 'none';

      document.getElementById('transferForm').reset(); // Reset the form
      setTimeout(function () {
        document.getElementById('successsModal').style.display = "none";
        document.getElementById('errorrModal').style.display = 'none';
      }, 2000);
    } else {
      document.getElementById('errorrModal').style.display = 'block';
      document.getElementById('successsModal').style.display = 'none';
    }
  } else {
    document.getElementById('errorrModal').style.display = 'block';
    document.getElementById('successsModal').style.display = 'none';
  }
  
}

//search
    // Function to handle search button click
    function handleSearch() {
        // Get the input value
        var inputVal = document.getElementById("accountNumber").value;
        
        // Check if the input value matches the specified number
        if (inputVal === "2468101214") {
            // Display the result
            document.getElementById("searchResult").innerText = "Name: Samuel Okafor";
        } else {
            // Clear the result if the input value doesn't match
            document.getElementById("searchResult").innerText = "";
        }
    }



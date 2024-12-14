function calculateBMI() {
    // Get weight and height values
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const heightUnit = document.getElementById('height-unit').value;
  
    // Validate inputs
    if (!weight || !height || weight <= 0 || height <= 0) {
      document.getElementById('result').textContent = 'Please enter valid weight and height.';
      return;
    }
  
    // Convert height to meters if the unit is cm
    const heightInMeters = heightUnit === 'cm' ? height / 100 : height;
  
    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
  
    // Display the result
    document.getElementById('result').textContent = `Your BMI is ${bmi} (${category}).`;
  }
  
  function resetForm() {
    // Reset the input fields and result
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('height-unit').value = 'cm';
    document.getElementById('result').textContent = '';
  }
  

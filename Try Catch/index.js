function checkAge() {
    const ageField = document.getElementById('search-field');
    const ageFieldText = ageField.value;
    const errorText = document.getElementById('error');

    try{
        const age = parseInt(ageFieldText);
        if(isNaN(age)) {
            throw 'please enter a number'; // এটা দ্বারা কি এরর আসবে তা দেখাবে। 
        }
        else if(age < 18) {
            throw 'baccha not allow';
        }
        errorText.innerHTML = '';
    }
    catch(err) {
        console.log(err);
        errorText.innerHTML = 'Something wrong!' + err;
    }
    finally{ // finally সবসময় execute করবে। 
        console.log('All done');
    }
    console.log('cholbe'); // যদি try catch ঠিকমত কাজ করে তবে এই লাইন এক্সিকিউট করবে। 
    ageField.value = '';
}
const showAlert = () => {
    alert('How are you');
}

const showConfirm = () => {
    const result = confirm('I am fine!');
    if(result === true) {
        console.log('okay than')
    }
    else {
        console.log('wish you good luck')
    }
}

const showPrompt = () => {
    const result = prompt('How are you doing');
    console.log(result);
}
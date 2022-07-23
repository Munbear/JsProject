function hidePhoneNumber(phone_number) {
    let result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    console.log('A'.repeat(3));s
    return result
;}

console.log(hidePhoneNumber('01033334444'));
console.log(hidePhoneNumber("027778888"));
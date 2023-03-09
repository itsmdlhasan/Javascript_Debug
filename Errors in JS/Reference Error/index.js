// console.log(name);
// const name = 'th'; // যেহেতু const দিয়ে কোনো কিছু আগে ডিক্লিয়ার করে নিতে হয়, কিন্তু এখানে ডিক্লিয়ার করার আগেই খোজা হচ্ছে, তাই এটা খুজে পাবেনা। ফলে reference error দিবে। 

// function a() {
//     const v = 55;
// }
// console.log(v); // বাহির থেকে v কে খুজে পাবেনা, তারমানে reference পাবেনা, তাই reference error দেখাবে। 

// let x = 10;
// x = y + 5;
// console.log(x);

const greeting = 'Hello, world!';
// console.log(a()) // a নামে কোনো ফাংশন নেই, তাই রেফারেন্স এরর।
console.log(greeting()); // কিন্তু কোনো ভেরিয়েবল যদি ফাংশন না হয়, অথচ তাকে ফাংশন হিসেবে এক্সেস চাওয়া হয় তবে অবশ্য type error.
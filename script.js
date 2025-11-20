// ১. HTML থেকে বাটনটি নির্বাচন করা
const submitButton = document.getElementById('submitButton');

// ২. বাটনে 'click' ইভেন্ট লিসেনার যোগ করা
submitButton.addEventListener('click', function() {
    // ৩. যে পেজে যেতে চান তার URL এখানে দিন
    const destinationURL = 'thankyou.html'; // যেমন: 'thankyou.html' বা 'https://www.google.com'

    // ৪. ইউজারকে নতুন URL এ রিডাইরেক্ট করা
    window.location.href = destinationURL; 
    
    /* আপনি যদি চান যে ইউজার 'Back' বাটন ক্লিক করে এই পেজে আর ফিরে আসতে না পারুক, 
    তবে নিচের লাইনটি ব্যবহার করতে পারেন এবং উপরের 'window.location.href' লাইনটি মুছে দিতে পারেন:
    window.location.replace(destinationURL); 
    */
});
// একটি সাধারণ মেসেজ দেখানোর জন্য ফর্ম জমা দেওয়া ইভেন্ট হ্যান্ডলার
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ফর্ম ডিফল্ট সাবমিশন বন্ধ করা
    
    // ডেমোর জন্য একটি সাধারণ সতর্কতা মেসেজ
    alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে! (এটি একটি ডেমো ফর্ম)');

    // ফর্ম রিসেট
    this.reset();
});

// আপনি এখানে আরও অ্যাডভান্সড জাভাস্ক্রিপ্ট যুক্ত করতে পারেন, যেমন:
// - স্ক্রল করার সময় নেভিগেশন বারে ক্লাস যুক্ত করা (sticky header effect)
// - পরিষেবা কার্ডগুলির উপর হোভার বা ক্লিক ইভেন্ট।

// - ক্যারোসেল বা স্লাইডার যুক্ত করা।

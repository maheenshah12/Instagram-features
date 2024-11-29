// let arr = [
// {dp:"https://images.unsplash.com/photo-1731484635080-02d822253903?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ,story:"https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"},
// // 
//  {dp:"https://images.unsplash.com/photo-1732482124592-5d343f5b7a05?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D"
//  ,story:"https://images.unsplash.com/photo-1732316128244-b47689811656?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
// // 
//  {dp:"https://images.unsplash.com/photo-1732621457354-513b68a4939a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//  ,story:"https://media.istockphoto.com/id/2156252391/photo/sainte-chapelle.jpg?s=612x612&w=is&k=20&c=FU0uhFTWmkw-JHk2beYPvL0guvXIwcu0FWItACnNZis="},
// // 
// {dp:"https://images.unsplash.com/photo-1732048605707-aadc9e96f5a9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ,story:"https://media.istockphoto.com/id/1475367733/photo/plant-in-a-desert-sand-fuerteventura.jpg?s=612x612&w=is&k=20&c=01Y5uti_aIZ9LEj179z91soqt84xmRpbPv_Sdulb0Ho="
//  },
// ];

// let storiyan = document.querySelector("#storiyan")

// let clutter = "";

// arr.forEach(function (elem,idx) {
//     clutter += `<div class="story">
//         <img id="${idx}" src="${elem.dp}" alt="">
//     </div>`;
// });
  
// storiyan.innerHTML = clutter;

// storiyan.addEventListener("click", function (dets) {
//     document.querySelector("#full-screen").style.display = "block"
//     document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})` 
     
//     setTimeout(function(){
//          document.querySelector("#full-screen").style.display = "none"
//     },3000)
// });


// new work
// let post = document.querySelector(".post");
// let love = post.querySelector("i"); 

// post.addEventListener("dblclick", function() {
//     love.style.transform = 'scale(1)'; 
//     love.style.opacity = 0.8; 

//     setTimeout(() => {
//         love.style.opacity = 0; 
//        },1000);

//    setTimeout(() => {
//     love.style.transform = 'scale(0)'; 
//    },2000);
// });
// // 
// document.querySelector(".post")

// ////////////////////////////////

let arr = [
    { dp: "https://images.unsplash.com/photo-1731484635080-02d822253903?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1732697815367-80c3262419be?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1732482124592-5d343f5b7a05?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1732316128244-b47689811656?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1732621457354-513b68a4939a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://media.istockphoto.com/id/2156252391/photo/sainte-chapelle.jpg?s=612x612&w=is&k=20&c=FU0uhFTWmkw-JHk2beYPvL0guvXIwcu0FWItACnNZis=" },
    { dp: "https://images.unsplash.com/photo-1732048605707-aadc9e96f5a9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://media.istockphoto.com/id/1475367733/photo/plant-in-a-desert-sand-fuerteventura.jpg?s=612x612&w=is&k=20&c=01Y5uti_aIZ9LEj179z91soqt84xmRpbPv_Sdulb0Ho=" },
];

let storiyan = document.querySelector("#storiyan");
let fullScreen = document.querySelector("#full-screen");
let header = document.querySelector(".header");
let post = document.querySelector(".post");
 

let clutter = "";

arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
                    <img class="story-image" id="${idx}" src="${elem.dp}" alt="Story Image">
                 </div>`;
});

storiyan.innerHTML = clutter;

// Add event listener for showing the full-screen story when clicked
storiyan.addEventListener("click", function (e) {
    if (e.target.classList.contains("story-image")) {
        let storyIdx = e.target.id;
        fullScreen.style.display = "block";
        fullScreen.style.backgroundImage = `url(${arr[storyIdx].story})`;

        // Hide header and post when story is clicked
        header.style.display = "none";
        post.style.display = "none";
    }
});

// Hide full-screen and show the header/post again after 3 seconds
fullScreen.addEventListener("click", function () {
    fullScreen.style.display = "none";
    header.style.display = "block";
    post.style.display = "block";
});

// New functionality for double-clicking to like the post
let love = post.querySelector("i");

post.addEventListener("dblclick", function () {
    love.style.transform = 'scale(1)';
    love.style.opacity = 0.8;

    setTimeout(() => {
        love.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
        love.style.transform = 'scale(0)';
    }, 2000);
});


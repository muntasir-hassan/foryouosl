let isShe = false;
const content = document.getElementById("content");
import { data } from "./data.js";
function updateIsShe({ cName, ip }) {
  if (cName == "GB") {
    isShe = true;
    check();
    showmsg(ip);
  } else {
    isShe = false;
    check();
  }
}

const showmsg = (ip) => {
  Swal.fire({
    title: "Thanks!",
    text: `Thanks for sharing your ip(${ip}), we hack to protect not to harm🥀`,
    icon: "success",
    confirmButtonText: "Got it!",
  });
};

const fetchData = async () => {
  const res = await fetch(`https://ipinfo.io/json?token=5825313c69ac1d`);
  const data = await res.json();
  const cName = data.country;
  const ip = data.ip;
  updateIsShe({ cName, ip });
};
fetchData();



const check = () => {
  if (isShe == true) {
    document.title = "Love Letter";
    document
      .getElementById("favicon")
      .setAttribute("href", "./picture/withered.png");
    content.innerHTML = `     

  <main class="max-w-6xl mx-auto px-4 md:px-8 py-10">
    <header class="mb-6">
      <h1 class="text-4xl font-bold text-red-600">Welcome 🥀</h1>
      <p class="text-gray-500 mt-2">A one-sided short love story written in silence</p>
    </header>

    <section>
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Only for you</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

       
            ${data
              .map(
                (reel) => `
                <div class="bg-white rounded-lg shadow p-4">
                  <h3 class="text-lg font-medium mb-3 text-gray-800">
                    ${reel.title}
                  </h3>
            <video class="w-full h-auto rounded-md" controls loading="lazy" >
                    <source src="${reel.src}" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video></div>`
              )
              .join("")}</div>
    </section>

    <div class="bg-white p-8 rounded-lg shadow-lg space-y-6 my-8">

      <!-- Poetic Quote -->
      <blockquote class="italic text-lg text-gray-700 border-l-4 border-blue-500 pl-4">
        “He could ignore a hundred hearts,<br>
        but not the one that felt like home.<br>
        Chasing her felt like love—<br>
        until he met self-respect<br>
        in the quiet she left behind.”
      </blockquote>
      <p class="text-right text-sm text-gray-500">— Unknown Bro</p>

    </div>
<div class="bg-white p-8 rounded-lg shadow-lg space-y-6 my-8">

      <!-- Poetic Quote -->
      <blockquote class="italic text-lg text-gray-700 border-l-4 border-red-500 pl-4">
        “You made my scars a story. I never gave you permission—but I never stopped reading.<b> But barwey tuje mera account ka acsess kese mila </b>. I loved ur style a hacker, a programmer, a developer and a friend. But bro u suck at development, this site is'nt prod ready.”
      </blockquote>
      <p class="text-right text-sm text-gray-500">— Mayaz Hassan</p>

    </div>

<div class="bg-white p-8 rounded-lg shadow-lg space-y-6 my-8">

      <!-- Poetic Quote -->
      <blockquote class="italic text-lg text-gray-700 border-l-4 border-black pl-4">
        “This site is created by my hacker(fake) + anonymous(fake) friend(real). For fun purpose and with his intention to make my heart vulnerable and exploit it to win a race(if i had to create web pages to describ the race it'll take years) 😊. And ofcourse u losed a bet now u have to add this to ur profile"
      </blockquote>
      <p class="text-right text-sm text-gray-500">— Mayaz Hassan</p>

    </div>
 
  </main>

`;
    document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.addEventListener("play", () => {
      videos.forEach((v) => {
        if (v !== video) {
          v.pause();
        }
      });
    });
  });
});

  }
};


check();

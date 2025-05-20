let isShe = false;
const content = document.getElementById("content");

function updateIsShe(cName) {
  if (cName == "GB") {
    isShe = true;
    check();
  } else {
    isShe = false;
    check();
  }
}

const fetchData = async () => {
  const res = await fetch(`https://ipinfo.io/json?token=5825313c69ac1d`);
  const data = await res.json();
  const cName = data.country;
  updateIsShe(cName);
};
fetchData();

const check = () => {
  if (isShe == true) {
    document.title = "Lost Men";
    content.innerHTML = `    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="text-center px-6">
        <h1 class="text-9xl font-bold text-blue-600">404</h1>
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p class="text-gray-600 mt-2 mb-6">
          Sorry, I've already lost you; there's no need to lose my character
          too. I've already carried enough scars.
        </p>
        <a
          href="/"
          class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
        >
          Go back home
        </a>
      </div>
    </div>`;
  }
};

check();

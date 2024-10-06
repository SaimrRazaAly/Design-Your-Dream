let Work_Container = document.querySelector(".work-content");
let Faq_Container = document.querySelector(".faq-content");
let faq_box_btn = document.querySelectorAll("#faq-box-btn");
let faq_box_para = document.querySelectorAll(".faq-box-para");
console.log(faq_box_para);
let Work_Data = [
  {
    heading: "A New Day Wrok",
    paragraph:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit a praesentium pariatur deleniti nesciunt eius, aperiam perspiciatis sapiente accusamus quam expedita corrupti sint. Neque, error?",
  },
  {
    heading: "The Boss Day",
    paragraph:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit a praesentium pariatur deleniti nesciunt eius, aperiam perspiciatis sapiente accusamus quam expedita corrupti sint. Neque, error?",
  },
  {
    heading: "Submit The Report",
    paragraph:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit a praesentium pariatur deleniti nesciunt eius, aperiam perspiciatis sapiente accusamus quam expedita corrupti sint. Neque, error?",
  },
  {
    heading: "Call Me Now",
    paragraph:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit a praesentium pariatur deleniti nesciunt eius, aperiam perspiciatis sapiente accusamus quam expedita corrupti sint. Neque, error?",
  },
];

let Faq_Data = [
  {
    heading: "Why us Motivation the community",
    paragraph:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit a praesentium pariatur deleniti nesciunt eius, aperiam perspiciatis sapiente accusamus quam expedita corrupti sint. Neque, error?",
  },
  {
    heading: "Why us Motivation the community",
    paragraph:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit a praesentium pariatur deleniti nesciunt eius, aperiam perspiciatis sapiente accusamus quam expedita corrupti sint. Neque, error?",
  },
  {
    heading: "Submit The Report",
    paragraph:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit a praesentium pariatur deleniti nesciunt eius, aperiam perspiciatis sapiente accusamus quam expedita corrupti sint. Neque, error?",
  },
  {
    heading: "Call Me Now",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit a praesentium pariatur deleniti nesciunt eius, aperiam perspiciatis sapiente accusamus quam expedita corrupti sint. Neque, error?",
    },
  ];
  
Work_Data.map((v, i) => {
  Work_Container.innerHTML += `
    <div>
    <h2>${v.heading}</h2>
    <p>${v.paragraph}</p>
    </div>
    `;
  });
  
  Faq_Data.map((v, i) => {
    Faq_Container.innerHTML += `
    
    <div class="faq-box" >
    <h2 class="faq-box-heading" onclick="showFaq(${i})">
    ${v.heading} 
    <span class="faq-box-btn" id="faqBtn-${i}">+</span>
    </h2>
    <p class="faq-box-para" id="faqPara-${i}">${v.paragraph}</p>
    </div>
    `;
  });
  
  function showFaq(index) {
    // Get all paragraphs and buttons
    const allFaqParas = document.querySelectorAll(".faq-box-para");
    const allFaqBtns = document.querySelectorAll(".faq-box-btn");
    
    // Loop through all FAQs and close them except the one being clicked
    allFaqParas.forEach((para, i) => {
      const btn = allFaqBtns[i];
      if (i === index) {
        // Toggle only the clicked FAQ
        para.classList.toggle("faq-box-para-show");
        
        para.classList.contains("faq-box-para-show")
        ? btn.classList.add("rotate")
        : btn.classList.remove("rotate");
      } else {
        // Hide all othe
        para.classList.remove("faq-box-para-show");
        btn.classList.remove("rotate");
      }
    });
  }

  // ====================================================== navbar ===========================
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("#navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


function showNav()
{
  let Nav_List = document.querySelector("#nav-list");
  let hamburger = document.querySelector(".hamburger");
  Nav_List.classList.toggle("show-nav")
  if(Nav_List.classList.contains("show-nav")){
    hamburger.textContent = "X"
  }
  else{
    hamburger.textContent = "="
  }
}
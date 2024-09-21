let Work_Container = document.querySelector(".work-content");
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


Work_Data.map((v,i)=>{
    Work_Container.innerHTML +=`
    <div>
    <h2>${v.heading}</h2>
    <p>${v.paragraph}</p>
    </div>
    `
})
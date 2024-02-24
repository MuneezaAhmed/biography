/*==========typing animation*/
var typed = new Typed(".typing",{
  strings:["","X Corp.","SpaceX","The Boring Company ","OpenAI"],
  typedSpeed:100,
  backSpeed:60,
  loop:true
})
/*==========aside navbar */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
  for(let i=0; i<totalNavList; i++)
  {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
      removeBackSection();
      for(let j=0; j<totalNavList; j++)
      {
        if(navList[j].querySelector("a").classList.contains("active"))
        {
          addbackSection(j);
        //  allSection[j].classList.add("back-section");
        }
          navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active")
      showSection(this);
      if(window.innerWidth < 1200)
      {
        asideSectionTogglerBtn();
      }
    })
  }
  function removeBackSection()
  {
    for(let i=0; i<totalSection; i++)
    {
      allSection[i].classList.remove("back-section");
    }
  }
  function addbackSection(num)
  {
    allSection[num].classList.add("back-section");
  }
  function showSection(element)
  {
    for(let i=0; i<totalSection; i++)
    {
      allSection[i].classList.remove("active");
    }
     const target = element.getAttribute("href").split("#")[1];
     document.querySelector("#" + target).classList.add("active")
  }
  function updateNav(element)
  {
   for(let i=0; i<totalNavList; i++)
   {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
    {
      navList[i].querySelector("a").classList.add("active");
    }
   }
  }
  document.querySelector(".hire-me").addEventListener("click", function()
  {
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addbackSection(sectionIndex);
  })
  const navTogglerBtn = document.querySelector(".nav-toggler"),
         aside = document.querySelector(".aside");
         navTogglerBtn.addEventListener("click", () =>
         {
          asideSectionTogglerBtn();
         })
         function asideSectionTogglerBtn()
         {
          aside.classList.toggle("open");
          navTogglerBtn.classList.toggle("open");
          for(let i=0; i<totalSection; i++ )
          {
            allSection[i].classList.toggle("open");
          }
         }
         document.addEventListener("DOMContentLoaded", function() {
          setTimeout(function() {
            // Hide loader
            document.querySelector('.preloader-wrap').style.display = 'none';
            // Display website content
            document.getElementById('content').style.display = 'block';
          }, 3000); 
        });
        var cursor = document.querySelector(".cursor");
        var cursor2 = document.querySelector(".cursor2");
        document.addEventListener("mousemove",function(e){
         cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX
         + "px; top: " + e.clientY + "px;";
        });      
  
const body = document.querySelector("body"),
      dashboard = document.querySelector(".dashboard"),
      toggle = body.querySelector(".toggle"),
      modeText = body.querySelector(".mode-text"),
      modeSwitch = body.querySelector(".toggle-switch");
      modeIcon = body.querySelector(".moon-sun");
      dashClose = body.querySelector(".header");
      dash = body.querySelector(".main");
      
    window.onload = () =>{
        // dashboard.classList.toggle("close");
        // dashClose.classList.toggle("shift");
        // dash.classList.toggle("shift");
        body.classList.toggle("dark");
    }

      toggle.addEventListener("click", () =>{
        dashboard.classList.toggle("close");
        dashClose.classList.toggle("shift");
        dash.classList.toggle("shift");
      })

      if(dashboard.classList.contains("close")){
        modeIcon.addEventListener("click", () =>{
        body.classList.toggle("dark");
        })
      }
      

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }
        else{
            modeText.innerText = "Dark Mode"
        }
      });


    

      
     


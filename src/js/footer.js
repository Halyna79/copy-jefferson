import axios from 'axios';
import iziToast from "izitoast";

const form = document.querySelector(".footer-form")

const btnClose = document.querySelector(".btn-close-res");
const menu = document.querySelector(".modal-window");
const body = document.querySelector("body");

const baseUrl = "https://portfolio-js.b.goit.study/api";
const endPoint = "/requests";

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    try{
        const email = e.currentTarget.elements.email.value.trim();
        const comment = e.currentTarget.elements.comments.value.trim();

        const data = JSON.stringify({email,comment})

  
        const url = baseUrl + endPoint

      
        const response = await axios.post(url,data,{
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"}
        })
        
        menu.classList.add('show');

        form.reset()

        disabledScroll ()

        /*document.querySelector(".res-window").addEventListener("click", (e) => {
            console.log(e.target);
        })*/

        menu.addEventListener("click", e=> {
                  
            if (e.target !== e.currentTarget) {
            return;
         }

         console.log(e.target)
          menu.classList.remove('show');
        })

         
        
        document.addEventListener('keydown', e => {
            if (e.key === "Escape") menu.classList.remove('show');
        }); 

        btnClose.addEventListener ('click', (e) => {
            menu.classList.remove('show');
        })

    }catch(e){

        
        iziToast.show({
            backgroundColor: 'RGBA(237, 59, 68, 1)',
            messageColor: `rgba(255, 255, 255, 1)`,
            close: `false`,
            position: "topRight",
            message: `Error. Please, try again later`
      });

    }    
   
});

    
function disabledScroll () {
    body.classList.add(".disable-scroll")
}
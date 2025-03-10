import axios from 'axios';

const form = document.querySelector(".footer-form")

const btnClose = document.querySelector(".btn-close-res");
const menu = document.querySelector(".modal-window");


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

        menu.addEventListener("click", e=> {
            menu.classList.remove('show');
        })
        
        document.addEventListener('keydown', e => {
            if (e.key === "Escape") menu.classList.remove('show');
        }); 

        btnClose.addEventListener ('click', (e) => {
            menu.classList.remove('show');
        })

    }catch(e){
        alert("Error. Please, try again later")
    }    
    
    
});

    
    






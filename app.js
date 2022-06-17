const button = document.querySelector("#btn");
const innerContainer = document.querySelector(".inner-container");


button.addEventListener("click",()=>{
    const getPersonData = async()=> {
        try {
            const url = "https://randomuser.me/api"
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
        
            createPersonData(data);


        } catch (error) {
            alert(error);
        }
    }
    createPersonData = (data) => {
        let name =
    };
    getPersonData();
})
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
        let {first,last}=data.results[0].name;
        let location =data.results[0].location.country;
        let {email,phone} = data.results[0];
        let image = data.results[0].picture.medium;
        // let name = data.results[0]
        // console.log(first);
        // console.log(last);
        // console.log(location);
        // console.log(email);
        // console.log(phone);


        innerContainer.innerHTML = `
        <img class="image" src="person-0.jpg" alt="" />
         <p>
            <i class="fa-solid fa-user"></i> Name :
            <span class="name"> Anderson</span>
        </p>
        <p>
            <i class="fa-solid fa-user"></i> LastName :
            <span class="last-name"> Manderson </span>
        </p>
        <p>
            <i class="fa-solid fa-magnifying-glass-location"></i> Location :
            <span class="location"> Adana</span>
        </p>
        <p>
            <i class="fa-solid fa-phone-flip"></i>Phone :
            <span class="phone"> 123-456-789</span>
        </p>
        <p>
            <i class="fa-solid fa-envelope"></i>Email :
            <span class="email"> asdfg@gmail.com</span>
        </p>`

    };
    getPersonData();
});
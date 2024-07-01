let data = {
  fullName: "William B. Johnson",
  position: "Big Balla/Shot Calla",
  socials: [
    {
      id: "fb",
      service: "Facebook",
      url: "https://www.facebook.com/JankyBillJohnson",
      icon: "fab fa-facebook-f",
    },
    {
      id: "ig",
      service: "Instagram",
      url: "https://www.instagram.com/JankyBillJohnson",
      icon: "fab fa-instagram",
    },
    {
      id: "db",
      service: "Dribbble",
      url: "https://www.dribbble.com/JankyBillJohnson",
      icon: "fab fa-dribbble",
    },
    {
      id: "gl",
      service: "Google",
      url: "https://www.google.com/JankyBillJohnson",
      icon: "fab fa-google",
    },
  ],
};

let cardApp = (data) => {
  let body = document.getElementsByTagName("body")[0];
  let root = document.createElement("div");
  let style = document.createElement("style");
  let card = document.createElement("section");
  let html = `
<div class="card__wrapper">
          <img src="img/IMG_1176 (1).jpg" class="card__user-img">
          <div class="card__info">
            <span class="card__name">${data.fullName}</span>
            <span class="card__title">${data.position}</span>
          </div>
          <div class="card__socials">
            
            
              
          </div>
        </div>
        `;
  let cssStyles = `
  .card {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(25px);
}

.card__wrapper {
  padding: 20px 20px 3rem 20px;
  max-width: 300px;
  width: 100%;
  background: rgb(255, 223, 174);
  box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card__user-img {
  border: 2px solid #2c5e;
  height: 70px;
  width: 70px;
  margin: 2rem 0 1.5rem;
  border-radius: 50%;
}

.card__info {
  margin-bottom: 2rem;
}

.card__name {
  text-align: center;
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card__title {
  display: block;
  font-size: 0.7rem;
  margin-bottom: 2rem;
  text-align: center;
}

.card__icon {
    width: 200px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid black;
    margin-bottom: .4rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    transition: bacground .3s ease-in-out, color .3s ease-in-out;
    cursor: pointer;
    text-decoration: none;

}

.card__icon-box {
    width: 25px;
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card__icon-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.card__icon--fb {
    color: #2c5eff;
    border: 1px solid #2c5eff;
}

.card__icon--fb:hover {
    background: #2c5eff;
    color: white;
}

.card__icon--ig {
    color: #773fe7;
    border: 1px solid #773fe7;
}

.card__icon--ig:hover {
    background: #773fe7;
    color: white;
}

.card__icon--ig {
    color: #773fe7;
    border: 1px solid #773fe7;
}

.card__icon--ig:hover {
    background: #773fe7;
    color: white;
} 
    
.card__icon--db{
  color: #f962b1;
  border: 1px solid #f962b1;
}
.card__icon--db:hover{
  background: #f962b1;
  color: white;

}

`;
  body.prepend(root);
  root.classList.add("root");
  root.prepend(card);
  root.style.cssText = `
        background: url('img/IMG_1175.JPG'); 
        background-size: cover;
        background-position: center;
        `;
  root.prepend(style);
  card.classList.add("card");
  style.innerHTML = cssStyles;
  card.innerHTML = html;

  let cardSocials = card.querySelector(".card__socials");

  data.socials.forEach((item) => {
    let tempNode = document.createElement("a");
    tempNode.setAttribute("href", item.url);
    tempNode.setAttribute("target", "_blank");
    tempNode.classList.add('card__icon', `card__icon--${item.id}`);
    tempNode.innerHTML = `
   <span class="card__icon-box">
                <i class="${item.icon}"></i>
              </span>
              <span class="card__icon-title">
                 ${item.service}
              </span>
  `;
    cardSocials.append(tempNode);
  });
};

cardApp(data);
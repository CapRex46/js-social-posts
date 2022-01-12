const socialhome = [
    {   
        id: 1,
        pic: src="https://unsplash.it/300/300?image=15",
        autor: 'Phil Mangione',
        eta: '4 mesi fa',
        postimg: src="https://unsplash.it/600/300?image=171",
        postlike: 80,
    },
    {
        id: 2,
        pic: src="https://i.picsum.photos/id/133/300/300.jpg?hmac=QNG5UogJb89EMr5ynHF9s2vYRUGx4EVNFu1gJ2cS5Yg",
        autor: 'Joe Mama',
        eta: '2 giorni fa',
        postimg: src="https://i.picsum.photos/id/340/300/300.jpg?hmac=14W5SZd_fBT9ZqTxxdzAfXNAgy3aBn0e8_MtIpOAs3Y",
        postlike: 120,
    },
    {
        id: 3,
        pic: src="https://i.picsum.photos/id/737/300/300.jpg?hmac=94eQ0-7BgWyrtUDzUZpTKyhkpATPLelT9Um_aq-q050",
        autor: 'John Doe',
        eta: '1 settimana fa',
        postlike: 160,
    },
    {
        id: 4,
        pic: src="https://unsplash.it/300/300?image=15",
        autor: 'Phil Mangione',
        eta: '4 mesi fa', 
        postimg: src="https://i.picsum.photos/id/282/300/300.jpg?hmac=0hD9MPJFGhh7JPyvYdwNJxeOqFl2Q41y71ZvtZ1ybJQ",
        postlike: 180,
    },
    {
        id: 5,
        pic: src="https://i.picsum.photos/id/133/300/300.jpg?hmac=QNG5UogJb89EMr5ynHF9s2vYRUGx4EVNFu1gJ2cS5Yg",
        autor: 'Joe Mama',
        eta: '2 giorni fa',
        postlike: 200,
    },
    {
        id: 6,
        pic: src="https://i.picsum.photos/id/737/300/300.jpg?hmac=94eQ0-7BgWyrtUDzUZpTKyhkpATPLelT9Um_aq-q050",
        autor: 'John Doe',
        eta: '1 settimana fa',
        postlike: 220,
    }
]

const containerHtml = document.querySelector('.post');

for (let i = 0; i < socialhome.length; i++) {
    containerHtml.innerHTML +=
    `<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${socialhome[i].pic}" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${socialhome[i].autor}</div>
            <div class="post-meta__time">${socialhome[i].eta}</div>
        </div>                    
    </div>
</div>
<div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
<div class="post__image">
    <img src="${socialhome[i].postimg}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b class="js-likes-counter">${socialhome[i].postlike}</b> persone
        </div>
    </div> 
</div>            `

}

const likeButtons = document.querySelectorAll('.js-like-counter')
const likeCounters = document.querySelectorAll('.js-likes-counter')



for (let i = 0; i < likeButtons.length; i++) {
    const button = likeButtons[i];

    button.addEventListener('click', function() {
    })

}


























{/* <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author"></div>
            <div class="post-meta__time"></div>
        </div>                    
    </div>
</div>
<div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
<div class="post__image">
    <img src="" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
        </div>
    </div> 
</div>             */}
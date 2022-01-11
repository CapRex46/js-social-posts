const socialhome = [
    {
        pic: src="https://unsplash.it/300/300?image=15",
        autor: 'Phil Mangione',
        eta: '4 mesi fa',
        postimg: src="https://unsplash.it/600/300?image=171",
    },
    {
        pic: src="https://i.picsum.photos/id/133/300/300.jpg?hmac=QNG5UogJb89EMr5ynHF9s2vYRUGx4EVNFu1gJ2cS5Yg",
        autor: 'Joe Mama',
        eta: '2 giorni fa',
        postimg: src="https://i.picsum.photos/id/340/300/300.jpg?hmac=14W5SZd_fBT9ZqTxxdzAfXNAgy3aBn0e8_MtIpOAs3Y",
    },
    {
        pic: src="https://i.picsum.photos/id/737/300/300.jpg?hmac=94eQ0-7BgWyrtUDzUZpTKyhkpATPLelT9Um_aq-q050",
        autor: 'John Doe',
        eta: '1 settimana fa',
        postimg: src="https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",

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
            Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
        </div>
    </div> 
</div>            `

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
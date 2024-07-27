

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header ul a');





window.addEventListener('scroll', ()=>{
    const navBar = document.querySelector('header .navBar');
    navBar.classList.toggle("sticky", window.scrollY > 100 );
}
);


window.onscroll = () =>{
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header ul a[href*=' + id +']').classList.add('active');
            });
        };
    });
};




const menu = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-regular');
const navBarItems = document.querySelector('.navBar_items');

menu.addEventListener('click', ()=>{

    navBarItems.style.left = 40 +'%'

    }
);

    close.addEventListener('click', ()=>{
        navBarItems.style.left = 140 +'%'
    });




    const dialogue = document.querySelector('.dialogue');
    const showDialog = document.querySelectorAll(".showDialogue");
    const closeDialog = document.querySelector(".closeDialogue");


showDialog.forEach(e =>{
    e.addEventListener('click', ()=>{
        dialogue.style.display = 'block';
    });
})

closeDialog.addEventListener('click', ()=>{
    dialogue.style.display = 'none';
});
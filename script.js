
document.querySelector('.menu-opener p').addEventListener('click', ()=>{
    setTimeout(() => {
        document.querySelector('.menu-opener').style.marginLeft = '-300';
        document.querySelector('.menu').style.marginLeft = "0";
    }, 100);
    document.querySelector('.menu').style.display = 'flex';

});

document.querySelector('.control.exit').addEventListener('click', ()=>{
    setTimeout(() => {
        document.querySelector('.menu').style.marginLeft = '-300';
        document.querySelector('.menu-opener').style.marginLeft = "0";
    }, 100);
    document.querySelector('.menu-opener').style.display = 'flex';

});

document.querySelector('.adicionar input, .adicionar textarea').addEventListener('click', ()=>{
    setTimeout(() => {
        document.querySelector('.adicionar').style.marginLeft = '15%';
        document.querySelector('.adicionar').style.height = '70%';
        document.querySelector('.adicionar').style.width = '70%';
    }, 100);
    document.querySelector('body').addEventListener('click', ()=>{
        document.querySelector('.adicionar').style.marginLeft = '35%';
        document.querySelector('.adicionar').style.height = '30%';
        document.querySelector('.adicionar').style.width = '30%';
    });
});

document.querySelector('.adicionar textarea').addEventListener('click', ()=>{
    setTimeout(() => {
        document.querySelector('.adicionar').style.marginLeft = '15%';
        document.querySelector('.adicionar').style.height = '70%';
        document.querySelector('.adicionar').style.width = '70%';
    }, 100);
    document.querySelector('body').addEventListener('click', ()=>{
        document.querySelector('.adicionar').style.marginLeft = '35%';
        document.querySelector('.adicionar').style.height = '30%';
        document.querySelector('.adicionar').style.width = '30%';
    });
});

document.querySelector('.control-anotation').addEventListener('click', ()=>{
    document.querySelector('.adicionar').style.display = 'none';
    document.querySelector('.adicionar-mae').style.display = 'none';
    setTimeout(() => {
        document.querySelector('.adicionar').style.height = '10%';
        document.querySelector('.adicionar').style.width = '10%';
    }, 100);
});

document.querySelector('.control.um').addEventListener('click', ()=>{
    document.querySelector('.adicionar').style.display = 'flex';
    document.querySelector('.adicionar-mae').style.display = 'flex';
    setTimeout(() => {
    document.querySelector('.adicionar').style.height = '30%';
    document.querySelector('.adicionar').style.width = '30%';
}, 100);
});
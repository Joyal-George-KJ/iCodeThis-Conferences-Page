
const navBtn = document.getElementById('nav-btn');
const asdeDivs = document.querySelectorAll('.conference-aside div.parts');
const datestamp = document.querySelectorAll('.timestamp li');
const navLists = document.querySelectorAll('#nav-expand li');

let prevFocus = {
    'nav' : 0,
    'datestamp' : 0,
    'aside' : 0
}


navBtn.addEventListener('click', () => {     
    const navExpand = document.getElementById('nav-expand');
    const toggleIcon = document.querySelector('#nav-btn i');

    if(navExpand.className == 'display-none') {
        toggleIcon.className = 'bi bi-x-lg p-1 ts-1'
        navExpand.className = 'nav-expand';
    }else if(navExpand.className == 'nav-expand'){
        toggleIcon.className = 'bi bi-list p-1 ts-1'
        navExpand.className = 'display-none';
    }
})



function focusing(value, index){

    if(value == 'nav'){
        navLists[prevFocus.nav].className = 'm-2 color-TL hoverable';
        navLists[index].className = 'm-2 color-TL hoverable focused';
        prevFocus.nav = index;
        console.log(`${value} : ${index}`);
    } else if(value == 'datestamp'){
        datestamp[prevFocus.datestamp].className = 'p-1 color-TL br-2 hoverable';
        datestamp[index].className = 'p-1 color-TL br-2 active hoverable';
        prevFocus.datestamp = index;
        console.log(`${value} : ${index}`);
    } else if(value == 'aside'){
        asdeDivs[prevFocus.aside].className = 'parts p-1 mt-1 br-2 hoverable';
        asdeDivs[index].className = 'parts p-1 mt-1 br-2 active hoverable';
        prevFocus.aside = index;
        console.log(`${value} : ${index}`);
        
    }

}

focusing('nav', 3);
focusing('datestamp', 0);
focusing('aside', 1);
import {root,windowLoaded,setLight,setDark, asideBtnSParent, asideBtns,headerFormInput,
    outoCompleteFunc,headerFormSuggestionItemMouseOver,headerFormSuggestionItemMouseOut,headerFormSuggestionItemClicked,
    autoCompleteList,autoCompleteWrapper,accountMassageWrapper,accountMassageBtn,emailBtn,
    accountEmail,addEmailToListFunc,emailSuggestionWrapper,emailSuggestionList,emailSuggestionListhover,emailSuggestionListOut,emailInputBtn,
    emailInputBtncClicked,emailInput,emailSuggestionListClicked,emailInputKeyupHandler,removeWordOfList,setLocalSuggestionWord,
    headerFormSearchBtn,headerFormSearchBtnHandler
} from "./Funcs.js";
let suggestionsWords = [

];
let accounts = [
    {fName: 'arash',lName:'vakily',username: 'arash_va',email:'arAsh@google.com',imgSrc:'images/email/arash.png'},
    {fName: 'adel',lName:'eshkevar',username: 'adel_esh',email:'Adel@google.com',imgSrc:'images/email/adel.png'},
    {fName: 'aref',lName:'evEsh',username: 'aref_vsh',email:'areF@google.com',imgSrc:'images/email/aref.png'},
];

suggestionsWords = windowLoaded(accounts,suggestionsWords)

asideBtnSParent.addEventListener('click', (event) => {
    const target = event.target;
    let theme = null;

    // بررسی کلاس‌ها و تعیین تم
    if (target.closest('.light')) {
        theme = 'light';
    } else if (target.closest('.dark')) {
        theme = 'dark';
    }

    // اگر تم تغییر کند، اعمال کنیم
    if (theme) {
        localStorage.setItem('localTheme', theme);
        theme === 'light' ? setLight() : setDark();
    }
});
/*===============================
===============================
===============================*/
headerFormInput.addEventListener('keyup',function (event){
    event.preventDefault()
    event.stopPropagation()
    if (event.target.keyCode === 13){
        let inputValue = headerFormInput.value
        suggestionsWords = headerFormSearchBtnHandler(inputValue,suggestionsWords)

    }else {
        let inputValue = event.target.value.toLowerCase()
        outoCompleteFunc(inputValue,suggestionsWords)
    }
})
headerFormSearchBtn.addEventListener('click' , function (event){
    event.preventDefault()
    event.stopPropagation()
    let inputValue = headerFormInput.value
    suggestionsWords = headerFormSearchBtnHandler(inputValue,suggestionsWords)

})
// افزودن Event Listener به صورت کلی برای ul
autoCompleteList.addEventListener('mouseover', headerFormSuggestionItemMouseOver);
autoCompleteList.addEventListener('mouseout', headerFormSuggestionItemMouseOut);
autoCompleteList.addEventListener('click', function (event){
    event.stopPropagation()
    let targetLi = event.target.closest('.header-form__suggestion-item')
    if (targetLi){
        if (event.target.classList.contains('header-form__suggestion-item-btn')){
             suggestionsWords = removeWordOfList(event.target,suggestionsWords)
            console.log(suggestionsWords)
        }else {
            headerFormSuggestionItemClicked(targetLi)
        }
    }
});
accountMassageBtn.addEventListener('click', () => {
    accountMassageWrapper.classList.toggle('fade')
})
accountMassageWrapper.addEventListener('click' , (event) => {
    if (event.target && event.target.tagName === 'A'){
        event.target.parentElement.parentElement.parentElement.classList.remove('fade')
    }
})
emailBtn.addEventListener('click' , (event) => {
    accountEmail.classList.toggle('open')
    if (accountEmail.classList.contains('open')){
        if (emailSuggestionWrapper.children.length > 0){
            emailSuggestionWrapper.classList.add('py-10')
            emailSuggestionList.classList.add('open')
        }
    }
})
emailInputBtn.addEventListener('click' , function (event){
    event.preventDefault()
    emailInputBtncClicked(accounts)
})
emailInput.addEventListener('keyup' , function (event){
    if (event.keyCode === 13){
        emailInputBtncClicked(accounts)
    }else {
        emailInputKeyupHandler(event , accounts)
    }
})

emailSuggestionList.addEventListener('mouseover', emailSuggestionListhover);
emailSuggestionList.addEventListener('mouseout', emailSuggestionListOut );
emailSuggestionList.addEventListener('click' , emailSuggestionListClicked)
document.addEventListener('click', function (event) {
    // بررسی کنید که کلیک در داخل المان‌های مرتبط نباشد
    if (
        !headerFormInput.contains(event.target) && // ورودی
        !autoCompleteWrapper.contains(event.target) // لیست پیشنهادها
    ) {
        autoCompleteWrapper.classList.remove('show'); // بستن لیست
    }
    if (
        !accountMassageBtn.contains(event.target) && // ورودی
        !accountMassageWrapper.contains(event.target) // لیست پیشنهادها
    ) {
        accountMassageWrapper.classList.remove('fade'); // بستن لیست
    }
    if (
        !emailBtn.contains(event.target) && // ورودی
        !emailSuggestionWrapper.contains(event.target) &&
        !emailInput.contains(event.target)// لیست پیشنهادها
    ) {
        accountEmail.classList.remove('open'); // بستن لیست
    }

});
let mobileIcon = document.querySelector('.mobile-icon')
let asideElem = document.querySelector('.aside')
let cover = document.querySelector('.cover')
mobileIcon.addEventListener('click' , function (){
    asideElem.classList.add('open')
    cover.classList.add('cover--fade')
})
cover.addEventListener('click' , function (){
    asideElem.classList.remove('open')
    cover.classList.remove('cover--fade')
})
/*=======================================
            OVERVIEW PAGE
=======================================*/

/*=======================================
          OVERVIEW PAGE----CHART-BITCOIN
=======================================*/

/*=======================================
            OVERVIEW PAGE----OPERATION
=======================================*/

/*===============================================
    CHART-PAGES CHART.JS
===============================================*/
const ctx = document.getElementById('barChart').getContext('2d');

if (ctx) {
    // داده‌ها
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales Data',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // تنظیمات
    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    // ایجاد نمودار
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: barChartOptions,
    });
}





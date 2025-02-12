const root = document.documentElement
let asideBtnSParent = document.querySelector('.aside__btns')
let asideBtns = Array.from(document.querySelectorAll('.aside__btn'))
let headerFormInput = document.querySelector('.header-form__input')
let autoCompleteList = document.querySelector('.header-form__suggestion-list')
let autoCompleteWrapper = document.querySelector('.header-form__suggestion-wrapper')
let accountMassageWrapper = document.querySelector('.account__massage-wrapper')
let accountMassageBtn = document.querySelector('.account__massage-btn')
let accountEmail = document.querySelector('.account__email')
let emailBtn = document.querySelector('.email__btn')
let emailSuggestionWrapper = document.querySelector('.email-suggestion-wrapper')
let emailSuggestionList = document.querySelector('.email-suggestion-list')
let formEmail = document.querySelector('.email-form')
let emailInput = document.querySelector('.email-input')
let emailInputBtn = document.querySelector('.email-input__btn')
let headerFormSearchBtn = document.querySelector('.header-form__search-btn')


let inputValue,newLi;
let fragmentElem = document.createDocumentFragment();


function setLight(){
    asideBtns[0].classList.add('active')
    asideBtns[1].classList.remove('active')
    root.setAttribute('data-theme' , 'light')
}
function setDark(){
    asideBtns[1].classList.add('active')
    asideBtns[0].classList.remove('active')
    root.setAttribute('data-theme' , 'dark')
}

function windowLoaded(accounts,list){
    let savedTheme = localStorage.getItem('localTheme')
    if (savedTheme!= null){
        if (savedTheme === 'light'){
            setLight()
        }else {
            setDark()

        }
    }else {
        setLight()
    }
    addEmailToListFunc(accounts)
    let savedList = JSON.parse(localStorage.getItem('localSuggestionWord'))
    if (savedList){
        list = savedList
    }
    return list
}
function toLowerListFunc(list){
    return list.map(item => (typeof item === 'string' ? item.toLowerCase() : ''));
}


function addEmailToListFunc(accounts){
    fragmentElem.innerHTML = ''
    accounts.forEach(function (account){
        let newLi = document.createElement('li')
        newLi.className = 'email-suggestion-item'
        newLi.innerHTML = `
            <a href="#" class="email-suggestion-link">
                <img class="email-suggestion-link__image" src="${account['imgSrc']}">
                <div class="email-suggestion-link__information">
                    <span class="email-suggestion-link__username">${account['username']}</span>
                    <span class="email-suggestion-link__email">${account['email']}</span>
                </div>
            </a>
        `
        fragmentElem.append(newLi)
    })
    emailSuggestionList.append(fragmentElem)
    if (emailSuggestionList.children.length != ''){
        emailSuggestionWrapper.classList.add('py-10')
        emailSuggestionList.classList.add('open')
    }else {
        emailSuggestionWrapper.classList.remove('py-10')
        emailSuggestionList.classList.remove('open')
    }
}

function circleClicked(tag){
    console.log('ok')
}
function outoCompleteFunc(text, list) {
    // حذف کلاس‌های خاص از المان‌های مرتبط
    headerFormInput.classList.remove('header-form--hover');
    autoCompleteWrapper.classList.remove('show');
    autoCompleteList.innerHTML = ''; // پاک کردن لیست

    const lowerList = toLowerListFunc(list); // لیست به حروف کوچک

    // پاک‌سازی fragmentElem
    const fragmentElem = document.createDocumentFragment();

    // ایجاد پیشنهاد‌ها
    for (let i = 0; i < lowerList.length; i++) {
        if (lowerList[i].includes(text.toLowerCase())) {
            const newLi = document.createElement('li');
            /*newLi.innerText = list[i];*/
            newLi.className = 'header-form__suggestion-item';
            newLi.innerHTML = `
                <span class="header-form__suggestion-item-text">${list[i]}</span>
                <span class="header-form__suggestion-item-btn" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 100 100" >
                        <line x1="20" y1="20" x2="80" y2="80" stroke="" stroke-width="8" />
                        <line x1="80" y1="20" x2="20" y2="80" stroke="" stroke-width="8" />
                    </svg>
                </span>
            `
            fragmentElem.appendChild(newLi);
        }
    }

    // افزودن پیشنهاد‌ها به DOM
    autoCompleteList.appendChild(fragmentElem);

    // نمایش پیشنهادها در صورت وجود
    if (autoCompleteList.children.length > 0) {
        autoCompleteWrapper.classList.add('show');
    }
}
function headerFormSuggestionItemMouseOver(event) {
    // بررسی کنید که هدف، یک li باشد
    let targetElem = event.target.closest('.header-form__suggestion-item')
    if (targetElem) {
        headerFormInput.value = targetElem.firstElementChild.textContent;
    }
    headerFormInput.classList.add('header-form--hover')
}
function headerFormSuggestionItemMouseOut(){
    headerFormInput.classList.remove('header-form--hover')

}
function setLocalSuggestionWord(tag , list){

}
function removeWordOfList(tag,list){
    let text = tag.parentElement.firstElementChild.textContent
    list = list.filter(item => item !== text)
    localStorage.setItem('localSuggestionWord',JSON.stringify(list))
    tag.parentElement.remove()
    return list
    /*console.log(list)
    console.log(tag.parentElement.firstElementChild.textContent)*/
}
function headerFormSuggestionItemClicked(tag){
    headerFormInput.value = tag.firstElementChild.textContent;
    autoCompleteWrapper.classList.remove('show')
    autoCompleteList.innerHTML = ''
}
function headerFormSearchBtnHandler(text , list){
    text = text.trim()
    if (text){
        let isExist = list.some(item => item === text)
        if (!isExist){
            list.push(text)
            localStorage.setItem('localSuggestionWord',JSON.stringify(list))
        }
    }
    autoCompleteWrapper.classList.remove('show')
    return list
}
function emailSuggestionListhover(event){
    formEmail.classList.add('header-form--hover')
    if (event.target.classList.contains('email-suggestion-link')) {
        emailInput.value = event.target.lastElementChild.lastElementChild.textContent;
    }
}

function emailSuggestionListOut(){
    formEmail.classList.remove('header-form--hover')
}

function emailInputBtncClicked(accounts){
    let emailTarget = emailInput.value
    let targetAccount = accounts.find(function (account){
        return emailTarget === account['email']
    })
    let mainAccountImg = document.querySelector('.account__image')
    mainAccountImg.setAttribute('src' , targetAccount['imgSrc'])
    let mainAccountFName = document.querySelector('.email__fName')
    mainAccountFName.textContent = targetAccount['fName']
    let mainAccountLName = document.querySelector('.email__lName')
    mainAccountLName.textContent = targetAccount['lName']
    accountEmail.classList.remove('open')
}
function emailSuggestionListClicked(event){
    let liTarget = event.target.closest('.email-suggestion-item')
    if (liTarget){
        let emailTarget = liTarget.firstElementChild.lastElementChild.lastElementChild.innerHTML
        emailInput.value = emailTarget
        emailSuggestionList.classList.remove('open')
        emailSuggestionWrapper.classList.remove('py-10')
    }
}

function emailInputKeyupHandler(event, accounts) {
    emailSuggestionList.innerHTML = '';
    const fragmentElement = document.createDocumentFragment();
    let emailInputValue = event.target.value.toLowerCase();
    let updatedAccounts = accounts.map(account => ({
        ...account,
        email: account.email.toLowerCase(),
    }));

    for (let i = 0; i < updatedAccounts.length; i++) {
        if (updatedAccounts[i]['email'].includes(emailInputValue)) {
            let newLi = document.createElement('li');
            newLi.className = 'email-suggestion-item';
            newLi.innerHTML = `
                <a href="#" class="email-suggestion-link">
                    <img class="email-suggestion-link__image" src="${accounts[i].imgSrc}">
                    <div class="email-suggestion-link__information">
                        <span class="email-suggestion-link__username">${accounts[i].username}</span>
                        <span class="email-suggestion-link__email">${accounts[i].email}</span>
                    </div>
                </a>
            `;
            fragmentElement.appendChild(newLi); // افزودن به fragmentElement در همین‌جا
        }
    }

    emailSuggestionList.appendChild(fragmentElement); // اصلاح اشتباه تایپی
    if (emailSuggestionList.children.length > 0) {
        emailSuggestionWrapper.classList.add('py-10');
        emailSuggestionList.classList.add('open');
    } else {
        emailSuggestionWrapper.classList.remove('py-10');
        emailSuggestionList.classList.remove('open');
    }
}

export {root,windowLoaded,setLight,setDark,asideBtnSParent,asideBtns,headerFormInput,outoCompleteFunc,
    headerFormSuggestionItemMouseOver,headerFormSuggestionItemMouseOut,headerFormSuggestionItemClicked,autoCompleteList,
    autoCompleteWrapper,accountMassageWrapper,accountMassageBtn,emailBtn,accountEmail,addEmailToListFunc,
    emailSuggestionWrapper,emailSuggestionList,emailSuggestionListhover,emailSuggestionListOut,emailInputBtn,
    emailInputBtncClicked,emailInput,emailSuggestionListClicked,emailInputKeyupHandler,removeWordOfList,
    setLocalSuggestionWord,headerFormSearchBtn,headerFormSearchBtnHandler
}

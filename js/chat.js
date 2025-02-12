const chatLeftInput = document.querySelector('.chat_left-input')
const chatAccountsList = document.querySelector('.chat-accounts_list')
let chatAccountsItems = Array.from(chatAccountsList.children)
const chatContainer = document.querySelector(".chat-right_center");
document.addEventListener("DOMContentLoaded", () => {
    if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});
chatAccountsItems[0].classList.add('active')
chatAccountsList.addEventListener('click' , event => {
    let liTarget =event.target && event.target.closest('.chat-accounts_item')
    if (liTarget){
        chatAccountsItems.forEach(item => {
            item.classList.remove('active')
        })
        liTarget.classList.add('active')
    }
})
chatLeftInput.addEventListener('keyup' , function (){
    let inputValue = this.value.trim().toLowerCase()
    if (inputValue){
        chatAccountsItems.forEach(item => {
            if (item.lastElementChild.firstElementChild.textContent.toLowerCase().includes(inputValue)){
                item.style.display = 'flex'
            }else {
                item.style.display = 'none'
            }
        })

    }else {
        chatAccountsItems.forEach(item => {
            item.style.display = 'flex'
        })
    }
})

let chatRightHeaderRightIconWrapper = document.querySelector('.chat-right_header-right-icon-wrapper')
const chatColumnLeft = document.querySelector('.chat_column-left')
chatRightHeaderRightIconWrapper.addEventListener('click' , () => {
    chatColumnLeft.classList.add('fade')
})
let chatLeftHeaderFlesh = document.querySelector('.chat_left-header-flesh')
chatLeftHeaderFlesh.addEventListener('click' , () => {
    chatColumnLeft.classList.remove('fade')
})
const sendInputElem = document.querySelector('.chat-right_form-input')
const chatFormSendIcons = document.querySelector('.form_send-icon')
const chatContent = document.querySelector('.chat-right_center')
const chatRightForm = document.querySelector('.chat-right_form')
chatRightForm.addEventListener('submit' , (event) => {
    event.preventDefault()
})
function insertMassage() {
    let sendValue = sendInputElem.value;
    if (sendValue) {
        // گرفتن زمان فعلی
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;

        // اضافه کردن پیام به چت
        chatContent.insertAdjacentHTML('beforeend', `
            <div class="massage-send">
                <p class="massage-send_caption">${sendValue}</p>
                <span class="massage-time">${formattedTime}</span>
            </div>
        `);
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }
    sendInputElem.value = '';
}

chatFormSendIcons.addEventListener('click' , () => {
    insertMassage()
})
sendInputElem.addEventListener('keyup' , (event) => {
    event.preventDefault()
    if (event.code === 'Enter'){
        insertMassage()
    }
})
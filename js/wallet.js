const invoicesHeaderLink = document.querySelector('.invoices-header a')


invoicesHeaderLink.addEventListener('click' , function (){
    Swal.fire({
        title: 'آیا مطمئن هستید؟',
        text: 'این عمل قابل بازگشت نیست!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'بله، حذف شود!',
        cancelButtonText: 'نه، لغو شود!',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('حذف شد!', 'آیتم مورد نظر حذف شد.', 'success');
        }
    });

})
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('swal2-confirm')) {
        console.log('انجام شد!!!!!');
    }
});

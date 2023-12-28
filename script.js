const userNotifications = document.querySelectorAll('.users-notification');

userNotifications.forEach((notification)=>{
    notification.addEventListener('click',()=>{
      if(!(notification.classList.contains('active'))){
        notification.classList.toggle('active');
      }else{
        notification.classList.toggle('seen');
      }
    })
})
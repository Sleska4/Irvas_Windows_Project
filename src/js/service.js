const forms = (state) => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
        phoneInput = document.querySelectorAll('input[name="user_phone"]');

    phoneInput.forEach(el => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/\D/, '');
        });
    });

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так.'
    };

    const postData = async (url, data) => {
      document.querySelector('.status').textContent = message.loading;
      let res = await fetch(url, {
          method: "POST",
          body: data
      });

      return await res.text()
    };

    form.forEach(el => {
       el.addEventListener('submit', (e) =>{
           e.preventDefault();

           let statusMessage = document.createElement('div');
           statusMessage.classList.add('status');
           el.appendChild(statusMessage);

           const formDate = new FormData(el);
           if(el.getAttribute('data-calc') === 'end'){
               for(let key in state){
                   formDate.append(key, state[key]);
               }
           }

           postData('https://jsonplaceholder.typicode.com/posts', formDate)
               .then(res => {
                   statusMessage.textContent = message.success;
               })
               .catch(() => {
                   statusMessage.textContent = message.failure;
               })
               .finally(() => {
                   input.forEach((el) => {
                       el.value = '';
                   });
                   setTimeout(() => {
                       statusMessage.remove();
                   }, 5000)
               })
       });
    });
}

export default forms;
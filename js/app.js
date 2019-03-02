class Person {
    constructor (name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
} 

class UI {
    addPersonToList(person){
        const card = document.createElement('div');
        card.className = 'col-sm-4';
        card.innerHTML = `
                            <div class="card">
                                <div class="card-delete" data-card="">x</div>
                                <div class="card-block">
                                    <h3 class="card-title">${person.name}</h3>
                                    <p class="card-text"><strong>Email:</strong>${person.email}</p>
                                    <p class="card-text"><strong>Age:</strong>${person.age}</p>
                                </div>
                            </div>
                        `;
        document.querySelector('#parent_avatars').appendChild(card);
    }

    clearFields(){
        document.querySelector('#user_name').value = '';
        document.querySelector('#user_email').value = '';
        document.querySelector('#user_age').value = '';
    }

    deletePerson(target){
        if(target.classList.contains('card-delete')){
            target.parentElement.parentElement.remove();
        }
    }
}

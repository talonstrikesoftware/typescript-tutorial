import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({name: 'Name', age: 20 });

const root = document.getElementById('root')
if (root) {
    const userForm = new UserForm(root, user)
    userForm.render();
}
else {
    throw new Error('Root element not found');
}

const collection = User.buildUserCollection();
collection.on('change', () => {
    console.log(collection);
});

collection.fetch();


// console.log('hi there');
// import axios from 'axios';

// axios.post('http://0.0.0.0:3000/users', {
//     name: 'myname',
//     age: 20
// });
// console.log('hi there2');


// user.set({ name: 'newname', age:9999});
// console.log(user.get("name"));
// console.log(user.get("age"));

// Callback Hell example
class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            
        }
        setTimeout(() => {
            if(
                (id = 'ellie' && passoword === 'dream') ||
                (id = 'ellie' && passoword === 'academy')
            ){
                onSuccess(id);
            } else{
                onError(new Error('not found'));
            }
        },2000);
    }
}

getRoles(user, onSuccess, onError){
    setTimeout()) => {
        if (user === 'ellie'){
            onSuccess({name: 'ellie', role:'admin'});
        } else{
            onError(new Error)
        }
    }
}
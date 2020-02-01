const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const Func = {
    setVerifyEmail : (email) => {
        if(email.match(emailRegExp) == null || email === null || email === ''){
            alert('Please check your Email'); 
            return 'FAIL';
        }else{
            return 'SUCCESS';
        }
    }
}
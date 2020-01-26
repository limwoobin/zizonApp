export function setVerifyEmail(email){    
        let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(email.match(regExp) == null || email === null || email === ''){
            alert('Please check your Email'); 
            return 'FAIL';
        }else{
            return 'SUCCESS';
        }
}
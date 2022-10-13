export const toTitleCase = (text) => {
    return text.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export const formatDate = date => {
    const arr = date.split(",")
    return arr[1]+", "+arr[2].split(" ")[0]
}

export const getFilterDate = date => {
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`
}
export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const phoneValidation = (phone) => {
    if(phone.match(/^\d+$/)){
        if(phone.length == 10 || phone.length == 11){
            return true;                
        }else{
           return false;
        }
    }else{
        return false;
    }
}
export function validatePhoneNumber(input) {
    const phone = /^((\+7|7|8)+([0-9]){10})$/;

    if(input.search(phone) >= 0) {
        return true
    }

    return false
}

export function validateName(input) {
    const name = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

    if(input.search(name) >= 0) {
        return true
    }

    return false;
}

export function validateEmail(input) {
    const email = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if(input.search(email) >= 0) {
        return true
    }

    return false
}
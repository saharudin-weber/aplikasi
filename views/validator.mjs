import validator from "validator";


export const valid = (nama,email,password)=>{
    const emails = validator.isEmail(email)
    return emails
}

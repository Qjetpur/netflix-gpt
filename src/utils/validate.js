export const checkValidateData=(email,password,name)=>{
 const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
 const isPasswordValid=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)
 const isNameValid=/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);

 if(!isEmailValid) return "Enter valid Email Id";
 if(!isPasswordValid) return "Enter valid Password";
 if(!isNameValid) return "Enter valid Name";

 return null;
}
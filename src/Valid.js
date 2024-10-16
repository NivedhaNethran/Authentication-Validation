import React, { useState } from 'react'

const Validation = () => {
  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
  });
  const [error,setError] = useState({});
  const validate = () =>{
    const newErrors = {};
    if(!formData.username)newErrors.username = "Enter your username";
    if(!formData.email)newErrors.email = "Enter your mailID";
     else if(!/\S+@\S+\.\S+/.test(formData.email))newErrors.email = "Enter valid Email ID";
     if(!formData.password)newErrors.password = "Enter Password";
     else {
      if(formData.password.length<8)newErrors.password = "Password must contain atleast 8 characters";
      if(!/[A-Z]/.test(formData.password))newErrors.password = "Password must contain atleast one uppercase";
      if(!/[a-z]/.test(formData.password))newErrors.password = "Password must contain atleast one lowercase";
      if(!/[~!@#$%^&*()_+]/.test(formData.password))newErrors.password = "Password must contain atleast one special charecter";
     }
     if(!formData.confirmpassword)newErrors.confirmpassword = "this field is compalsory";
     else if(formData.password !== formData.confirmpassword)newErrors.confirmpassword = "Password does not match";
     return newErrors;
  };
  const handleChange = (e) =>{
    const{name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    const validationError = validate();
    if(Object.keys(validationError).length === 0){
      console.log("Form data validated",formData);
      alert('Form validate successsfully')
      setFormData({
        username: "",
        email:"",
        password:"",
        confirmpassword:"",
      });
      setError({});
    }else{
      setError(validate());
    }
  }
  return (
    <div>
      <div className='head'>Validation Form</div>
      <form onSubmit={handleSubmit}>
        <label>username</label><br/>
        <input
        type='text'
        name='username'
        value={formData.username}
        onChange={handleChange}
        /><br/>
        {error.username && <p>{error.username}</p>}
        <label>emailID</label><br/>
        <input
        type='text'
        name='email'
        value={formData.email}
        onChange={handleChange}
        /><br/>
         {error.email && <p>{error.email}</p>}
        <label>Password</label><br/>
        <input
        type='password'
        name='password'
        value={formData.password}
        onChange={handleChange}
        /><br/>
         {error.password && <p>{error.password}</p>}
         <label>ConfirmPassword</label><br/>
        <input
        type='password'
        name='confirmpassword'
        value={formData.confirmpassword}
        onChange={handleChange}
        /><br/>
         {error.confirmpassword && <p>{error.confirmpassword}</p>}
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Validation
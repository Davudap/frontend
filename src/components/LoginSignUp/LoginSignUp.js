import React, {useState} from 'react';


import './LoginSignUp.css'
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
 
    const navigate = useNavigate();
  
    const goToHomePage = () => {
      navigate("/home")
    }

    const [action,setAction] = useState("Iniciar Sesion");
    
    
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };


    const handleSubmitSignUP = async (e) => {
        e.preventDefault();

        try {
            const datos = JSON.stringify(formData);


            const response = await fetch('http://localhost:8080/usuarios', {
              method:'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: datos
            });

            const responseText = await response.text();

            if (response.status !== 201) {
              throw new Error(response.status + ' ' + responseText);
            }
            console.log('Registro exitoso:', response.statusText);
            console.log("usuario creado");
            alert(responseText);
        } catch (error) {
            console.error('Problema con operacion fetch:', error);
            alert(error);

          }

          setFormData({
            name: '',
            lastname: '',
            email: '',
            password: ''
          })

    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        try {

            
            const datos = JSON.stringify({email: formData.email, password: formData.password});


            const response = await fetch('http://localhost:8080/auth/login', {
              method:'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              mode: 'cors',
              body: datos
            });

            const responseText = await response.text();

            if (!response.ok) {
              throw new Error(response.status + ' ' + responseText);
            }
            console.log('Registro exitoso:', response.statusText);

            localStorage.setItem ('token', responseText); 
            localStorage.setItem ('user', formData.email);

            goToHomePage();

        } catch (error) {
            console.error('Problema con operacion fetch:', error);
            alert(error);

          }

          setFormData({
            name: '',
            lastname: '',
            email: '',
            password: ''
          })

    }

    return (
    <div className='container'>
        <div className='formContainer'>
            
            <div className='header'>
                <div className='text'>{action}</div>    
                <div className='underline'></div>
            </div>

            <div className='submitContainer'>
                <div className={action==="Crear Usuario"?"submit gray": "submit"} onClick={()=>{setAction("Iniciar Sesion")}}>Iniciar Sesion</div>
                <div className={action==="Iniciar Sesion"?"submit gray": "submit"} onClick={()=>{setAction("Crear Usuario")}}>Crear Usuario</div>
            </div>
            
            <form className='inputs'>
                
                {action==="Iniciar Sesion" ? <div></div>
                    :<div className='input'>
                        <input type='name' name='name' placeholder='nombre' value={formData.name} onChange={handleChange}/>
                    </div>

                }

                {
                    action==="Iniciar Sesion"
                   
                    ?<div></div>
                    
                    :<div className='input'>
                        <input type='lastname' name='lastname' placeholder='apellido' value={formData.lastname} onChange={handleChange}/>
                    </div>
                }


                <div className='input'>
                        <input type='email' name='email' placeholder='mail' value={formData.email} onChange={handleChange}/>
                </div>

                <div className='input'>
                    <input type='password' name='password' placeholder='contraseña' value={formData.password} onChange={handleChange}/>
                </div>
                
                {
                    action==="Iniciar Sesion"
                    
                    ?<input className='submitConfirm' type='submit' onClick={handleSubmitLogin}/>

                    :<input className='submitConfirm' type='submit' onClick={handleSubmitSignUP}/>
                }
                
            </form>

        </div>
    </div>
  )
}

export default LoginSignUp;

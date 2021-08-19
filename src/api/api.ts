import emailjs from "emailjs-com"
import {ValuesType} from '../Components/Contents/Contacts/TypeInput/Form';

export const sendForm = async (data:ValuesType) => {
    try {
        const response = await emailjs.send("service_feo39hp",
            "myEmail_message",{...data},
            "user_G2uXkjpE2L6d66ATdv0lH");
        return response.status === 200;
    }catch (error){
        console.log(error.message);
    }
}
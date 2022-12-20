import throttle from 'lodash.throttle';

const formRef = document.querySelector(".feedback-form");

formRef.addEventListener("input", throttle(formInput,500));

formRef.addEventListener("submit", onFormSubmit);

console.log("formRef",formRef);
 
const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message:"",
};

getInfoLocalStorage();

function formInput(element) {

    formData[element.target.name] = element.target.value;
     
    const formDataJson = JSON.stringify(formData);
    
    localStorage.setItem(STORAGE_KEY, formDataJson);
    
}
    
    function onFormSubmit(element) {
        element.preventDefault();
        
        console.log(element.target.value);

        console.log("formData", formData);

        for (const key in formData) {
            
        if (formData[key] === "") {
                return;
            }
        element.target.reset();
    
        localStorage.removeItem(STORAGE_KEY);
        }
}

function getInfoLocalStorage() {
    console.log("formData", formData);
    
    const savedInputInfo = localStorage.getItem(STORAGE_KEY);
    console.log("savedInputInfo", savedInputInfo);

    const objectFromlocalStorage = JSON.parse(savedInputInfo);
    console.log("objectFromlocalStorage",objectFromlocalStorage);
   
    if (!objectFromlocalStorage) {
        return;
    }

    for (const key in objectFromlocalStorage) {

    formRef.elements[key].value = objectFromlocalStorage[key];
   }

}

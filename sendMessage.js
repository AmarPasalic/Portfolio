
const submitFormButton = document.getElementById("submit");
emailjs.init("ZCjlDMghVdEOfz3o9")
submitFormButton.addEventListener("click", () => {
    let from_name = document.getElementById("from_name").value;
    let from_mail = document.getElementById("from_mail").value;
    let from_phone = document.getElementById("from_phone").value;
    let from_message = document.getElementById("from_message").value;

    emailjs.send("service_bqcu2b5", "template_9i5n4q4", {
        from_name: from_name,
        from_mail: from_mail,
        from_phone: from_phone,
        from_message: from_message,
    });
});
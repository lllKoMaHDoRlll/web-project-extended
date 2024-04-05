import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormHandlerService {
  constructor() {}

  isFormValid(
    name: string,
    phone: string,
    email: string,
    message: string,
    acception: string
  ): boolean {
    if (name == '') {
      alert('Please, enter name.');
      return false;
    }
    if (email != '' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      alert('Incorrect Email format.');
      return false;
    }
    if (
      phone != '' &&
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g.test(phone)
    ) {
      alert('Incorrect Phone format.');
      return false;
    }
    if (message == '') {
      alert('Please, enter message.');
      return false;
    }
    if (acception == 'false') {
      alert('Accept Politics privacy.');
      return false;
    }
    return true;
  }

  submitApplication(
    applyForm: FormGroup
  ) {
    if (!this.isFormValid(applyForm.value.name, applyForm.value.phone, applyForm.value.email, applyForm.value.message, applyForm.value.acception)) {
      return null;
    }

    let request = new XMLHttpRequest();
    request.open("POST", "https://formcarry.com/s/jfnPbjBfup");
    request.setRequestHeader("ACCEPT", "application/json");

    let data = new FormData();
    data.append("user-name", applyForm.value.name);
    data.append("user-phone", applyForm.value.phone);
    data.append("user-email", applyForm.value.email);
    data.append("user-message", applyForm.value.message);

    request.onreadystatechange = () => {
      if (request.readyState == XMLHttpRequest.DONE) {
        let status = request.status;
        if (status == 0 || (status >= 200 && status < 400)) {
          alert("Form was sended successfully.");
          applyForm.reset();
          localStorage.clear();
        }
        else {
          alert(`An error was occured while sending form. Error code: ${status}.`);
        }
      }
    };
    request.send(data);
    return request;
  }
}

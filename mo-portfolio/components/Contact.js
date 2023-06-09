import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Image from 'next/image';

const Contact = () => {
  //mail service setup
  const SERVICE_ID = "service_z87owkf";
  const TEMPLATE_ID = "template_8tedc7j";
  const USER_ID = "pmvdggxDNa_KLbrij";

  //send out mail on submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        });
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      });
    e.target.reset();
  };

  return (
    <section className="contact-section light-background" data-aos="zoom-in" id='contact'>
      {/* contact title section with image */}
      <div className="contact-section__title">
        <Image
          src="/contact.png"
          alt="Picture of me"
          width={450}
          height={570}
          className="d-block w-100 h-100" />
      </div>
      {/* coontact form */}
      <Form onSubmit={handleOnSubmit}>
        <p>Feel free to drop a message or arrange a coffee chat!</p>
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          required>
          <label>Email</label>
          <Input
            id='form-input-control-email'
            type='email'
            name='user_email'
            placeholder='Email…'
            icon='mail'
            iconPosition='left'
            required
          />
        </Form.Field>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Drop a message or let me know available timeslots to chat...'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </section>
  );
};

export default Contact;
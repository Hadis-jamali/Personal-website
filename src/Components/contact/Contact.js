import "./Contact.css";
function Contact() {
  return (
    <section id="section4">
      <div class="contact-me">
        <h1 class="text-contact">Contact Me</h1>
        <div class="contact">
          <form class="contact-form">
            <input type="text" class="input-form" placeholder=" Name" />
            <input type="email" class="input-form" placeholder=" Email" />
            <input type="text" class="input-form" placeholder=" Subject" />
            <div class="form-contact">
              <textarea rows="5" id="comment" name="text" placeholder=" Message"></textarea>
            </div>
            <div class="btn-contact">
              <button type="submit" class="btn-contactme">
                Contact Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;

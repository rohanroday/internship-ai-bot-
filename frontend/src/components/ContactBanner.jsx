import { ChatIcon, PhoneIcon, MailIcon } from "./icons";
import { openZiaChat } from "../utils/ziaChat";

export default function ContactBanner() {
  return (
    <section className="section container" id="contact">
      <div className="contact-banner reveal">
        <div>
          <h2>Still need help?</h2>
          <p>Our assistant is available any time. For anything it can't solve, our care team is here every day.</p>
          <ul className="contact-list">
            <li><PhoneIcon size={18} /> 1800-000-0000 · 9 AM – 9 PM IST, all days</li>
            <li><MailIcon size={18} /> care@nestora.example</li>
          </ul>
        </div>
        <button type="button" className="btn btn-accent btn-large" onClick={openZiaChat}>
          <ChatIcon size={18} /> Chat with the assistant
        </button>
      </div>
    </section>
  );
}

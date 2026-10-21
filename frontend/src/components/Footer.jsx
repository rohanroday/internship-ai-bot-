import { HomeIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" className="logo logo-on-dark">
            <span className="logo-mark"><HomeIcon size={18} /></span>
            <span className="logo-text">Nestora<span>Home</span></span>
          </a>
          <p>Furniture, decor and everyday home essentials, delivered across India.</p>
        </div>
        <div>
          <h4>Help topics</h4>
          <ul>
            <li><a href="#topics">Orders</a></li>
            <li><a href="#topics">Delivery & tracking</a></li>
            <li><a href="#topics">Returns & exchanges</a></li>
            <li><a href="#topics">Refund timing</a></li>
            <li><a href="#topics">Offers & rewards</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>1800-000-0000</li>
            <li>care@nestora.example</li>
            <li>9 AM – 9 PM IST, all days</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Nestora Home is a fictional demo store. All policies are sample values.</span>
        <span>Chat powered by Zoho Zia Agents</span>
      </div>
    </footer>
  );
}

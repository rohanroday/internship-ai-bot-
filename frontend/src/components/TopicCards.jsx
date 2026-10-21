import { BoxIcon, TruckIcon, AlertIcon, ReturnIcon, WalletIcon, GiftIcon, ArrowIcon } from "./icons";
import { askZia } from "../utils/ziaChat";

const TOPICS = [
  { Icon: BoxIcon, tone: "green", title: "Orders", text: "Place, change or cancel an order, and cash on delivery.", example: "Can I change my delivery address?" },
  { Icon: TruckIcon, tone: "blue", title: "Delivery & tracking", text: "Delivery times by city, charges, express and tracking.", example: "How long will delivery take?" },
  { Icon: AlertIcon, tone: "amber", title: "Damaged or wrong item", text: "Report a problem within 48 hours with photos.", example: "My item arrived damaged. What should I do?" },
  { Icon: ReturnIcon, tone: "violet", title: "Returns & exchanges", text: "Return windows by category and how to start a return.", example: "How many days do I have to return a rug?" },
  { Icon: WalletIcon, tone: "rose", title: "Refund timing", text: "When your refund arrives after a return or cancellation.", example: "When will I get my refund for a return?" },
  { Icon: GiftIcon, tone: "teal", title: "Offers, gift cards & rewards", text: "Coupons, gift cards, your Wallet, reward points and referrals.", example: "How do I earn reward points?" },
];

export default function TopicCards() {
  return (
    <section className="section container" id="topics">
      <div className="section-head reveal">
        <span className="kicker">Help topics</span>
        <h2>What can the assistant help with?</h2>
        <p>Pick a topic to ask its most common question. The answer opens in the chat.</p>
      </div>
      <div className="topic-grid">
        {TOPICS.map(({ Icon, tone, title, text, example }) => (
          <button key={title} type="button" className={`topic-card tone-${tone} reveal`} onClick={() => askZia(example)}>
            <span className="topic-icon"><Icon size={22} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="topic-try">“{example}” <ArrowIcon size={14} /></span>
          </button>
        ))}
      </div>
    </section>
  );
}

// import Felix from "./components/Felix";
// import Fluffykins from "./components/Fluffykins";
// import Whiskerson from "./components/Whiskerson";
// import Pumpkin from "./components/Pumpkin";
// import Contact from "./components/Contact";
import ContactProps from "./ContactProps";
import whiskerson from "./images/mr-whiskerson.png";
import fluffykins from "./images/fluffykins.png";
import felixcat from "./images/felix.png";
import pumpkin from "./images/pumpkin.png";
import "./App.css";

// const App1 = () => (
//   <main className="app">
//     <div className="alignment">
//       <Felix />
//       <Fluffykins />
//     </div>
//     <div className="alignment">
//       <Whiskerson />
//       <Pumpkin />
//     </div>
//     <Contact />
//   </main>
// );

const App2 = () => (
  <main className="app">
    <div className="main-card-alignment">
      <ContactProps
        img={whiskerson}
        pic_alt="Whiskerson the cat"
        phone_alt="Whiskerson's phone number"
        email_alt="Whiskerson's email address"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactProps
        img={fluffykins}
        pic_alt="Fluffykins the cat"
        phone_alt="Fluffykins' phone number"
        email_alt="Fluffykins' email address"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
    </div>
    <div className="main-card-alignment">
      <ContactProps
        img={felixcat}
        pic_alt="Felix the cat"
        phone_alt="Felix's phone number"
        email_alt="Felix's email address"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <ContactProps
        img={pumpkin}
        pic_alt="Pumpkin the cat"
        phone_alt="Pumpkin's phone number"
        email_alt="Pumpkin's email address"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  </main>
);

export {App2};

import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/9.jpg";
import Trip3 from "../assets/11.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Embark on a captivating journey through Indonesia, where vibrant cultures and stunning landscapes await. Start your adventure in Bali, known for its lush rice terraces and Hindu temples. Immerse yourself in the bustling markets of Jakarta, experiencing the dynamic urban life. Explore the ancient wonders of Borobudur and Prambanan in Yogyakarta, marveling at their intricate architecture. Head to Komodo Island to encounter the legendary Komodo dragons and dive into the crystal-clear waters to discover an underwater paradise. Conclude your trip in the tranquil Gili Islands, where pristine beaches and breathtaking sunsets provide the perfect backdrop for relaxation. Indonesia beckons with a tapestry of experiences, rich in diversity and natural beauty.
"
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text=" Embark on an enchanting journey through Malaysia, a country where modernity seamlessly blends with tradition. Begin your adventure in Kuala Lumpur, the bustling capital, home to the iconic Petronas Towers and vibrant street markets. Immerse yourself in the cultural tapestry of Penang, exploring historic Georgetown and savoring delectable street food. Venture into the lush landscapes of Cameron Highlands, where tea plantations and cool mountain air await. Discover the rich biodiversity of Borneo, encountering orangutans in Sepilok and exploring the biodiverse rainforests. Conclude your trip on the pristine beaches of Langkawi, where turquoise waters and lush greenery create a serene paradise. Malaysia beckons with a harmonious blend of diverse experiences and warm hospitality. "
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Embark on a captivating journey through the timeless beauty of France, where history, art, and gastronomy converge. Begin your adventure in Paris, the City of Lights, exploring iconic landmarks like the Eiffel Tower and Louvre Museum. Stroll along the charming streets of Montmartre and savor exquisite French cuisine in cozy bistros. Journey to the picturesque Provence region, with its lavender fields and charming villages, offering a taste of rustic elegance. Explore the historic châteaux of the Loire Valley, marveling at their architectural grandeur. Conclude your trip on the glamorous French Riviera, where azure waters meet chic coastal towns, providing the perfect blend of relaxation and sophistication. France awaits, promising a tapestry of cultural richness and unparalleled beauty."
        />
      </div>
    </div>
  );
}

export default Trip;

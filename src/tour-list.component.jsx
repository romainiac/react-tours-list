import Tour from './tour.component';

const TourList = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default TourList;

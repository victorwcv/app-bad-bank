import banner from "../assets/banner.jpeg";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      <Card
        src={banner}
        title="Welcom to Victor's BadBank!"
        text="At Victor's BadBank, we are dedicated to providing you with
    exceptional financial services tailored to meet your unique needs.
    Whether you're saving for the future, investing for growth, or
    securing a loan, we're here to help you achieve your financial
    goals."
        status="Welcome aboard! Sincerely, Victor's BadBank Team"
      />
    </div>
  );
}

export default Home;

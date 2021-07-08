import Header from "../../Header";

export default function projectDetails() {
  return (
    <section className="relative container max-w-[1400px]  min-h-screen flex flex-col">
      <Header />
      <div className="container max-w-[920px]">
        <div className="w-full">PlaceHolder Carousel Component</div>
        <h3>Project Name</h3> <h4>Project Date</h4>
        <div>Tags Div</div>
      </div>
    </section>
  );
}

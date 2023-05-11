import Button from "../UI/Button";
import rafiki from '../assets/rafiki.png'
import stats from '../assets/stats.png'

const Results = () => {
  return (
    <section className=" my-24 px-5 md:px-24">
      <article className=" flex justify-between items-center flex-col md:flex-row gap-14 md:gap-0">
        <section className=" md:w-2/5">
          <h3 className=" text-3xl md:text-4xl font-bold">Our Results</h3>
          <p className=" md:text-lg my-6">
            We are a team of like-minded people who do business, generate ideas
            and realize them. Finance, Marketing, Jurisprudence and Business
            Economy are our directions and we know how to deal with many
            financial issues.
          </p>
          <Button text={"READ MORE"} className={" bg-black text-white"} />
        </section>
        <img src={stats} alt="stats" className=" md:w-2/4" />
      </article>

      <article className=" flex justify-between items-center flex-col md:flex-row gap-14 md:gap-0 mt-20 md:mt-14">
        <img src={rafiki} alt="" className=" order-2 md:w-2/4" />
        <section className=" md:w-2/5">
          <div className=" mb-10">
            <h3 className=" text-2xl font-semibold">01. STARTUPS</h3>
            <p className=" capitalize md:text-lg font-light">
              Startuppers receive assistance in financial, legal, economical and
              human resources
            </p>
          </div>
          <div className=" mb-10">
            <h3 className=" text-2xl font-semibold">02. ANTI-CRISIS</h3>
            <p className=" capitalize md:text-lg font-light">Marketing research, analysis and creating marketing plan</p>
          </div>
          <div className=" mb-10">
            <h3 className=" text-2xl font-semibold">03. FINANCE</h3>
            <p className=" capitalize md:text-lg font-light">
              We provide businesses with all financial services including
              consultations, financial analysis
            </p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Results;

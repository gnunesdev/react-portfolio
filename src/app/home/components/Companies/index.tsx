import { Slider } from "../Slider";

export const Companies = () => {
  return (
    <section className="py-28">
      <h3 className="text-center text-5xl font-bold">trabalhos</h3>
      <p className="mt-2 text-center text-lg font-light">
        Essas são algumas das empresas que já tive a oportunidade de trabalhar
      </p>
      <div className="mt-12">
        <Slider items={["1", "1", "1", "1", "1", "1"]} />
      </div>
    </section>
  );
};

import Input from './Input.component';

const Info = () => {
  return (
    <section className="mt-10 text-center p-12 w-full mx-auto lg:text-left lg:p-8 lg:mt-0 lg:max-w-[500px] lg:space-y-10">
      <h1 className="tracking-[10.83px] text-[40px] space-y-2 mb-4 lg:text-[64px] lg:space-y-8">
        <span className="block text-desat-red font-light">WE'RE</span>
        <span className="block leading-[42px] lg:leading-[71px]">
          COMING SOON
        </span>
      </h1>
      <p className="text-desat-red text-[14px] leading-[22px] mb-6 lg:pr-16 lg:text-[16px]">
        Hellow fellow shoppers! We're currently building our new
        fashion store. Add your email below to stay up-to-date with
        announcements and our launch deals.
      </p>
      <section>
        <Input />
      </section>
    </section>
  );
};

export default Info;

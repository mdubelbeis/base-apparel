import Input from './Input.component';

const Info = () => {
  return (
    <section className="text-center p-8 w-[375px] sm:p-4 sm:max-w-[500px] lg:text-left lg:p-0 lg:max-w-[400px]">
      <h1 className="tracking-[10.83px] text-[40px] space-y-4 mb-4 md:mt-6 lg:text-[64px] lg:px-0">
        <span className="block text-desat-red font-light">WE'RE</span>
        <span className="block leading-[42px] lg:leading-[60px]">
          COMING SOON
        </span>
      </h1>
      <p className="text-desat-red text-[14px] leading-[22px] mb-6 lg:text-[16px]">
        Hello fellow shoppers! We're currently building our new
        fashion store. Add your email below to stay up-to-date with
        announcements and our launch deals.
      </p>
      <Input />
    </section>
  );
};

export default Info;

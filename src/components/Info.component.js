import Input from './Input.component';

const Info = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="tracking-[10.83px] text-[40px] space-y-2 mb-4">
        <span className="block text-desat-red font-light">WE'RE</span>
        <span className="block leading-[42px]">COMING SOON</span>
      </h1>
      <p className="text-desat-red text-[14px] leading-[22px] mb-6">
        Hellow fellow shoppers! We're currently building our new
        fashion store. Add your email below to stay up-to-date with
        announcements and our launch deals.
      </p>
      <section>
        <Input />
      </section>
    </div>
  );
};

export default Info;

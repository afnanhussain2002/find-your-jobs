import homeBanner from '../../../assets/images/user.png'

const HomeBanner = () => {
  return (
    <>
      <div className="hero min-h-[600px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={homeBanner}
            className="max-w-sm rounded-lg flex-1"
          />
          <div className="text-left flex-1 pl-5">
            <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
            <p className="py-6">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;

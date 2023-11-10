const DashboardContent = () => {
  return (
    <>
      <h1 className="  hover:cursor-default text-center font-thin text-content font-onest text-3xl w-1/2 mx-auto leading-tight mt-8">
        Leonardo's Dashboard
      </h1>
      <section className="hover:cursor-default lg:grid lg:grid-cols-2">
        <article className="mt-10">
          <h2 className="text-2xl font-black text-content">
            YOUR RECENT BUGS:
          </h2>
          {/* bugs will go here */} Bug 1
        </article>
        <div className="border-t-2 border-content">
          <h2 className="text-2xl font-black text-content">PROJECTS: </h2>
          <button>SEE ALL</button> <article>{/* bugs will go here */}</article>
          <article>Project 1</article>
        </div>
      </section>
    </>
  );
};

export default DashboardContent;

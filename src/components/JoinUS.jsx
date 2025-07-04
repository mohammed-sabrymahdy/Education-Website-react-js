export const JoinUS = () => {
  return (
    <section id="join-us">
      <div className="content">
        <p className="text-primary">Practice Advice</p>
        <h2>Join Us</h2>
        <p>
          Join us today and start your journey towards mastering the skills you
          need to succeed in the digital world. Our courses are designed to
          provide you with the knowledge and tools necessary to excel in your
          career.
        </p>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
          />
          <button type="submit" className="btn btn-primary">
            Sunscribe
          </button>
        </form>
      </div>
    </section>
  );
};

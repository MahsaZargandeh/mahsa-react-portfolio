export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        I am open to frontend developer opportunities in Germany and Austria.
      </p>

      <div className="contact-info">
        <div className="contact-info">
          <button
            onClick={() =>
              navigator.clipboard.writeText("m.zargandeh85@gmail.com")
            }
          >
            📧 Copy Email
          </button>

          <a
            href="https://github.com/MahsaZargandeh"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>

          <a href="لینک-لینکدین-تو" target="_blank" rel="noreferrer">
            💼 LinkedIn
          </a>
        </div>

        <a href="/CV-German.pdf" download>
          🇩🇪 German CV
        </a>

        <a href="/CV-English.pdf" download>
          🇬🇧 English CV
        </a>
      </div>
    </section>
  );
}

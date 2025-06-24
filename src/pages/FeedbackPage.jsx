import LatestFeedback from '../components/main/LatestFeedback';

const FeedbackPage = () => {
  return (
    <main>
      <LatestFeedback
        pt={'pt-40'}
        lightBG={'bg-white'}
        darkBG={'dark:bg-(--secBG)'}
        cardBG={'bg-(--offWhite)'}
      />
      <section
        id="newsletter"
        className="bg-(--offWhite) py-25 text-(--darkText) dark:bg-(--darkerBG) dark:text-white"
      >
        <div className="container flex flex-col items-start justify-between gap-14 md:flex-row md:gap-[7%]">
          <div className="xs:w-7/10 mx-auto flex w-full flex-col items-center gap-5 md:w-full md:basis-1/2">
            <div className="robo-wrapper w-full">
              <article className="robo group flex min-w-full flex-col items-center justify-center rounded-xl border border-transparent bg-white p-8 text-center shadow-lg transition-all duration-300 hover:border-(--button) hover:shadow-[0px_4px_6px_var(--logo)] md:min-w-66 dark:bg-(--secBG)">
                <i className="fa-solid fa-envelope mb-2 text-xl text-(--button)"></i>
                <h4 className="text-2xl font-bold text-(--logo)">Email</h4>
                <h5 className="my-2 font-bold text-(--darkText) group-hover:text-(--button) dark:text-white">
                  memaraaa123@gmail.com
                </h5>
                <a
                  href="mailto:memaraaa123@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-base font-bold text-(--button)"
                >
                  Send a message
                </a>
              </article>
            </div>

            <div className="robo-wrapper w-full">
              <article className="robo group flex min-w-full flex-col items-center justify-center rounded-xl border border-transparent bg-white p-8 text-center shadow-lg transition-all duration-300 hover:border-(--button) hover:shadow-[0px_4px_6px_var(--logo)] md:min-w-66 dark:bg-(--secBG)">
                <i className="fa-brands fa-whatsapp mb-2 text-xl text-(--button)"></i>
                <h4 className="text-2xl font-bold text-(--logo)">WhatsApp</h4>
                <h5 className="my-2 font-bold text-(--darkText) group-hover:text-(--button) dark:text-white">
                  +20109769####
                </h5>
                <a
                  href="https://wa.me/201097693049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-base font-bold text-(--button)"
                >
                  Send a message
                </a>
              </article>
            </div>

            <div className="robo-wrapper w-full">
              <article className="robo group flex min-w-full flex-col items-center justify-center rounded-xl border border-transparent bg-white p-8 text-center shadow-lg transition-all duration-300 hover:border-(--button) hover:shadow-[0px_4px_6px_var(--logo)] md:min-w-66 dark:bg-(--secBG)">
                <i className="fa-brands fa-facebook-messenger mb-2 text-xl text-(--button)"></i>
                <h4 className="text-2xl font-bold text-(--logo)">Messenger</h4>
                <h5 className="my-2 font-bold text-(--darkText) group-hover:text-(--button) dark:text-white">
                  Mohammed Emara
                </h5>
                <a
                  href="https://m.me/memaraaa123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-base font-bold text-(--button)"
                >
                  Send a message
                </a>
              </article>
            </div>
          </div>

          <form className="flex max-h-fit w-full flex-col gap-6 text-(--darkText) dark:text-white">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name.."
              required
              className="placeholder:font-jura w-full rounded-md border-1 shadow-[0px_4px_10px_rgba(0,0,0,0.2)] duration-300 transition-all  focus:shadow-[0px_4px_10px_var(--logo)] border-(--button) bg-white dark:bg-(--secBG) p-6 font-bold placeholder:font-bold"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email.."
              required
              className="placeholder:font-jura w-full rounded-md border-1 shadow-[0px_4px_10px_rgba(0,0,0,0.2)] duration-300 transition-all  focus:shadow-[0px_4px_10px_var(--logo)] border-(--button) bg-white dark:bg-(--secBG) p-6 font-bold placeholder:font-bold"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message.."
              required
              className="placeholder:font-jura scrollbar-thin scrollbar-thumb-(--button) scrollbar-track-white h-[200px] w-full resize-none overflow-y-auto rounded-md border-1 shadow-[0px_4px_10px_rgba(0,0,0,0.2)] duration-300 transition-all  focus:shadow-[0px_4px_10px_var(--logo)] border-(--button) bg-white dark:bg-(--secBG) p-6 font-bold placeholder:font-bold"
            ></textarea>
            <div className="xs:text-start font-jura mt-4 text-center text-base">
              <button
                type="submit"
                className="rounded-md bg-(--button) px-4 py-3 text-lg font-semibold text-white shadow-lg hover:bg-(--shine)"
              >
                Get Started
              </button>{' '}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FeedbackPage;
// document.addEventListener("DOMContentLoaded", function () {
//   emailjs.init("ngLjHaSK8D7NvI6kl");

//   const form = document.getElementById("contact-form");
//   if (form) {
//     form.addEventListener("submit", function (e) {
//       e.preventDefault();

//       const name = form.elements["name"].value;
//       const email = form.elements["email"].value;
//       const message = form.elements["message"].value;

//       emailjs
//         .send("service_e8mkrqf", "template_klpboni", {
//           name: name,
//           email: email,
//           message: message,
//         })
//         .then(
//           function () {
//             alert("Message sent!");
//             form.reset();
//           },
//           function (error) {
//             alert("FAILED: " + JSON.stringify(error));
//           }
//         );
//     });
//   }

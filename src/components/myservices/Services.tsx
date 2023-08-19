import { BsCheck2All } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services_container container grid grid-cols-3 gap-[3rem] max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[1.5rem]">
        <article className="service hover:cursor-default hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>FullStack Development</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Building custom web applications from scratch</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Developing scalable and robust API and integration</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Creating responsive and friendly user interfaces</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Design and implementation of database schema</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Automated & manual tests to ensure overall quality</p>
            </li>
          </ul>
        </article>
        <article className="service hover:cursor-default hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>Cloud Development</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Cloud-native app development & deployment</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Serverless Architecture design and implementation</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Dockerization and orchestration of applications</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Managing setup & management of CI / CD pipelines</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Scaling container management using Kubernetes</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Cloud Security and compliance management</p>
            </li>
          </ul>
        </article>
        <article className="service hover:cursor-default  hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>DevOps</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Managing setup & management of CI / CD pipelines</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>IAC implementation and management techniques</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Monitoring and logging setup and maintenance</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Cloud Security and compliance management</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Deployment Automation, Testing & Release Processes</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

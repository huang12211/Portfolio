// import { useTranslations } from 'next-intl';
// import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata() {
  // const t = await getTranslations({
  //   locale: props.params.locale,
  //   namespace: 'Synthe',
  // });

  return {
    title: 'Non-invasive Method for Tibial Mechanical-Axis Location',
    description: 'Non-invasive Method for Tibial Mechanical-Axis Location',
  };
}

export default function Design() {
  // unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('NaviScout');

  return (
    <div className="bg-gray-100 bg-opacity-30 pb-4">
      <div className="bg-gray-200">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-6 py-16 md:px-16">
          <div className="flex flex-col gap-2">
            <h1>Non-invasive Method for Tibial Mechanical Axis Location</h1>
            <h2 className="text-orange-400">
              A new way to register the tibia for total knee arthroplasties
            </h2>
          </div>
          <div className="caseIntro">
            <p>
              I along with a team of 6 other coworkers created a proof of concept for a non-invasive way to locate the mechanical axis of the tibia.
              A patent was then granted which can be consulted
              {' '}
              <span className="text-sky-600 hover:underline">
                <a href="https://patentsgazette.uspto.gov/week18/OG/html/1546-1/US12616486-20260505.html" target="_blank>">
                  here
                </a>
              </span>
              .
            </p>
            <p className="caseNonDisclosure">
              To comply with my non-disclosure agreement, I have omitted confidential information in this case study.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-screen-xl gap-10 px-6 py-16 md:px-16 lg:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4">
          <h4>The Goal:</h4>
          <div className="md:items-top grid grid-cols-3 place-items-center gap-4">
            <Image
              src="/assets/images/implantable_IMU.png"
              alt="reference patent image"
              width="638"
              height="1252"
              className="h-auto w-40 min-w-28 object-cover md:min-w-36 lg:w-[75%]"
            />
            <p className="col-span-2 text-lg">
              There was a mandate from leadership to build upon an previously filed patent on implantable sensors that surgeons could use to refine their cuts of the femur and the tibia
              in preparation for the installation of the knee joint implant instead of using an expensive robot.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4">
          <h4>My Role:</h4>
          <p className="text-lg">
            I was the acting
            {' '}
            <span className="text-orange-400">product manager</span>
            {' '}
            while maintaining my secondary role as the
            {' '}
            <span className="text-orange-400">mechanical designer</span>
            {' '}
            of the prototype.
          </p>
        </div>
      </div>

      <div>
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-lg md:px-16">
          <h3 className="text-center">Overview</h3>
          <p>
            As part of the innovation program, the initial mandate was to create different designs for the execution of a knee replacement surgery using the patented implantable IMU into the medullary canals of the femur and tibia.
            During the brainstorming phase of this project, a non-invasive method of locating the long axis of the tibia was identified and patented.
            Immediately upon presenting the ideas to leadership, they requested that a proof of concept be built in time for the board of directors visit in 3 months.
            The patented method required a redesign of the typical hardware used in knee replacement surgery in order to incorporate a distance measuring system.
            Creating this prototype became a passion project for the team, where many after-work crafting sessions took place in order to finish the prototype in time for the board of directors.
          </p>
        </div>
      </div>
      <div className="">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-lg md:px-16">
          <h3 className="text-center">Brainstorming Phase</h3>
          <div className="border border-gray-200 bg-gray-100 p-6">
            <h4 className="text-center">User Journeys</h4>
            <h5 className="pb-6">Iterations</h5>
            <Image
              src="/assets/images/InitialStoryBoard.png"
              alt="Final Story Board"
              width="639"
              height="819"
              className="h-auto w-full object-cover"
            />
            <p className="p-6 text-center">
              The generic user flow was first mapped out to be used to brainstorm multiple different technological solutions that could be implemented for each step of the workflow using the
              {' '}
              <span className="font-bold text-orange-400">Crazy 8s Method</span>
              .
              This lead to the generation of 3 different femur and 3 different tibial resection workflows. The pros and cons of each workflow was then presented to leadership.
            </p>
            <h5 className="py-6">Results</h5>
            <div className="grid grid-cols-4 items-end gap-4">
              <Image
                src="/assets/images/iAssistTibialAlignmentNoLeg.png"
                alt="iAssist Tibia Alignment System"
                width={616}
                height={1352}
                className="h-auto w-full object-cover"
              />
              <Image
                src="/assets/images/FinalMiniRobotStoryBoard.png"
                alt="Final Story Board"
                width="639"
                height="819"
                className="col-span-3 mx-auto h-auto w-[90%] object-cover"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 py-2">
              <p className="imageLabel">iAssist Tibial Alignment Guide</p>
              <p className="imageLabel col-span-3">Prototype of Novel Tibial Mechanical Axis Location Method</p>
            </div>
            <p className="p-6 text-center">
              The final workflow that was favoured by leadership for the tibia was the one that included a novel way
              to locate the tibia using hardware that is much
              {' '}
              <span className="font-bold text-orange-400">easier to manipulate</span>
              {' '}
              than the traditional tibial alignment guide.
            </p>
          </div>

        </div>
      </div>
      <div className="">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-lg md:px-16">
          <h3 className="text-center">Prototyping Phase</h3>
          <h4>Challenges</h4>
          <div className="grid grid-cols-1 gap-8 py-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-4">
              <h5>Expanding the Team</h5>
              <p className="pt-2 text-base">
                The original team that came up with the patented design, did not have the skills to create the software components that were required.
                So the initial challenge was to recruit some individiuals to build out software side for the proof of concept.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4">
              <h5>Negotiating without Authority</h5>
              <p className="pt-2 text-base">
                To recruit the people with the skills required to build out the envisionned prototype, we had to negotiate with project leads to
                ensure that all team members could dedicate at least 8 hours a week on this side project. Unfortunately, we had poor luck and around half of the projects that
                were under development at that time hit a emergent state due to various reasons and the software part of the prototype kept having to change hands.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4">
              <h5>Stepping up as Acting Product Manager</h5>
              <p className="pt-2 text-base">
                During the project's prototyping phase, the original product manager had to stop overseeing this project's progression. I therefore stepped up to the plate
                and took over their responsibilities temporarily until they were freed up to resume their role on this project. In the interim, I provided progress reports to the leadership team,
                advocated for the ressources the project needed, and dealt with all blocking points that came up.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-6 py-4 text-lg md:px-16">
          <h3 className="text-center">The Impact</h3>
          <p>
            The final prototype was presented to the board of directors in August of 2023.
            This led to the project being greenlit for the upcoming year's development roadmap.
          </p>
          <p className="pb-4 text-center text-gray-400">_______</p>
          <div className="flex flex-col gap-2 bg-gray-200 px-6 py-10 text-center">
            <p className="impactNumber text-orange-400">
              100
              <span className="impactPercent">%</span>
            </p>
            <p className="impactChange">Buy-in of the </p>
            <p className="impactMetric">Board of Directors</p>
            <p className="impactChange pt-6">
              The entire visiting board of directors were impressed and
              <span className="font-bold"> greenlit the budget</span>
              {' '}
              for the first year of development of the product.
            </p>
          </div>

          <p className="pb-6 text-center text-gray-400">_______</p>
        </div>
      </div>

      <div>
        <div className="mx-auto my-10 flex max-w-screen-xl flex-col gap-4 px-6 text-lg md:px-16">
          <h3 className="text-center">What I learned</h3>
          <p>
            This was a passion project for the entire team.
            It was the first instance in my corporate career where I had the chance to work alongside individuals who were passionate enough to work into the wee hours of the morning.
            We spent countless extra hours over our lunch breaks, and after work on this project to be able to deliver it on time.
            It was such a joy working in such a collaborative and productive environment that once the project was over, returning to normal everyday work seemed so dull.
            I've since learnt that I thrive in a fast-paced environment and tend to perform best when under pressure as I treat is as an invigorating challenge.

          </p>
        </div>
      </div>

    </div>
  );
}

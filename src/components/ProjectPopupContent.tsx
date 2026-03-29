import Image from 'next/image';

import { CPlusPlus } from './C++Logo';
import { Csharp } from './Csharp';
import { Css } from './CssLogo';
import { Figma } from './Figma';
import { HtmlLogo } from './HtmlLogo';
import { JavascriptLogo } from './JavascriptLogo';
import { Keras } from './KerasLogo';
import { Python } from './Python';
import { Scikitlearn } from './Scikitlearn';
import { Solidworks } from './Solidworks';
import { SQLiteLogo } from './SQLiteLogo';
import { Tensorflow } from './Tensorflow';
import { TypescriptLogo } from './TypescriptLogo';
import { Unity3D } from './Unity3D';

const ProjectPopupContent = (props: {
  project_title: string;
}) => {
  switch (props.project_title) {
    case 'Facial Emotion Detection':
      return (
        <>
          <div>
            <div>
              <p className="flex flex-wrap items-end gap-1">
                <p className="pt-2 font-bold underline">Codebase:</p>
                <a
                  href="https://github.com/huang12211/MIT_ML_AI_Course_FacialEmotionDetection"
                  target="_blank>"
                  className="text-sky-600 hover:underline"
                >
                  Github Repository
                </a>
              </p>
            </div>
            <p className="pt-2 font-bold underline">Project Description:</p>
            <p>
              CNN model chosen for implementation after exploring ANN, CNN and transfer learning possibilities to classify images of people expressing different facial emotions. The CNN model obtained an accuracy of 98% accuracy.
            </p>
            <p className="pt-2 font-bold underline">Project Takeaways:</p>
            <p>The 4-layer CNN model performed best in comparison to the following archtectures:</p>
            <ul>
              <li>- 3-layer, 4-layer and 6-layer CNN</li>
              <li>- VGG</li>
              <li>- ResNet50</li>
              <li>- EfficientNet</li>
            </ul>
            <p className="pt-2 font-bold underline">Tools:</p>
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <Python></Python>
              <Tensorflow></Tensorflow>
              <Keras></Keras>
              <Scikitlearn></Scikitlearn>
              {/* Google Colab */}
              {/* Pandas */}
            </div>
          </div>
        </>
      );
    case 'Invasive Hydrangea Species Detection':
      return (
        <>
          <div>
            <div>
              <p className="flex flex-wrap items-end gap-1">
                <p className="pt-2 font-bold underline">Codebase:</p>
                <a
                  href="https://github.com/huang12211/SYDE522-InvasiveSpecies"
                  target="_blank>"
                  className="text-sky-600 hover:underline"
                >
                  Github Repository
                </a>
              </p>
            </div>
            <p className="pt-2 font-bold underline">Project Description:</p>
            <p>
              Various machine learning algorithms were explored to evaluate their effectiveness on classifying
              the presence of invasive hydrangea in images; namely SVM, VGG16, ResNet, and CapsNet.
            </p>
            <p className="pt-2 font-bold underline">Project Takeaways:</p>
            <p>
              Given the computational constraints, the ResNet architecture ended up being the one that performed the best
              with an accuracy of 98.89% after being trained for 630 minutes. The ResNet model was not able to outperform
              the Inception-v3 algorithm that was submitted to the Kaggle competition which was developed using a more
              sophisticated GPU.
            </p>
            <p className="pt-2 font-bold underline">Tools:</p>
            <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4">
              <Python></Python>
              <Tensorflow></Tensorflow>
              <Keras></Keras>
              {/* Google Colab */}
              {/* Pandas */}
            </div>
          </div>
        </>
      );
    case 'Hockey Concussion Project':
      return (
        <>
          <div>
            <div>
              <p className="flex flex-wrap items-end gap-1">
                <p className="pt-2 font-bold underline">Codebase:</p>
                {/* <a
                    href="https://github.com/huang12211/SYDE522-InvasiveSpecies"
                    target="_blank>"
                    className="text-sky-600 hover:underline"
                  >
                    Github Repository
                  </a> */}
                No access due to partnership agreements.
              </p>
            </div>
            <p className="pt-2 font-bold underline">Project Description:</p>
            <p>
              A virtual reality environment was created to simulate different scenarios where participants were subjected
              to violent body-checks. EEG, ECG and EMG signals of participants were captured to identify whether or not these
              biosignals could serve as objective measures to diagnose concussions.
            </p>
            <p className="pt-2 font-bold underline">Project Takeaways:</p>
            <p className="italic">
              Development of Concussion Evaluation Tools Using Life-like VR Environments
            </p>
            <p className="text-[9px] md:text-sm">
              Sawires, Y., Huang, E., Gomes, A., Fernandes, K. & Wang, D. Development of Concussion Evaluation Tools Using Life-Like Virtual Reality Environments. in 326–333 (2018). doi:10.1007/978-3-319-92279-9_44
            </p>
            <p className="pt-2 font-bold underline">Tools:</p>
            <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4">
              <Csharp></Csharp>
              <CPlusPlus></CPlusPlus>
              <Unity3D></Unity3D>
              <Solidworks></Solidworks>
              {/* <Arduino></Arduino> */}
            </div>
          </div>
        </>
      );
    case 'Elaine\'s Easecipes':
      return (
        <>
          <div>
            <div>
              <p className="flex flex-wrap items-end gap-1">
                <p className="pt-2 font-bold underline">Codebase:</p>
                <a
                  href="https://github.com/huang12211/elaines_easecipes_ai"
                  target="_blank>"
                  className="text-sky-600 hover:underline"
                >
                  Github Repository
                </a>
              </p>
            </div>
            <p className="pt-2 font-bold underline">Project Description:</p>
            <p>
              A personal website built to stock all of my favourite recipes. Feel free to take a look! Mock-ups of
              the envisonned website were first created using Figma. The design was then implemented using the tools
              listed below.
            </p>
            <p className="pt-2 font-bold underline">Project Takeaways:</p>
            <p>
              Developing this website without a framework highlighted how frameworks make development simpler and why
              there are so many that exist.
            </p>
            <p className="pt-2 font-bold underline">Tools:</p>
            <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4">
              <Figma></Figma>
              <HtmlLogo></HtmlLogo>
              <Css></Css>
              <JavascriptLogo></JavascriptLogo>
              <TypescriptLogo></TypescriptLogo>
              <SQLiteLogo></SQLiteLogo>
            </div>
          </div>
        </>
      );

    case 'Test Case Generator (Multi-Agent System)':
      return (
        <>
          <div>
            <div>
              <p className="flex flex-wrap items-end gap-1">
                <p className="pt-2 font-bold underline">Codebase:</p>
                <a
                  href="https://github.com/huang12211/Test_Case_Generator_AI"
                  target="_blank>"
                  className="text-sky-600 hover:underline"
                >
                  Github Repository
                </a>
              </p>
            </div>
            <p className="pt-2 font-bold underline">Project Description:</p>
            <p>
              A locally hosted Agentic Workflow that leverages both Self-RAG and Human-in-the-loop techniques.
              It ingests software requirements and uses Llama3.1 to generate test cases in a strict output format.
              The AI Agent can be run in Langgraph Studio if desired.
            </p>
            <p className="pt-2 font-bold underline">Project Takeaways:</p>
            <p>
              Ollama and Langgraph have matured to a point where even those without coding experience can relatively seamlessly create AI Agents to automate some of the more tedious task of their jobs.
            </p>
            <p className="pt-2 font-bold underline">Tools:</p>
            <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4">
              <Python></Python>
              <Image
                src="/assets/Icons - General/ollama.png"
                alt="Ollama Logo"
                width={70}
                height={70}
                className="h-12 w-auto"
              />
              <Image
                src="/assets/Icons - General/langchain-logo.png"
                alt="Langchain Logo"
                width={70}
                height={70}
                className="h-12 w-auto"
              />
              <Image
                src="/assets/Icons - General/chroma.png"
                alt="Chroma Logo"
                width={70}
                height={70}
                className="h-12 w-auto"
              />
            </div>
          </div>
        </>
      );

    case 'AI Literature Review Generator':
      return (
        <>
          <div>
            <div>
              <p className="flex flex-wrap items-end gap-1">
                <p className="pt-2 font-bold underline">Codebase:</p>
                <a
                  href="https://github.com/huang12211/Local_MedDevMate"
                  target="_blank>"
                  className="text-sky-600 hover:underline"
                >
                  Github Repository
                </a>
              </p>
            </div>
            <p className="pt-2 font-bold underline">Project Description:</p>
            <p>
              This can help you to fulfill risk management documentation per ISO 14971 for new products.
              An automated Agent Flow designed to generate a literature review summary to identify known risks associated with the technology that will be integrated into the medical device under developement.
              It ingests a csv/xlsx export from any academic research database (ex: PubMed, Embase, etc.) and uses Gemini to evaluate the relevance of the articles.
              Gemini then analyzes the relevant articles to establish the hazards, harms, complications, and adverse events that must be included in the risk management file.
            </p>
            <p className="pt-2 font-bold underline">Project Takeaways:</p>
            <p>
              Langchain can be leveraged to automate tedious tasks that are part of the FDA medical devices development lifecycle without risking revealing private enterprise data.
            </p>
            <p className="pt-2 font-bold underline">Tools:</p>
            <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4">
              <Python></Python>
              <Image
                src="/assets/Icons - General/gemini.png"
                alt="Gemini Logo"
                width={3840}
                height={2160}
                className="h-12 w-auto"
              />
              <Image
                src="/assets/Icons - General/langchain-logo.png"
                alt="Langchain Logo"
                width={70}
                height={70}
                className="h-12 w-auto"
              />
            </div>
          </div>
        </>
      );

    default:
      return '';
  }
};

export { ProjectPopupContent };

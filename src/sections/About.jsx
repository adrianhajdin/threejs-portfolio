import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('jan@heimann.ai');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/jan_ghibli.png" alt="Jan Magnus Heimann" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Jan Magnus Heimann</p>
              <p className="grid-subtext">
                AI/ML Engineer specializing in Reinforcement Learning and Large Language Models with proven track record of deploying production-grade AI systems and delivering significant business impact.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="w-full sm:h-[276px] h-fit flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-4">
                <div className="flex items-center justify-center">
                  <img src="assets/python.png" alt="Python" className="w-12 h-12 object-contain" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="assets/react.svg" alt="React" className="w-12 h-12 object-contain" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="assets/pytorch.png" alt="PyTorch" className="w-12 h-12 object-contain" />
                </div>
                <div className="flex items-center justify-center col-start-1 col-end-3">
                  <img src="assets/typescript.png" alt="TypeScript" className="w-12 h-12 object-contain" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="assets/huggingface.png" alt="HuggingFace" className="w-12 h-12 object-contain" />
                </div>
              </div>
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Python, PyTorch, TensorFlow, and advanced ML frameworks for building robust and scalable AI applications including multi-agent RL systems and fine-tuned LLMs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 48.1351, lng: 11.5820, text: 'Munich, Germany', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Munich, Germany and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for AI & Machine Learning</p>
              <p className="grid-subtext">
                I love solving complex problems through AI and building systems that push the boundaries of what's possible. Machine Learning isn&apos;t just my profession—it&apos;s my passion for creating intelligent solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jan@heimann.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

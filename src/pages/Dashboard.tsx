import { BentoGrid, BentoGridItem } from "../components/ui/bentoGrids";
import MainLayout from "../components/MainLayout/MainLayout";
import { useRef, useEffect } from "react";
import SearchInput from "../components/ui/searchComponent";

 

  export function Dashboard() {
    return (
      <>
        <div className="w-full h-full overflow-hidden">
          <MainLayout >
            <div>
              <div className="flex flex-col justify-start mt-4 items-center h-48">
                <SearchInput
                  placeholder="Search"
                  trendingSearches={["AL/ML Project","Next","AI video generation","ML Projects"]}
                />

              </div>
              <BentoGrid className="mx-auto max-w-[90vw]">
                {items.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    openRoles={item.openRoles}
                  />
                ))}
              </BentoGrid>
            </div>
          </MainLayout>
        </div>
      </>
    );
  }
  const getRandomGradient = () => {
    const blueVioletHues = [220, 240, 260, 270, 280, 190, 200, 140, 160];
    const color1 = `hsl(${blueVioletHues[Math.floor(Math.random() * blueVioletHues.length)]}, 70%, 40%)`;
    const color2 = `hsl(${blueVioletHues[Math.floor(Math.random() * blueVioletHues.length)]}, 70%, 50%)`;
    return `linear-gradient(120deg, ${color1}, ${color2})`;
  };

  const Skeleton = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.background = getRandomGradient();
      el.classList.add('card-bg-animate')
      el.animate(
        [
          { backgroundPosition: "0% 50%" },
          { backgroundPosition: "100% 50%" },
          { backgroundPosition: "0% 50%" },
        ],
        {
          duration: 2000 + Math.random() * 2000,
          iterations: Infinity,
          direction: "alternate",
        }
      );
    }, []);

    return (
      <div
        ref={ref}
        className="flex hover:bg-blend-normal transition-all ease-in-out duration-200 flex-1 w-full h-full min-h-[6rem] max-h-[100px] md:max-h-[200px] rounded-xl overflow-hidden card-bg-animate"
        style={{
          backgroundSize: "200% 200%",
        }}
      ></div>
    );
  };
  const items = [
    {
      title: "3D Drone Simulator",
      description: "Simulate drone flight dynamics and controls in a virtual 3D space.",
      header: <Skeleton />,
      openRoles: ["Three.js", "React", "Physics.js", "TypeScript"],
    },
    {
      title: "AI Voice Detection",
      description: "Detect and analyze human voice patterns using deep learning.",
      header: <Skeleton />,
      openRoles: ["Python", "TensorFlow", "Audio Processing", "React"],
    },
    {
      title: "Smart Home Dashboard",
      description: "Control IoT devices and monitor your home environment remotely.",
      header: <Skeleton />,
      openRoles: ["React", "IoT", "MQTT", "Node.js"],
    },
    {
      title: "Real-Time Chat App",
      description: "Engage in secure, real-time communication using WebSockets.",
      header: <Skeleton />,
      openRoles: ["Next.js", "Socket.IO", "Tailwind", "MongoDB"],
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Track crypto prices and visualize your investments.",
      header: <Skeleton />,
      openRoles: ["React", "CoinGecko API", "Chart.js", "Redux"],
    },
    {
      title: "AR Furniture Preview",
      description: "Preview furniture in your room using augmented reality.",
      header: <Skeleton />,
      openRoles: ["Three.js", "React", "AR.js", "WebXR"],
    },
    {
      title: "AI Resume Screener",
      description: "Automatically evaluate resumes based on job requirements.",
      header: <Skeleton />,
      openRoles: ["Python", "NLP", "Flask", "React"],
    },
    {
      title: "Fitness Tracker with ML",
      description: "Analyze workout performance using motion data and machine learning.",
      header: <Skeleton />,
      openRoles: ["React Native", "TensorFlow", "Python", "Wearable SDKs"],
    },
    {
      title: "Live Code Collaboration",
      description: "Work together on code projects with live editing and Git support.",
      header: <Skeleton />,
      openRoles: ["React", "Monaco Editor", "Firebase", "WebRTC"],
    },
    {
      title: "AI Chatbot Assistant",
      description: "An intelligent virtual assistant to automate common tasks.",
      header: <Skeleton />,
      openRoles: ["Python", "LLMs", "LangChain", "React"],
    },
    {
      title: "3D Product Configurator",
      description: "Let users customize products with real-time 3D visuals.",
      header: <Skeleton />,
      openRoles: ["Three.js", "React", "TypeScript", "Zustand"],
    },
    {
      title: "Remote Learning Platform",
      description: "Create a space for interactive and virtual learning experiences.",
      header: <Skeleton />,
      openRoles: ["Next.js", "LiveKit", "Tailwind", "PostgreSQL"],
    },
    {
      title: "Gesture Recognition System",
      description: "Control systems using hand gestures with computer vision.",
      header: <Skeleton />,
      openRoles: ["OpenCV", "Python", "TensorFlow", "React"],
    },
    {
      title: "AI Art Generator",
      description: "Generate creative artworks from prompts using AI.",
      header: <Skeleton />,
      openRoles: ["Stable Diffusion", "Python", "Next.js", "Replicate API"],
    },
    {
      title: "Smart Traffic Monitor",
      description: "Optimize urban traffic using real-time AI data analysis.",
      header: <Skeleton />,
      openRoles: ["Python", "Computer Vision", "Flask", "React"],
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent digital voting with blockchain.",
      header: <Skeleton />,
      openRoles: ["Solidity", "React", "Web3.js", "Ethereum"],
    },
    {
      title: "Face-Based Attendance",
      description: "Track attendance using facial recognition technology.",
      header: <Skeleton />,
      openRoles: ["Python", "Face Recognition", "OpenCV", "React"],
    },
    {
      title: "Edge AI for Drones",
      description: "Deploy AI models on drones for real-time decision-making.",
      header: <Skeleton />,
      openRoles: ["Python", "Edge Computing", "TensorFlow Lite", "C++"],
    },
  ];

import React, { useEffect } from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bentoGrids";
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import MainLayout from "../components/MainLayout/MainLayout";
import {
  BackgroundGradientAnimation,
  BackgroundGradients,
  secondaryColors,
  teritiaryColors,
  fifthColors,
  fourthColors,
  firstColors,
} from "../components/ui/background-gradient-animation";

type SkeletonProps = {
  BackgroundGradientsStart: string;
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  fourthColor: string;
  fifthColor: string;
};

const Skeleton: React.FC<SkeletonProps> = ({
  BackgroundGradientsStart,
  fifthColor,
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] max-h-[100px] md:max-h-[200px] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <BackgroundGradientAnimation
      gradientBackgroundStart={BackgroundGradientsStart}
      gradientBackgroundEnd={BackgroundGradientsStart}
      fifthColor={fifthColor}
      firstColor={firstColor}
      secondColor={secondColor}
      thirdColor={thirdColor}
      fourthColor={fourthColor}
    />
  </div>
);

function getRandomGradientProps() {
  return {
    BackgroundGradientsStart:BackgroundGradients[Math.floor(Math.random() * BackgroundGradients.length)],
    BackgroundGradients: BackgroundGradients[Math.floor(Math.random() * BackgroundGradients.length)],
    firstColor: firstColors[Math.floor(Math.random() * firstColors.length)],
    secondColor: secondaryColors[Math.floor(Math.random() * secondaryColors.length)],
    thirdColor: teritiaryColors[Math.floor(Math.random() * teritiaryColors.length)],
    fourthColor: fourthColors[Math.floor(Math.random() * fourthColors.length)],
    fifthColor: fifthColors[Math.floor(Math.random() * fifthColors.length)],
  };
}

function createItem(
  title: string,
  description: string,
  icon: JSX.Element,
) {
  const gradientProps =  getRandomGradientProps() ;
  return {
    title,
    description,
    icon,
    header: <Skeleton
      BackgroundGradientsStart={gradientProps.BackgroundGradientsStart}
      firstColor={gradientProps.firstColor}
      secondColor={gradientProps.secondColor}
      thirdColor={gradientProps.thirdColor}
      fourthColor={gradientProps.fourthColor}
      fifthColor={gradientProps.fifthColor}
    />,
  };
}

const items = [
  createItem(
    "The Dawn of Innovation",
    "Explore the birth of groundbreaking ideas and inventions.",
    <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
  ),
  createItem(
    "The Digital Revolution",
    "Dive into the transformative power of technology.",
    <IconFileBroken className="h-4 w-4 text-neutral-500" />
  ),
  createItem(
    "The Art of Design",
    "Discover the beauty of thoughtful and functional design.",
    <IconSignature className="h-4 w-4 text-neutral-500" />
  ),
  createItem(
    "The Power of Communication",
    "Understand the impact of effective communication in our lives.",
    <IconTableColumn className="h-4 w-4 text-neutral-500" />
  ),
  createItem(
    "The Joy of Creation",
    "Experience the thrill of bringing ideas to life.",
    <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  ),
];

for (let i = 0; i < 10; i++) {
  items.push(
    createItem(
      "The Pursuit of Knowledge",
      "Join the quest for understanding and enlightenment.",
      <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    )
  );
}

export function Dashboard() {
  return (
    <div className="w-full h-full overflow-hidden">
      <MainLayout>
        <div>
          <BentoGrid className="mx-auto max-w-[80vw]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </MainLayout>
    </div>
  );
}

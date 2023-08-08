import { useState, useRef, useEffect } from 'react';
import { Text, Box } from '@chakra-ui/react';

export default function Logo() {
  const [active, setActive] = useState<boolean>(true);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<HTMLParagraphElement[]>([]);
  const radius = 1000;

  const shift = (
    image: HTMLParagraphElement,
    index: number,
    rangeX: number,
    rangeY: number
  ) => {
    const translationIntensity = 5;
    const maxTranslation = translationIntensity * (index + 1);
    const currentTranslation = `${maxTranslation * rangeX}% ${
      maxTranslation * rangeY
    }%`;

    const scale = 1.2;

    image.animate(
      { translate: currentTranslation, scale },
      { duration: 750, fill: 'forwards', easing: 'ease' }
    );
  };

  const shiftAll = (
    images: HTMLParagraphElement[],
    rangeX: number,
    rangeY: number
  ) => images.forEach((image, index) => shift(image, index, rangeX, rangeY));

  const shiftLogo = (e: MouseEvent) => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rangeX = (e.clientX - centerX) / radius;
      const rangeY = (e.clientY - centerY) / radius;

      shiftAll(imageRefs.current, rangeX, rangeY);
    }
  };

  const resetLogo = () => {
    setActive(false);
    shiftAll(imageRefs.current, 0.4, -0.7);
  };

  useEffect(() => {
    if (logoRef.current) {
      const images = logoRef.current.querySelectorAll('p');
      imageRefs.current = Array.from(images);
    }
  }, []);

  function getRandomColor(index: number) {
    if (index === 9) {
      return 'white';
    }
    const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <Box
      backgroundClip={'url("./background.mov")'}
      display="grid"
      placeItems={'center'}
      margin={'0'}
      cursor="pointer"
      width="100vw"
      height="100vh"
      ref={logoRef}
      id="logo"
      onMouseMove={(e: any) => {
        shiftLogo(e);
      }}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <Text
          key={index}
          fontWeight="bold"
          color={getRandomColor(index)}
          position="absolute"
          fontSize="4em"
        >
          {`mixø.xyz`.toLocaleUpperCase()}
        </Text>
      ))}
    </Box>
  );
}

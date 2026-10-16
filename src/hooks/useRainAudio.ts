import rainAudio from "../assets/audio/rain.mp3";

import { useEffect, useRef, useState } from "react";

export default function useRainAudio() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Failed to play rain audio: ", error);    
      }
    }
  };

  useEffect(() => {
    const audio = new Audio(rainAudio);
    audio.loop = true;
    audio.volume = 0.25;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  return { isPlaying, toggleAudio };
}

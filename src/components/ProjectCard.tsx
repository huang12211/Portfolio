'use client';
import Image from 'next/image';
import { useState } from 'react';

import { ProjectPopup } from './ProjectPopup';

const ProjectCard = (props: {
  card_image_src: string;
  popup_image_src: string;
  image_alt: string;
  title: string;
}) => {
  const [popupCard, openPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => openPopup(true)}
      >
        <div className="h-80 w-72 rounded-xl border-2 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] duration-150 hover:scale-105 hover:hover:shadow-[4px_4px_4px_rgba(0,0,0,0.5)]">
          <div className="h-64 overflow-hidden p-2">
            <Image
              src={props.card_image_src}
              alt={props.image_alt}
              width="144"
              height="144"
              className="mx-auto h-64 w-auto rounded-xl object-cover"
            />
          </div>
          <div className="my-2 h-12 w-full content-center px-2 text-base font-bold">
            <p>{props.title}</p>
          </div>
        </div>
      </button>

      <ProjectPopup
        trigger={popupCard}
        setTrigger={openPopup}
        project_title={props.title}
        image_src={props.popup_image_src}
        image_alt={props.image_alt}
      />
    </>
  );
};

export { ProjectCard };
